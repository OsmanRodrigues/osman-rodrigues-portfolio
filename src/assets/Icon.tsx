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
  ),
  LinkedIn: (): JSX.Element => (
    <Image
      src="/static/img/linkedin-icon.svg"
      alt="linkedin-icon"
      width={32}
      height={32}
    />
  ),
  Whatsapp: (): JSX.Element => (
    <Image
      src="/static/img/whatsapp-icon.svg"
      alt="whatsapp-icon"
      width={32}
      height={32}
    />
  ),
  GitHub: (): JSX.Element => (
    <Image
      src="/static/img/github-icon.svg"
      alt="github-icon"
      width={32}
      height={32}
    />
  )
}
