import React, { Component } from 'react'
import Leaflet from 'leaflet'

import styles from './styles.css'

class Map extends Component {

  componentDidMount () {
    this.map = Leaflet.map('map', {
      center: [53.8981, 30.3325], // TODO use Geocoder
      zoom: 12 // TODO move to constants
    })

    Leaflet.mapboxGL({
      accessToken: 'pk.eyJ1IjoiY29sb3JhZ2UiLCJhIjoiY2pydWprd3A5MGIwNTQzbWlvNjZlamZqYiJ9.uLIjTgq8LswTckB7J3wGmw',
      style: 'mapbox://styles/colorage/cjrujl9lp0k4o1fo6u1u8xiwc'
    }).addTo(this.map)
  }

  render () {

    return (
      <div
        className={styles.map}
        id='map'
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    )
  }
}

export default Map
