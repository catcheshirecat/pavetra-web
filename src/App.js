import React from 'react'
import { hot } from 'react-hot-loader/root'

import Dashboard from './components/Dashboard'
import Map from './components/Map'

function App() {
  return (
    <>
      <header>
      </header>
      <Map />
      <Dashboard />
    </>
  )
}

export default hot(App)
