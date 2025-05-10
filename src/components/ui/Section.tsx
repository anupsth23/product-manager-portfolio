import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

interface SectionProps {
  children: ReactNode;
  id?: string;
  dark?: boolean;
  light?: boolean;
  gradient?: boolean;
  glass?: boolean;
  aiPattern?: boolean;
  aiBlobs?: boolean;
  fullHeight?: boolean;
  noMargin?: boolean;
  noOverflow?: boolean;
  noDivider?: boolean;
}

const StyledSection = styled.section<SectionProps>`
  position: relative;
  padding: ${theme.spacing.huge} 0;
  
  /* Background variants */
  ${props => props.dark && css`
    background-color: ${theme.colors.backgroundAlt};
  `}
  
  ${props => props.light && css`
    background-color: #111111;
  `}
  
  ${props => props.gradient && css`
    background: ${theme.colors.gradientPrimary};
  `}
  
  /* Glass effect */
  ${props => props.glass && css`
    background: ${theme.colors.glass};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  `}
  
  /* AI grid pattern */
  ${props => props.aiPattern && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(${theme.colors.aiGrid} 1px, transparent 1px),
        linear-gradient(90deg, ${theme.colors.aiGrid} 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.2;
      z-index: 0;
      animation: gridAnimation 100s linear infinite;
    }
    
    @keyframes gridAnimation {
      0% { background-position: 0px 0px; }
      100% { background-position: 100px 100px; }
    }
  `}
  
  /* AI glow blobs */
  ${props => props.aiBlobs && css`
    &::after {
      content: '';
      position: absolute;
      top: 10%;
      right: 5%;
      width: 40vw;
      height: 40vw;
      background: ${theme.colors.aiGlow};
      filter: blur(100px);
      border-radius: 50%;
      opacity: 0.3;
      z-index: -1;
      animation: blobAnimation 20s infinite alternate ease-in-out;
    }
    
    @keyframes blobAnimation {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-5%, 5%) scale(1.1); }
      100% { transform: translate(5%, -5%) scale(0.9); }
    }
  `}
  
  /* Full height option */
  ${props => props.fullHeight && css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
  
  /* Margin control */
  ${props => props.noMargin && css`
    padding: 0;
  `}
  
  /* Overflow control */
  ${props => !props.noOverflow && css`
    overflow: hidden;
  `}
  
  /* Add subtle divider line at the bottom */
  ${props => !props.noDivider && css`
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 20%;
      right: 20%;
      height: 1px;
      background: linear-gradient(
        to right,
        transparent,
        ${theme.colors.glassBorder},
        transparent
      );
    }
  `}
`;

export const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  dark = false,
  light = false,
  gradient = false,
  glass = false,
  aiPattern = false,
  aiBlobs = false,
  fullHeight = false,
  noMargin = false,
  noOverflow = false,
  noDivider = false,
  ...props 
}) => {
  return (
    <StyledSection 
      id={id} 
      dark={dark}
      light={light}
      gradient={gradient}
      glass={glass}
      aiPattern={aiPattern}
      aiBlobs={aiBlobs}
      fullHeight={fullHeight}
      noMargin={noMargin}
      noOverflow={noOverflow}
      noDivider={noDivider}
      {...props}
    >
      {children}
    </StyledSection>
  );
};

export default Section; 