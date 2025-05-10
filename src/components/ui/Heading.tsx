import React, { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  size?: 'display' | 'headline' | 'title1' | 'title2' | 'title3';
  color?: string;
  gradient?: boolean;
  animated?: boolean;
  glowing?: boolean;
  withAccent?: boolean;
  align?: 'left' | 'center' | 'right';
  marginBottom?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
}

// Animation for text reveal
const revealText = keyframes`
  0% { clip-path: inset(0 100% 0 0); }
  100% { clip-path: inset(0 0 0 0); }
`;

// Animation for glow effect
const glow = keyframes`
  0% { text-shadow: 0 0 10px rgba(74, 157, 255, 0.3); }
  50% { text-shadow: 0 0 20px rgba(74, 157, 255, 0.5), 0 0 30px rgba(74, 157, 255, 0.3); }
  100% { text-shadow: 0 0 10px rgba(74, 157, 255, 0.3); }
`;

const StyledHeading = styled.h1<HeadingProps>`
  font-family: ${theme.typography.fontFamily};
  line-height: ${theme.typography.lineHeights.tight};
  margin: 0;
  position: relative;
  
  /* Font size based on size prop or fallback to level */
  ${props => props.size === 'display' && css`
    font-size: ${theme.typography.sizes.display};
    font-weight: ${theme.typography.fontWeights.bold};
    letter-spacing: -0.02em;
  `}
  
  ${props => props.size === 'headline' && css`
    font-size: ${theme.typography.sizes.headline};
    font-weight: ${theme.typography.fontWeights.bold};
    letter-spacing: -0.015em;
  `}
  
  ${props => props.size === 'title1' && css`
    font-size: ${theme.typography.sizes.title1};
    font-weight: ${theme.typography.fontWeights.semibold};
    letter-spacing: -0.01em;
  `}
  
  ${props => props.size === 'title2' && css`
    font-size: ${theme.typography.sizes.title2};
    font-weight: ${theme.typography.fontWeights.semibold};
  `}
  
  ${props => props.size === 'title3' && css`
    font-size: ${theme.typography.sizes.title3};
    font-weight: ${theme.typography.fontWeights.medium};
  `}
  
  /* Color styles */
  color: ${props => props.color || theme.colors.text};
  
  /* Gradient text effect */
  ${props => props.gradient && css`
    background: ${theme.colors.gradientPrimary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    position: relative;
    z-index: 1;
    
    /* Add subtle glow behind gradient text */
    &::after {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      color: transparent;
      filter: blur(8px);
      opacity: 0.5;
    }
  `}
  
  /* Animated text reveal */
  ${props => props.animated && css`
    animation: ${revealText} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    clip-path: inset(0 100% 0 0);
  `}
  
  /* Glowing text effect */
  ${props => props.glowing && css`
    animation: ${glow} 3s infinite;
  `}
  
  /* Accent line */
  ${props => props.withAccent && css`
    padding-bottom: ${theme.spacing.sm};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background: ${theme.colors.gradientPrimary};
      border-radius: ${theme.borderRadius.sm};
    }
    
    ${props.align === 'center' && css`
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    `}
    
    ${props.align === 'right' && css`
      &::after {
        left: auto;
        right: 0;
      }
    `}
  `}
  
  /* Text alignment */
  text-align: ${props => props.align || 'left'};
  
  /* Bottom margin */
  ${props => props.marginBottom === 'small' && css`
    margin-bottom: ${theme.spacing.sm};
  `}
  
  ${props => props.marginBottom === 'medium' && css`
    margin-bottom: ${theme.spacing.md};
  `}
  
  ${props => props.marginBottom === 'large' && css`
    margin-bottom: ${theme.spacing.xl};
  `}
  
  /* Responsive sizing */
  @media (max-width: ${theme.breakpoints.md}) {
    ${props => props.size === 'display' && css`
      font-size: ${theme.typography.sizes.headline};
    `}
    
    ${props => props.size === 'headline' && css`
      font-size: ${theme.typography.sizes.title1};
    `}
    
    ${props => props.size === 'title1' && css`
      font-size: ${theme.typography.sizes.title2};
    `}
  }
  
  /* Highlight styling */
  .highlight {
    position: relative;
    z-index: 1;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background-color: ${theme.colors.aiGlow};
      z-index: -1;
      transform: skewX(-5deg);
    }
  }
`;

export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  level = 1, 
  size,
  color,
  gradient = false,
  animated = false,
  glowing = false,
  withAccent = false,
  align = 'left',
  marginBottom = 'medium',
  className,
  ...props 
}) => {
  // Map level to a size if no size specified
  const headingSize = size || (
    level === 1 ? 'display' : 
    level === 2 ? 'headline' : 
    level === 3 ? 'title1' : 
    level === 4 ? 'title2' : 'title3'
  );
  
  return (
    <StyledHeading 
      as={`h${level}` as any}
      size={headingSize}
      color={color}
      gradient={gradient}
      animated={animated}
      glowing={glowing}
      withAccent={withAccent}
      align={align}
      marginBottom={marginBottom}
      className={className}
      data-text={typeof children === 'string' ? children : ''}
      {...props}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading; 