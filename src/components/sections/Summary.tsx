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

const SummaryCard = styled.div`
  position: relative;
  padding: ${theme.spacing.xl};
  background: ${theme.colors.aiSurface};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.glassBorder};
  backdrop-filter: blur(20px);
  box-shadow: ${theme.shadows.aiGlow};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 800px;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), ${theme.shadows.aiGlow};
  }
  
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

const CardHeader = styled.div`
  margin-bottom: ${theme.spacing.md};
  position: relative;
`;

const IconElement = styled.span`
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  color: ${theme.colors.aiAccent};
  
  &.quote {
    top: -10px;
    right: 20px;
    font-size: 3rem;
  }
  
  &.particle {
    animation: ${float} 3s ease-in-out infinite;
    
    &.particle-1 {
      top: 20px;
      right: 40px;
      animation-delay: 0s;
    }
    
    &.particle-2 {
      top: 40px;
      right: 20px;
      animation-delay: 1s;
    }
    
    &.particle-3 {
      top: 60px;
      right: 60px;
      animation-delay: 2s;
    }
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
`;

const SummaryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};
  margin: 0;
  text-align: center;
  font-weight: 400;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

const Summary: React.FC<SummaryProps> = ({ summary }: SummaryProps) => {
  return (
    <SummaryWrapper id="summary" aiPattern>
      <Container>
        <SummaryCard>
          <CardHeader>
            <Heading 
              level={2} 
              size="title1" 
              marginBottom="small" 
              gradient
              withAccent
            >
              About Me
            </Heading>
            <IconElement className="quote">"</IconElement>
            <IconElement className="particle particle-1" />
            <IconElement className="particle particle-2" />
          </CardHeader>
          <CardContent>
            <SummaryText>{summary}</SummaryText>
          </CardContent>
        </SummaryCard>
      </Container>
    </SummaryWrapper>
  );
};

export default Summary; 