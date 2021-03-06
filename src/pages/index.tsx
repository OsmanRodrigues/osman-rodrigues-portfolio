import React from 'react'
import Head from 'next/head'
import { strings } from '@/atomic/atm/strings'
import { Container, Col, Row } from 'react-grid-system'
import { Logo } from '@/assets/Logo'
import { HR, VSeparator } from '@/atomic/atm/spacing'
import { HomeStyled } from '@/styles/pages-style/home.style'
import { H2, Span } from '../atomic'
import { projects } from 'mocks'
import ProjectCard from '@/components/ProjectCard'

const { pageTitle } = strings
// TODO: implements masonry grid
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
            <VSeparator size="large" />
            <HR />
          </HomeStyled.BrandArea>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={10} sm={8} md={6}>
          <H2 centered={true}>
            Simplicidade, autenticidade <Span>&amp;</Span> foco nas{' '}
            <Span>pessoas</Span>. Como posso <Span>te ajudar</Span> hoje?
          </H2>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={10} sm={8} md={12}>
          <HomeStyled.Gallery>
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  reverse={index % 2 !== 0}
                  key={project.title + index}
                  data={project}
                />
              )
            })}
          </HomeStyled.Gallery>
        </Col>
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
