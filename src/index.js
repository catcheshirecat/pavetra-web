import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './theme/init.css'

import 'leaflet/dist/leaflet.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import 'mapbox-gl-leaflet'
import 'mapbox-gl/dist/mapbox-gl'

ReactDOM.render(<App />, document.getElementById('app'))
