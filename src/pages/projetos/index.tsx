import { strings } from '@/atomic/atm/strings'
import Head from 'next/head'
import React from 'react'

const { pageTitle } = strings

const Projetos: React.FC = () => {
  return (
    <div>
      <Head>
        <title>{pageTitle.projetos}</title>
      </Head>
      <h1>Projetos</h1>
    </div>
  )
}

export default Projetos
