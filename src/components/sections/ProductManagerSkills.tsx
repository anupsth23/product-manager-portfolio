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
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

const MainCard = styled.div`
  background: ${theme.colors.aiSurface};
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.glassBorder};
  backdrop-filter: blur(20px);
  box-shadow: ${theme.shadows.aiGlow};
  padding: ${theme.spacing.xxl};
  position: relative;
  overflow: hidden;
  animation: ${slideInLeft} 0.8s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.aiAccent}, ${theme.colors.primary});
    animation: ${glow} 3s ease-in-out infinite;
  }
  
  &:hover {
    animation: ${pulse} 0.3s ease-in-out;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xxl};
  flex-wrap: wrap;
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.aiAccent});
  border-radius: 50%;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(74, 157, 255, 0.3);
  flex-shrink: 0;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const Subtitle = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 1.1rem;
  margin: 0;
  margin-top: ${theme.spacing.md};
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const SkillsSection = styled.div`
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;
`;

const CompetenciesSection = styled.div`
  animation: ${slideInRight} 0.8s ease-out 0.4s both;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  font-weight: 600;
  
  &::before {
    content: '🎯';
    margin-right: ${theme.spacing.md};
    font-size: 1.3rem;
  }
`;

const CompetenciesTitle = styled.h3`
  font-size: 1.4rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  font-weight: 600;
  
  &::before {
    content: '⚡';
    margin-right: ${theme.spacing.md};
    font-size: 1.3rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.lg};
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.1);
  transition: all 0.3s ease;
  min-height: 200px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(74, 157, 255, 0.3);
    transform: translateY(-5px);
  }
`;

const CategoryTitle = styled.h4`
  font-size: 1.1rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  font-weight: 600;
  display: flex;
  align-items: center;
  
  &::before {
    content: '•';
    color: ${theme.colors.primary};
    margin-right: ${theme.spacing.sm};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const SkillTag = styled.span`
  background: linear-gradient(135deg, rgba(74, 157, 255, 0.1), rgba(74, 157, 255, 0.2));
  border: 1px solid rgba(74, 157, 255, 0.3);
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-size: 0.95rem;
  color: ${theme.colors.textSecondary};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: linear-gradient(135deg, rgba(74, 157, 255, 0.2), rgba(74, 157, 255, 0.3));
    color: ${theme.colors.text};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(74, 157, 255, 0.2);
  }
`;

const CompetenciesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.md};
`;

const CompetencyItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.03);
  border-radius: ${theme.borderRadius.md};
  border: 1px solid rgba(74, 157, 255, 0.1);
  transition: all 0.3s ease;
  min-height: 60px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(74, 157, 255, 0.3);
    transform: translateX(5px);
  }
  
  &::before {
    content: '→';
    color: ${theme.colors.primary};
    margin-right: ${theme.spacing.md};
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const CompetencyText = styled.span`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.5;
`;

const ProductManagerSkills: React.FC<ProductManagerSkillsProps> = ({ 
  competencies, 
  technicalSkills 
}) => {
  return (
    <SkillsWrapper id="product-manager-skills">
      <Container>
        <MainCard>
          <HeaderSection>
            <IconWrapper>🚀</IconWrapper>
            <HeaderContent>
              <Heading 
                level={2} 
                size="title1" 
                gradient 
                withAccent
              >
                Product Manager Skills & Competencies
              </Heading>
              <Subtitle>
                Comprehensive skill set honed through years of product leadership and innovation
              </Subtitle>
            </HeaderContent>
          </HeaderSection>

          <ContentGrid>
            <SkillsSection>
              <SectionTitle>Technical Skills</SectionTitle>
              <SkillsGrid>
                <SkillCategory>
                  <CategoryTitle>Product Strategy</CategoryTitle>
                  <SkillsList>
                    {technicalSkills.productManagement.map((skill, index) => (
                      <SkillTag key={index}>{skill}</SkillTag>
                    ))}
                  </SkillsList>
                </SkillCategory>

                <SkillCategory>
                  <CategoryTitle>Tools & Technologies</CategoryTitle>
                  <SkillsList>
                    {technicalSkills.tools.map((tool, index) => (
                      <SkillTag key={index}>{tool}</SkillTag>
                    ))}
                  </SkillsList>
                </SkillCategory>

                <SkillCategory>
                  <CategoryTitle>Data & Analytics</CategoryTitle>
                  <SkillsList>
                    {technicalSkills.data.map((skill, index) => (
                      <SkillTag key={index}>{skill}</SkillTag>
                    ))}
                  </SkillsList>
                </SkillCategory>
              </SkillsGrid>
            </SkillsSection>

            <CompetenciesSection>
              <CompetenciesTitle>Core Competencies</CompetenciesTitle>
              <CompetenciesGrid>
                {competencies.map((competency, index) => (
                  <CompetencyItem key={index}>
                    <CompetencyText>{competency}</CompetencyText>
                  </CompetencyItem>
                ))}
              </CompetenciesGrid>
            </CompetenciesSection>
          </ContentGrid>
        </MainCard>
      </Container>
    </SkillsWrapper>
  );
};

export default ProductManagerSkills;
