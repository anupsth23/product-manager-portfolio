import React from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import { theme } from '../../styles/theme';

interface ProductManagerSkillsProps {
  competencies: string[];
  technicalSkills: {
    productManagement: string[];
    tools: string[];
    data: string[];
  };
}

// Animations
const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 20px rgba(74, 157, 255, 0.3); }
  50% { box-shadow: 0 0 30px rgba(74, 157, 255, 0.6); }
  100% { box-shadow: 0 0 20px rgba(74, 157, 255, 0.3); }
`;

const SkillsWrapper = styled(Section)`
  padding: ${theme.spacing.xxl} 0;
  background: linear-gradient(135deg, rgba(20, 25, 35, 0.95) 0%, rgba(30, 35, 45, 0.95) 100%);
`;

const SkillsContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const SkillsCard = styled.div`
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  animation: ${slideInUp} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(74, 157, 255, 0.4);
  }
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

const CompetenciesCard = styled.div`
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  margin-top: ${theme.spacing.xl};
  transition: all 0.3s ease;
  animation: ${slideInUp} 0.8s ease-out 0.2s both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(74, 157, 255, 0.4);
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

const ProductManagerSkills: React.FC<ProductManagerSkillsProps> = ({ 
  competencies, 
  technicalSkills 
}) => {
  return (
    <SkillsWrapper id="product-manager-skills">
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
              {['Python', 'SQL', 'R (basic)'].map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </SkillsList>
          </SkillsCard>
          
          <SkillsCard>
            <CategoryTitle>Cloud & Platforms</CategoryTitle>
            <SkillsList>
              {['AWS', 'Unix/Linux', 'Blockchain (Ethereum, Matic, BNB)'].map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
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
          
          <SkillsCard>
            <CategoryTitle>AI & Machine Learning</CategoryTitle>
            <SkillsList>
              {['AI/LLM', 'AI Product Strategy', 'LLM Integration', 'Prompt Engineering', 'Machine Learning'].map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </SkillsList>
          </SkillsCard>
        </SkillsGrid>
        
        <CompetenciesCard>
          <CategoryTitle>Core Competencies</CategoryTitle>
          <CompetenciesList>
            {competencies.map((competency, index) => (
              <Competency key={index}>{competency}</Competency>
            ))}
          </CompetenciesList>
        </CompetenciesCard>
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default ProductManagerSkills;
