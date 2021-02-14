import React from 'react'
import { MyComponent } from '@components/MyComponent'
import Head from 'next/head'

// TODO: import Logo  from '../assets/logo.svg

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <MyComponent />
    </div>
  )
}

export default Home
