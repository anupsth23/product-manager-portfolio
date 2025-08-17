import React from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import { theme } from '../../styles/theme';

interface SummaryProps {
  summary: string;
  vision?: string;
}

// Enhanced animations
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

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(3deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const SummaryWrapper = styled(Section)`
  overflow: hidden;
  padding: ${theme.spacing.huge} 0;
  position: relative;
`;

const SummaryContainer = styled(Container)`
  max-width: 900px;
  margin: 0 auto;
`;

const SummaryCard = styled.div`
  position: relative;
  padding: ${theme.spacing.xxl};
  background: ${theme.colors.aiSurface};
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.glassBorder};
  backdrop-filter: blur(20px);
  box-shadow: ${theme.shadows.aiGlow};
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${slideInUp} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), ${theme.shadows.aiGlow};
    border-color: rgba(74, 157, 255, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.aiAccent});
    border-radius: ${theme.borderRadius.xl} ${theme.borderRadius.xl} 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    background: ${theme.colors.aiGlow};
    filter: blur(30px);
    opacity: 0.4;
    border-radius: 50%;
    animation: ${glow} 3s ease-in-out infinite;
  }
`;

const MainHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  position: relative;
`;

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.lg};
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.aiAccent});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 6px 20px rgba(74, 157, 255, 0.3);
  animation: ${float} 4s ease-in-out infinite;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const ContentSection = styled.div`
  position: relative;
  padding: ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.02);
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(74, 157, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

const SectionIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.md};
  background: linear-gradient(135deg, ${theme.colors.aiAccent}, ${theme.colors.primary});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 4px 12px rgba(161, 112, 246, 0.3);
`;

const SectionTitle = styled.h3`
  font-size: ${theme.typography.sizes.title3};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.text};
  margin: 0;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.aiAccent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SummaryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.colors.textSecondary};
  margin: 0;
  font-weight: 400;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.15rem;
  }
`;

const VisionText = styled(SummaryText)`
  font-style: italic;
  color: ${theme.colors.text};
  font-weight: 500;
`;

const DecorativeElement = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: ${theme.colors.aiAccent};
  border-radius: 50%;
  opacity: 0.6;
  animation: ${float} 3s ease-in-out infinite;
  
  &.dot-1 {
    top: 20px;
    right: 30px;
    animation-delay: 0s;
  }
  
  &.dot-2 {
    top: 40px;
    right: 50px;
    animation-delay: 1s;
  }
  
  &.dot-3 {
    top: 60px;
    right: 20px;
    animation-delay: 2s;
  }
`;

const Summary: React.FC<SummaryProps> = ({ summary, vision }: SummaryProps) => {
  return (
    <SummaryWrapper id="summary" aiPattern>
      <SummaryContainer>
        <SummaryCard>
          <MainHeader>
            <MainTitle>
              <IconWrapper>🌟</IconWrapper>
              <Heading 
                level={2} 
                size="title1" 
                marginBottom="none" 
                gradient
              >
                About Me
              </Heading>
            </MainTitle>
          </MainHeader>
          
          <ContentGrid>
            <ContentSection>
              <SectionHeader>
                <SectionIcon>💡</SectionIcon>
                <SectionTitle>Professional Summary</SectionTitle>
              </SectionHeader>
              <SummaryText>{summary}</SummaryText>
            </ContentSection>
            
            {vision && (
              <ContentSection>
                <SectionHeader>
                  <SectionIcon>🚀</SectionIcon>
                  <SectionTitle>My Vision</SectionTitle>
                </SectionHeader>
                <VisionText>{vision}</VisionText>
              </ContentSection>
            )}
          </ContentGrid>
          
          <DecorativeElement className="dot-1" />
          <DecorativeElement className="dot-2" />
          <DecorativeElement className="dot-3" />
        </SummaryCard>
      </SummaryContainer>
    </SummaryWrapper>
  );
};

export default Summary; 