import { strings } from '@atomic/obj/strings'
import Head from 'next/head'
import React from 'react'

const { pageTitle } = strings

const Contato: React.FC = () => {
  return (
    <div>
      <Head>
        <title>{pageTitle.contato}</title>
      </Head>
      <h1>Contato</h1>
    </div>
  )
}

export default Contato
