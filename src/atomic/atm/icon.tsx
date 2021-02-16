/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import React from 'react'

export const Icon = {
  Burger: () => (
    <svg width="20" height="20">
      <line
        x1="0"
        y1="5"
        x2="20"
        y2="5"
        style={{ stroke: 'black', strokeWidth: 1 }}
      />
      <line
        x1="0"
        y1="10"
        x2="20"
        y2="10"
        style={{ stroke: 'black', strokeWidth: 1 }}
      />
      <line
        x1="0"
        y1="15"
        x2="20"
        y2="15"
        style={{ stroke: 'black', strokeWidth: 1 }}
      />
    </svg>
  )
}
