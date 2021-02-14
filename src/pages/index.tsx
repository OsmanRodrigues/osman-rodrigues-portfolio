import React from 'react'
import Head from 'next/head'
import { MyComponent } from '@components/MyComponent'

// TODO: import Logo  from '../assets/logo.svg

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <MyComponent />
    </div>
  )
}

export default Home
