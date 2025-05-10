import React from 'react';
import styled from 'styled-components';
import { PersonalInfo } from '../types';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const HeroSection = styled.header`
  background-color: #2c3e50;
  color: #ffffff;
  padding: 60px 0;
  text-align: center;
`;

const HeroContainer = styled.div`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0;
`;

const HeroName = styled.h1`
  font-size: 2.8em;
  margin-bottom: 10px;
  font-weight: 700;
`;

const HeroTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 5px;
`;

const HeroTagline = styled.p`
  font-size: 1.1em;
  font-style: italic;
  color: #bdc3c7;
`;

const Hero: React.FC<HeroProps> = ({ personalInfo }: HeroProps) => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroName>{personalInfo.name}</HeroName>
        <HeroTitle>{personalInfo.title}</HeroTitle>
        <HeroTagline className="tagline">{personalInfo.tagline}</HeroTagline>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 