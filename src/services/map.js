import Leaflet from 'leaflet'

import { MAP_INITIAL_ZOOM } from '../config/constants'
import { MAP_ACCESS_TOKEN } from '../config/keys'

const MAPBOX_STYLE = 'mapbox://styles/colorage/cjrujl9lp0k4o1fo6u1u8xiwc'

let map = null

export function initMap(id) {
  map = Leaflet.map(id, {
    center: [53.8981, 30.3325], // TODO use Geocoder
    zoom: MAP_INITIAL_ZOOM
  })

  Leaflet.mapboxGL({
    accessToken: MAP_ACCESS_TOKEN,
    style: MAPBOX_STYLE
  }).addTo(map)
}

export function addLayer(layer) {
  layer.addTo(map)
}

export function createFactoriesLayer(items) {
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

export function createStationsLayer(items) {
  const getIcon = ({ sensor_2_5: value }) => (
    Leaflet.icon({
      iconUrl: `/src/assets/images/station-${value}.svg`,
      iconSize: [34, 30]
    })
  )

  const markers = items.map(item => (
    Leaflet.marker(item.location, { icon: getIcon(item) })
  ))

  return Leaflet.layerGroup(markers)
}

export function getCenter() {
  const center = map.getCenter()

  return [center.lat, center.lng]
}

export function getKmRadius() {
  const bounds = map.getBounds()
  const meters = map.distance(bounds._southWest, bounds._northEast)

  return meters / 2 / 1000
}
