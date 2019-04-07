import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader/root'

import Dashboard from './components/Dashboard'

class App extends Component {
  render () {
    return (
      <Fragment>
        <header>
        </header>
        <div />
        <Dashboard />
      </Fragment>
    )
  }
}

export default hot(App)
