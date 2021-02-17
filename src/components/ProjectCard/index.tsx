import React from 'react'
import { Frame, IFrame } from '@/atomic/atm/frame'
import { Project } from '@/models/project-model'
import { H3, H4 } from '@/atomic/atm/typography'
import { ProjectCardStyled } from './ProjectCard.styles'
import { VSeparator } from '@/atomic/atm/spacing'
import ButtonLink from '@/atomic/mol/button-link'

interface ProjectCardProps {
  reverse?: boolean
  data?: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, reverse }) => {
  const { title, subtitle, url } = data
  return (
    <ProjectCardStyled.Wrapper reverse={reverse}>
      <Frame size="large" color="acessory">
        <IFrame src={url} title={title} fillIn={true} />
      </Frame>
      <VSeparator size="small" />
      <Frame color="primary">
        <H3>{title}</H3>
        <VSeparator />
        <H4>{subtitle}</H4>
        <ButtonLink href={data.url}>
          <a target="_blank">Ver</a>
        </ButtonLink>
      </Frame>
    </ProjectCardStyled.Wrapper>
  )
}

export default ProjectCard
