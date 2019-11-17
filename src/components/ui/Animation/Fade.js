import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import uuid from 'uuid/v4'

import { ANIMATION_DURATION } from '../../../config/constants'

function Fade(props) {
  const { outer, children, duration, hidden, ...outerProps } = props
  const [key] = useState(uuid())

  const hiddenAnim = { opacity: 0 }
  const visibleAnim = { opacity: 1 }

  const Motion = motion[outer]

  return (
    <AnimatePresence initial={false}>
      {!hidden && (
        <Motion
          animate={visibleAnim}
          initial={hiddenAnim}
          key={key}
          exit={hiddenAnim}
          transition={{ duration: duration || ANIMATION_DURATION }}
          {...outerProps}
        >
          {children}
        </Motion>
      )}
    </AnimatePresence>
  )
}

Fade.defaultProps = {
  outer: 'div'
}

export default Fade
