import { strings } from '@/atomic/atm/strings'
import { H1 } from '@/atomic/atm/typography'
import Head from 'next/head'
import React from 'react'

const { pageTitle } = strings

const Projetos: React.FC = () => {
  return (
    <div>
      <Head>
        <title>{pageTitle.projetos}</title>
      </Head>
      <div
        style={{
          width: '100%',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <H1>Em breve</H1>
      </div>
    </div>
  )
}

export default Projetos
