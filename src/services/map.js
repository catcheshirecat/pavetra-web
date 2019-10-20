import Leaflet from 'leaflet'

import { MAP_INITIAL_ZOOM } from '../config/constants'
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
  if (map) {
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
}