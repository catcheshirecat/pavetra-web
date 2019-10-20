import Leaflet from 'leaflet'
import find from 'lodash/find'
import inRange from 'lodash/inRange'

import { MAP_INITIAL_ZOOM, STATION_METRICS } from '../config/constants'
import { MAP_ACCESS_TOKEN } from '../config/keys'

const MAPBOX_STYLE = 'mapbox://styles/colorage/cjrujl9lp0k4o1fo6u1u8xiwc'

let map = null

export const initMap = id => {
  map = Leaflet.map(id, {
    center: [53.8981, 30.3325], // TODO use Geocoder
    zoom: MAP_INITIAL_ZOOM
  })

  Leaflet.mapboxGL({
    accessToken: MAP_ACCESS_TOKEN,
    style: MAPBOX_STYLE
  }).addTo(map)

  return map
}

export const addLayer = (layer) => {
  layer.addTo(map)
}

export const createFactoriesLayer = (items) => {
  const icon = Leaflet.icon({
    iconUrl: '/src/assets/images/factory.svg',
    iconSize: [28, 24]
  })

  const markers = items.map(item => {
    const popup = Leaflet
      .popup({ closeButton: false, className: 'factory-popup' })
      .setContent(item.name)
    return Leaflet.marker([item.lat, item.long], { icon }).bindPopup(popup)
  })

  return Leaflet.layerGroup(markers)
}

export const createStationsLayer = (items) => {
  const getIcon = ({ sensor_2_5: value }) => (
    Leaflet.icon({
      iconUrl: `/src/assets/images/station-${value}.svg`,
      iconSize: [34, 30]
    })
  )

  const markers = items.map(item => {
    return Leaflet.marker(item.location, { icon: getIcon(item) })
  })

  return Leaflet.layerGroup(markers)
}
