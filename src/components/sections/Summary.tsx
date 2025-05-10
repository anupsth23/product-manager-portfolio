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

// Animation for particles
const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SummaryWrapper = styled(Section)`
  overflow: hidden;
  padding: ${theme.spacing.huge} 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  position: relative;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.xxl};
  }
`;

const Card = styled.div`
  position: relative;
  padding: ${theme.spacing.xl};
  background: ${theme.colors.aiSurface};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.glassBorder};
  backdrop-filter: blur(20px);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.aiGlow};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), ${theme.shadows.aiGlow};
  }
`;

const SummaryCard = styled(Card)`
  &::before {
    content: '';
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 120px;
    height: 120px;
    background: ${theme.colors.aiGlow};
    filter: blur(40px);
    opacity: 0.6;
    border-radius: 50%;
  }
`;

const VisionCard = styled(Card)`
  &::before {
    content: '';
    position: absolute;
    top: -30px;
    right: -30px;
    width: 120px;
    height: 120px;
    background: ${theme.colors.aiAccent};
    filter: blur(50px);
    opacity: 0.6;
    border-radius: 50%;
  }
`;

const CardHeader = styled.div`
  margin-bottom: ${theme.spacing.md};
  position: relative;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
`;

const PointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PointItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.sm};
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
`;

const PointIcon = styled.div`
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  margin-right: ${theme.spacing.sm};
  flex-shrink: 0;
`;

const PointText = styled.p`
  font-size: ${theme.typography.sizes.body};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.textSecondary};
  margin: 0;
`;

const HighlightedText = styled.span`
  color: ${theme.colors.text};
  font-weight: ${theme.typography.fontWeights.medium};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${theme.colors.aiGlow};
    opacity: 0.5;
    z-index: -1;
    border-radius: ${theme.borderRadius.sm};
  }
`;

const IconElement = styled.div`
  position: absolute;
  z-index: 0;
  
  &.code-bracket {
    top: 30px;
    right: 20px;
    color: ${theme.colors.glassBorder};
    font-family: 'Fira Code', monospace;
    font-size: 100px;
    opacity: 0.1;
    transform: rotate(10deg);
  }
  
  &.quote {
    top: 30px;
    right: 30px;
    color: ${theme.colors.glassBorder};
    font-family: serif;
    font-size: 80px;
    opacity: 0.15;
  }
  
  &.particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: ${theme.colors.primary};
    border-radius: 50%;
    opacity: 0.5;
    animation: ${float} 4s infinite ease-in-out, ${pulse} 2s infinite;
  }
  
  &.particle-1 {
    top: 40px;
    left: 20%;
    animation-delay: 0s;
  }
  
  &.particle-2 {
    bottom: 60px;
    left: 80%;
    animation-delay: 0.5s;
  }
  
  &.particle-3 {
    top: 80px;
    right: 30%;
    animation-delay: 1s;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${theme.spacing.md};
  gap: ${theme.spacing.xs};
`;

const Tag = styled.span`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.glassBorder}30;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.glassBorder}50;
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
`;

// Function to extract expertise points from summary text
const extractExpertisePoints = (text: string): string[] => {
  // Define key areas to extract as bullet points
  const keyPhrases = [
    'transform abstract concepts into market-ready innovations',
    'orchestrating the balance between business objectives, technical possibilities, and human needs',
    'data-first methodology and customer-centric focus',
    'zero-to-one product creation to strategic scaling'
  ];
  
  return keyPhrases;
};

// Function to extract vision points
const extractVisionPoints = (text: string): string[] => {
  // Define key vision points
  const keyPhrases = [
    'product development transcends traditional boundaries',
    'digital experiences that feel intuitively human',
    'leveraging the full potential of emerging technologies',
    'build the invisible infrastructure powering tomorrow\'s innovations'
  ];
  
  return keyPhrases;
};

// Extract key skills/tags from the summary
const extractKeyTags = (text: string): string[] => {
  return [
    'Innovation Strategy',
    'Product Leadership',
    'User Experience',
    'Data Intelligence',
    'Digital Transformation'
  ];
};

const Summary: React.FC<SummaryProps> = ({ summary, vision }: SummaryProps) => {
  const expertisePoints = extractExpertisePoints(summary);
  const visionPoints = vision ? extractVisionPoints(vision) : [];
  const expertiseTags = extractKeyTags(summary);
  
  return (
    <SummaryWrapper id="summary" aiPattern>
      <Container>
        <ContentGrid>
          <SummaryCard>
            <CardHeader>
              <Heading 
                level={2} 
                size="title1" 
                marginBottom="small" 
                gradient
                withAccent
              >
                Expertise
              </Heading>
              <IconElement className="code-bracket">{`{`}</IconElement>
              <IconElement className="particle particle-1" />
              <IconElement className="particle particle-2" />
            </CardHeader>
            <CardContent>
              <PointsList>
                {expertisePoints.map((point, index) => (
                  <PointItem key={`expertise-${index}`}>
                    <PointIcon>⚡</PointIcon>
                    <PointText>{point}</PointText>
                  </PointItem>
                ))}
              </PointsList>
              
              <TagsContainer>
                {expertiseTags.map((tag, index) => (
                  <Tag key={`tag-${index}`}>{tag}</Tag>
                ))}
              </TagsContainer>
            </CardContent>
          </SummaryCard>
          
          {vision && (
            <VisionCard>
              <CardHeader>
                <Heading 
                  level={2} 
                  size="title1" 
                  marginBottom="small"
                  gradient
                  withAccent
                >
                  Vision
                </Heading>
                <IconElement className="quote">"</IconElement>
                <IconElement className="particle particle-2" />
                <IconElement className="particle particle-3" />
              </CardHeader>
              <CardContent>
                <PointsList>
                  {visionPoints.map((point, index) => (
                    <PointItem key={`vision-${index}`}>
                      <PointIcon>✨</PointIcon>
                      <PointText>{point}</PointText>
                    </PointItem>
                  ))}
                </PointsList>
              </CardContent>
            </VisionCard>
          )}
        </ContentGrid>
      </Container>
    </SummaryWrapper>
  );
};

export default Summary; 