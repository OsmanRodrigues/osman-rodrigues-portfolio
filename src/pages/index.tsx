import React from 'react'
import Head from 'next/head'
import { strings } from '@atomic/obj/strings'

import Logo from '../assets/img/or-logo.svg'

const { pageTitle } = strings

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>{pageTitle.home}</title>
      </Head>
      <h1>Home</h1>
      <Logo />
    </div>
  )
}

export default Home
