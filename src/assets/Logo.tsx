/* eslint-disable react/display-name */
import React from 'react'
import Image from 'next/image'

export const Logo = {
  OR: (): JSX.Element => (
    <Image
      src="/static/img/or-logo.svg"
      alt="or-logo"
      width={150}
      height={150}
    />
  )
}
