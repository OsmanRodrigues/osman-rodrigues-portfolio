/* eslint-disable react/display-name */
import React from 'react'
import Image from 'next/image'

export const Icon = {
  Burger: (): JSX.Element => (
    <Image
      src="/static/img/burger-icon.svg"
      alt="burger-icon"
      width={20}
      height={20}
    />
  )
}
