import React from 'react'
import Head from 'next/head'
import { strings } from '@/atomic/atm/strings'
import { Container, Col, Row } from 'react-grid-system'
import { Logo } from '@/assets/Logo'
import { HR, VSeparator } from '@/atomic/atm/spacing'
import { HomeStyled } from '@/styles/pages-style/home.style'
import { H2 } from '../atomic'

const { pageTitle, pageText } = strings

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>{pageTitle.home}</title>
      </Head>
      <Row justify="center">
        <Col>
          <HomeStyled.BrandArea>
            <Logo.OR />
            <VSeparator />
            <HR />
          </HomeStyled.BrandArea>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={10} sm={8} md={6}>
          <H2 centered={true}>{pageText.home.HeroMessage}</H2>
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
