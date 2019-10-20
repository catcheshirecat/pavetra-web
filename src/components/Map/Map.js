import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

import { ReactComponent as Factory } from '../../assets/images/factory.svg'
import { ReactComponent as Station } from '../../assets/images/station.svg'

import Endpoints from '../../config/endpoints'
import { initMap, createFactoriesLayer, createStationsLayer, addLayer } from '../../services/map'
import { getApi } from '../../services/api'

import styles from './styles.css'

const ID = 'map'

const FACTORIES = 'factories'
const STATIONS = 'stations'


const Map = () => {
  const [factoriesLayer, setFactoriesLayer] = useState(null)
  const [areFactoriesVisible, setFactoriesVisibility] = useState(true)

  const [stationsLayer, setStationsLayer] = useState(null)
  const [areStationsVisible, setStationsVisibility] = useState(true)

  useEffect(() => {
    initMap(ID)

    // TODO refactor this
    getApi(Endpoints.factories())
      .then(result => {
        const layer = createFactoriesLayer(result)
        addLayer(layer)

        setFactoriesLayer(layer)
      })
      .catch(err => {
        console.error(err)
      })

    getApi(Endpoints.stations())
      .then(result => {
        const layer = createStationsLayer(result)
        addLayer(layer)

        setStationsLayer(layer)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const initLayer = () => {

  }

  const toggleFactories = () => {
    if (factoriesLayer) {
      if (areFactoriesVisible) {
        factoriesLayer.remove()
        setFactoriesVisibility(false)
      } else {
        addLayer(factoriesLayer)
        setFactoriesVisibility(true)
      }
    }
  }

  const toggleStations = () => {
    if (stationsLayer) {
      if (areStationsVisible) {
        stationsLayer.remove()
        setStationsVisibility(false)
      } else {
        addLayer(stationsLayer)
        setStationsVisibility(true)
      }
    }
  }

  const factoriesClass = classnames({
    [styles['factories-inactive']]: !areFactoriesVisible
  })
  const stationsClass = classnames({
    [styles['stations-inactive']]: !areStationsVisible
  })

  return (
    <div>
      <div
        className={styles.map}
        id={ID}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      <div className={styles['layers-switcher']}>
        <button
          className={stationsClass}
          onClick={toggleStations}
        ><Station /></button>
        <button
          className={factoriesClass}
          onClick={toggleFactories}
        ><Factory /></button>
      </div>
    </div>
  )
}

export default Map
