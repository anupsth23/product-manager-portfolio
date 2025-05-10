import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  centered?: boolean;
}

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  
  ${props => props.padding && css`
    padding: 0 ${theme.spacing.lg};
    
    ${theme.media.lg} {
      padding: 0 ${theme.spacing.xl};
    }
  `}
  
  ${props => props.centered && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
  
  /* Size variants */
  ${props => props.size === 'sm' && css`
    max-width: ${theme.containers.sm};
  `}
  
  ${props => (!props.size || props.size === 'md') && css`
    max-width: ${theme.containers.md};
  `}
  
  ${props => props.size === 'lg' && css`
    max-width: ${theme.containers.lg};
  `}
  
  ${props => props.size === 'xl' && css`
    max-width: ${theme.containers.xl};
  `}
  
  ${props => props.size === 'full' && css`
    max-width: none;
  `}
`;

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  size = 'md', 
  padding = true, 
  centered = false,
  ...props 
}) => {
  return (
    <StyledContainer 
      size={size} 
      padding={padding} 
      centered={centered} 
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default Container; 