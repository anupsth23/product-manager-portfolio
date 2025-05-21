import React from 'react';
import styled from 'styled-components';
import { TechnicalSkills as TechnicalSkillsType } from '../../types';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import { theme } from '../../styles/theme';

interface SkillsProps {
  technicalSkills: TechnicalSkillsType;
  competencies: string[];
}

const SkillsWrapper = styled(Section)`
  background: linear-gradient(180deg, ${theme.colors.backgroundAlt} 0%, ${theme.colors.background} 100%);
  padding: ${theme.spacing.xxl} 0;
`;

const SkillsContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const SkillsCard = styled.div`
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

const CategoryTitle = styled.h3`
  font-size: ${theme.typography.sizes.title3};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  
  &::before {
    content: '//';
    color: ${theme.colors.primary};
    margin-right: ${theme.spacing.sm};
    font-family: 'Fira Code', monospace;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const Skill = styled.span`
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

const CompetenciesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const Competency = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.textSecondary};
  
  &::before {
    content: '→';
    color: ${theme.colors.primary};
    margin-right: ${theme.spacing.sm};
  }
`;

const Skills: React.FC<SkillsProps> = ({ technicalSkills, competencies }) => {
  return (
    <SkillsWrapper id="skills">
      <SkillsContainer>
        <Heading level={2} size="title1" gradient withAccent>
          Skills & Competencies
        </Heading>
        
        <SkillsGrid>
          <SkillsCard>
            <CategoryTitle>Product Management</CategoryTitle>
            <SkillsList>
              {technicalSkills.productManagement.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </SkillsList>
          </SkillsCard>
          
          <SkillsCard>
            <CategoryTitle>Tools & Technologies</CategoryTitle>
            <SkillsList>
              {technicalSkills.tools.map((tool, index) => (
                <Skill key={index}>{tool}</Skill>
              ))}
            </SkillsList>
          </SkillsCard>
          
          <SkillsCard>
            <CategoryTitle>Programming</CategoryTitle>
            <SkillsList>
              {technicalSkills.programming.map((lang, index) => (
                <Skill key={index}>{lang}</Skill>
              ))}
            </SkillsList>
          </SkillsCard>
          
          <SkillsCard>
            <CategoryTitle>Cloud & Platforms</CategoryTitle>
            <SkillsList>
              {technicalSkills.cloudPlatforms.map((platform, index) => (
                <Skill key={index}>{platform}</Skill>
              ))}
            </SkillsList>
          </SkillsCard>
          
          <SkillsCard>
            <CategoryTitle>Data & Analytics</CategoryTitle>
            <SkillsList>
              {technicalSkills.data.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </SkillsList>
          </SkillsCard>
        </SkillsGrid>
        
        <SkillsCard style={{ marginTop: theme.spacing.xl }}>
          <CategoryTitle>Core Competencies</CategoryTitle>
          <CompetenciesList>
            {competencies.map((competency, index) => (
              <Competency key={index}>{competency}</Competency>
            ))}
          </CompetenciesList>
        </SkillsCard>
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default Skills; 