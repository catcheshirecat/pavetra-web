import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

import { ReactComponent as Factory } from '../../assets/images/factory.svg'
import { ReactComponent as FactoryInactive } from '../../assets/images/factory-inactive.svg'
import { ReactComponent as Station } from '../../assets/images/station.svg'

import Endpoints from '../../config/endpoints'
import { initMap, createFactoriesLayer, addLayer } from '../../services/map'
import { getApi } from '../../services/api'

import styles from './styles.css'

const ID = 'map'

const Map = () => {
  const [factoriesLayer, setFactoriesLayer] = useState(null)
  const [areFactoriesVisible, setFactoriesVisibility] = useState(true)

  useEffect(() => {
    initMap(ID)

    getApi(Endpoints.factories())
      .then(result => {
        const layer = createFactoriesLayer(result)
        addLayer(layer)

        setFactoriesLayer(layer)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

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

  const factoriesClass = classnames({
    [styles['inactive-factories']]: !areFactoriesVisible
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
        <button><Station /></button>
        <button
          className={factoriesClass}
          onClick={toggleFactories}
        >{areFactoriesVisible ? <Factory /> : <FactoryInactive />}</button>
      </div>
    </div>
  )
}

export default Map
