import React from 'react'
import { Frame, IFrame } from '@/atomic/atm/frame'
import { Project } from '@/models/project-model'
import { H3, H4 } from '@/atomic/atm/typography'
import { ProjectCardStyled } from './ProjectCard.styles'
import { VSeparator } from '@/atomic/atm/spacing'

interface ProjectCardProps extends Project {
  reverse?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  url,
  reverse
}) => {
  return (
    <ProjectCardStyled.Wrapper reverse={reverse}>
      <Frame size="large" color="acessory">
        <IFrame src={url} title={title} fillIn={true} />
      </Frame>
      <VSeparator size="small" />
      <Frame color="primary">
        <H3>{title}</H3>
        <H4>{subtitle}</H4>
      </Frame>
    </ProjectCardStyled.Wrapper>
  )
}

export default ProjectCard
