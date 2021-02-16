import React from 'react'
import Head from 'next/head'
import { strings } from '@/atomic/obj/strings'
import { Container, Col, Row } from 'react-grid-system'
import { Logo } from '@/assets/Logo'

const { pageTitle } = strings

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>{pageTitle.home}</title>
      </Head>
      <Row align="center">
        <Col xs={4}>
          <Logo.OR />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Home
