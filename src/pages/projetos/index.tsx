import { strings } from '@/atomic/atm/strings'
import ComingSoonPlaceholder from '@/components/ComingSoonPlaceholder'
import Head from 'next/head'
import React from 'react'

const { pageTitle } = strings

const Projetos: React.FC = () => {
  return (
    <div>
      <Head>
        <title>{pageTitle.projetos}</title>
      </Head>
      <ComingSoonPlaceholder />
    </div>
  )
}

export default Projetos
