import { strings } from '@/atomic/atm/strings'
import { H1 } from '@/atomic/atm/typography'
import ComingSoonPlaceholder from '@/components/ComingSoonPlaceholder'
import Head from 'next/head'
import React from 'react'

const { pageTitle } = strings

const Contato: React.FC = () => {
  return (
    <div>
      <Head>
        <title>{pageTitle.contato}</title>
      </Head>
      <ComingSoonPlaceholder />
    </div>
  )
}

export default Contato
