import React from 'react'
import Head from 'next/head'
import Logo from '../assets/img/or-logo.svg'
import { strings } from '@/atomic/obj/strings'

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
