import React from 'react';
import styled from 'styled-components';
import { Project as ProjectType } from '../../types';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Image from '../ui/Image';
import { theme } from '../../styles/theme';

interface ProjectsProps {
  projects: ProjectType[];
}

const ProjectsWrapper = styled(Section)`
  background: linear-gradient(180deg, ${theme.colors.backgroundAlt} 0%, ${theme.colors.background} 100%);
  padding: ${theme.spacing.xxl} 0;
`;

const ProjectsContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const ProjectCard = styled.div`
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 120px;
  margin-bottom: ${theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  font-size: ${theme.typography.sizes.title3};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.6;
`;

const ProjectRole = styled.p`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
  font-weight: 500;
`;

const ProjectImpact = styled.p`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.6;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const Technology = styled.span`
  background: rgba(74, 157, 255, 0.1);
  border: 1px solid rgba(74, 157, 255, 0.2);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.textSecondary};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 157, 255, 0.2);
    color: ${theme.colors.text};
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '#';
    color: ${theme.colors.primary};
    margin-right: 4px;
  }
`;

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <ProjectsWrapper id="projects">
      <ProjectsContainer>
        <Heading level={2} size="title1" gradient withAccent>
          Projects
        </Heading>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage
                src={project.image}
                alt={project.title}
                isLogo={true}
              />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectRole>{project.role}</ProjectRole>
              <ProjectImpact>{project.impact}</ProjectImpact>
              <TechnologiesList>
                {project.technologies.map((tech, idx) => (
                  <Technology key={idx}>{tech}</Technology>
                ))}
              </TechnologiesList>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects; 