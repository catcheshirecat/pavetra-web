import React from 'react'
import { hot } from 'react-hot-loader/root'

import Dashboard from './components/Dashboard'
import Map from './components/Map'
import Report from './components/Report'

function App() {
  return (
    <>
      <header>
      </header>
      <Map />
      <Report />
      <Dashboard />
    </>
  )
}

export default hot(App)
