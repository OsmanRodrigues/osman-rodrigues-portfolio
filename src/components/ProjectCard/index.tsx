import React from 'react'
import Image from 'next/image'
import { Frame } from '@/atomic/atm/frame'
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
  const { title, subtitle, img } = data
  return (
    <ProjectCardStyled.Wrapper reverse={reverse}>
      <Frame size="large" color="acessory">
        <Image
          src={img}
          width={315}
          height={315}
          layout="intrinsic"
          objectFit="contain"
        />
      </Frame>
      <VSeparator size="small" />
      <Frame color="primary">
        <H3>{title}</H3>
        <VSeparator />
        <H4>{subtitle}</H4>
        <ButtonLink href={data.url}>
          <a rel="noreferrer" target="_blank">
            Ver
          </a>
        </ButtonLink>
      </Frame>
    </ProjectCardStyled.Wrapper>
  )
}

export default ProjectCard
