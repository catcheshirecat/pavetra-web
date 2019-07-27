import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader/root'

import Dashboard from './components/Dashboard'
import Map from './components/Map'

const App = () => (
  <Fragment>
    <header>
    </header>
    <Map />
    <Dashboard />
  </Fragment>
)

export default hot(App)
