import React from 'react'
import Head from 'next/head'
import { NavBar } from '@components/NavBar/NavBar'

// TODO: import Logo  from '../assets/logo.svg

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar />
    </div>
  )
}

export default Home
