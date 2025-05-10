import React from 'react';
import styled from 'styled-components';
import { PersonalInfo } from '../../types';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Button from '../ui/Button';
import { theme } from '../../styles/theme';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const HeroWrapper = styled(Section)`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
  
  /* Futuristic overlay effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 113, 227, 0.08),
      transparent 70%
    );
    z-index: 1;
  }
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${theme.spacing.xl} 0;
`;

const HeroTitle = styled.div`
  margin-bottom: ${theme.spacing.xl};
  animation: fadeIn 1s var(--animation-curve);
`;

const HeroTagline = styled.p`
  font-size: ${theme.typography.sizes.title2};
  font-weight: ${theme.typography.fontWeights.light};
  max-width: 760px;
  margin: 0 auto ${theme.spacing.xl};
  color: ${theme.colors.textSecondary};
  animation: slideUp 1s var(--animation-curve);
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.title3};
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  animation: slideUp 1s var(--animation-curve) forwards;
  animation-delay: 0.3s;
  opacity: 0;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FloatingShape = styled.div<{ size: string; top: string; left: string; delay: string }>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background: ${theme.colors.gradientSecondary};
  opacity: 0.2;
  filter: blur(30px);
  top: ${props => props.top};
  left: ${props => props.left};
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.delay};
  
  @keyframes float {
    0% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-20px) translateX(10px); }
    100% { transform: translateY(0) translateX(0); }
  }
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(75, 75, 75, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(75, 75, 75, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 0;
`;

const HeroImage = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: ${theme.spacing.xl};
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 113, 227, 0.3);
  animation: pulse 4s infinite ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  
  @keyframes pulse {
    0% { box-shadow: 0 0 30px rgba(0, 113, 227, 0.3); }
    50% { box-shadow: 0 0 30px rgba(94, 92, 230, 0.5); }
    100% { box-shadow: 0 0 30px rgba(0, 113, 227, 0.3); }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Initials = styled.div`
  font-size: 64px;
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.primary};
  background: ${theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.sizes.caption};
  opacity: 0.7;
  animation: bounce 2s infinite;
  
  svg {
    margin-top: ${theme.spacing.xs};
    width: 20px;
    height: 20px;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
    40% { transform: translateY(-10px) translateX(-50%); }
    60% { transform: translateY(-5px) translateX(-50%); }
  }
`;

const Hero: React.FC<HeroProps> = ({ personalInfo }: HeroProps) => {
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <HeroWrapper id="hero" fullHeight noMargin>
      <GridBackground />
      
      {/* Decorative elements */}
      <FloatingShape size="300px" top="20%" left="10%" delay="0s" />
      <FloatingShape size="200px" top="60%" left="80%" delay="1s" />
      <FloatingShape size="150px" top="80%" left="30%" delay="2s" />
      
      <HeroContent size="lg">
        <HeroImage>
          {personalInfo.profileImage ? (
            <img src={personalInfo.profileImage} alt={personalInfo.name} />
          ) : (
            <Initials>{getInitials(personalInfo.name)}</Initials>
          )}
        </HeroImage>
        
        <HeroTitle>
          <Heading level={1} size="display" gradient align="center" marginBottom="small">
            {personalInfo.name}
          </Heading>
          <Heading level={2} size="title1" color={theme.colors.textSecondary} align="center">
            {personalInfo.title}
          </Heading>
        </HeroTitle>
        
        <HeroTagline>
          {personalInfo.tagline}
        </HeroTagline>
        
        <HeroActions>
          <Button size="large" hasGlow>
            View Projects
          </Button>
          <Button size="large" variant="outline">
            Download Resume
          </Button>
        </HeroActions>
      </HeroContent>
      
      <ScrollIndicator>
        <span>Scroll to explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </ScrollIndicator>
    </HeroWrapper>
  );
};

export default Hero; 