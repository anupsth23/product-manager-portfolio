import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  isGlassmorphic?: boolean;
  hasGlow?: boolean;
  fullWidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.typography.fontFamily};
  font-weight: ${theme.typography.fontWeights.medium};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.normal};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  /* Size variants */
  ${props => props.size === 'small' && css`
    font-size: ${theme.typography.sizes.caption};
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    min-height: 36px;
  `}
  
  ${props => (!props.size || props.size === 'medium') && css`
    font-size: ${theme.typography.sizes.body};
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    min-height: 44px;
  `}
  
  ${props => props.size === 'large' && css`
    font-size: ${theme.typography.sizes.title3};
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    min-height: 56px;
  `}
  
  /* Variant styles */
  ${props => (!props.variant || props.variant === 'primary') && css`
    background: ${props.isGlassmorphic 
      ? theme.colors.glass
      : theme.colors.primary};
    color: ${theme.colors.text};
    border: 1px solid ${props.isGlassmorphic 
      ? theme.colors.glassBorder 
      : 'transparent'};
    
    &:hover {
      background: ${props.isGlassmorphic 
        ? 'rgba(50, 50, 50, 0.7)' 
        : theme.colors.secondary};
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  ${props => props.variant === 'secondary' && css`
    background: ${props.isGlassmorphic 
      ? 'rgba(94, 92, 230, 0.2)'
      : theme.colors.secondary};
    color: ${theme.colors.text};
    border: 1px solid ${props.isGlassmorphic
      ? 'rgba(94, 92, 230, 0.3)'
      : 'transparent'};
    
    &:hover {
      background: ${props.isGlassmorphic
        ? 'rgba(94, 92, 230, 0.3)'
        : theme.colors.tertiary};
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  ${props => props.variant === 'outline' && css`
    background: transparent;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    
    &:hover {
      background: rgba(0, 113, 227, 0.1);
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  ${props => props.variant === 'text' && css`
    background: transparent;
    color: ${theme.colors.primary};
    border: none;
    
    &:hover {
      color: ${theme.colors.secondary};
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  /* Glassmorphism effect */
  ${props => props.isGlassmorphic && css`
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  `}
  
  /* Glow effect */
  ${props => props.hasGlow && css`
    box-shadow: 0 0 15px ${!props.variant || props.variant === 'primary' 
      ? theme.colors.primary 
      : theme.colors.secondary};
      
    &:hover {
      box-shadow: 0 0 20px ${!props.variant || props.variant === 'primary' 
        ? theme.colors.primary 
        : theme.colors.secondary};
    }
  `}
  
  /* Full width */
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  /* Add hover animation effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    transform: translateY(-100%);
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  &:hover::after {
    transform: translateY(100%);
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button; 