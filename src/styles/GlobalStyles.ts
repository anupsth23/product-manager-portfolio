import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  /* Import SF Pro font - Apple's system font */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    --animation-curve: cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: ${theme.typography.lineHeights.normal};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${theme.typography.fontWeights.bold};
    line-height: ${theme.typography.lineHeights.tight};
  }
  
  h1 {
    font-size: ${theme.typography.sizes.display};
    letter-spacing: -0.015em;
  }
  
  h2 {
    font-size: ${theme.typography.sizes.headline};
    letter-spacing: -0.01em;
  }
  
  h3 {
    font-size: ${theme.typography.sizes.title1};
  }
  
  h4 {
    font-size: ${theme.typography.sizes.title2};
  }
  
  h5 {
    font-size: ${theme.typography.sizes.title3};
  }
  
  p {
    font-size: ${theme.typography.sizes.body};
    line-height: ${theme.typography.lineHeights.relaxed};
    margin-bottom: ${theme.spacing.md};
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: all ${theme.transitions.fast};
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  
  ul, ol {
    list-style-position: inside;
    margin-bottom: ${theme.spacing.md};
  }
  
  li {
    margin-bottom: ${theme.spacing.sm};
    font-size: ${theme.typography.sizes.body};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, input, textarea, select {
    font-family: ${theme.typography.fontFamily};
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${theme.colors.backgroundAlt};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.sm};
  }
  
  /* Selection styling */
  ::selection {
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
  }
  
  /* Smooth animations */
  .fade-in {
    animation: fadeIn 1s var(--animation-curve);
  }
  
  .slide-up {
    animation: slideUp 0.8s var(--animation-curve);
  }
  
  .slide-left {
    animation: slideLeft 0.8s var(--animation-curve);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideLeft {
    from { transform: translateX(30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  /* Glass morphism utility classes */
  .glass {
    background: ${theme.colors.glass};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid ${theme.colors.glassBorder};
    border-radius: ${theme.borderRadius.md};
  }
  
  .section {
    padding: ${theme.spacing.xxxl} 0;
    position: relative;
    overflow: hidden;
  }
  
  .container {
    width: 100%;
    max-width: ${theme.containers.xl};
    margin: 0 auto;
    padding: 0 ${theme.spacing.lg};
    
    ${theme.media.lg} {
      padding: 0 ${theme.spacing.xl};
    }
  }
`; 