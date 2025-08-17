import React from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../ui/Section';
import Container from '../ui/Container';
import { theme } from '../../styles/theme';

interface SocialMediaProps {
  linkedin?: string;
  twitter?: string;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SocialMediaWrapper = styled(Section)`
  padding: ${theme.spacing.xl} 0;
  background: linear-gradient(135deg, ${theme.colors.aiSurface} 0%, ${theme.colors.background} 100%);
  border-top: 1px solid ${theme.colors.glassBorder};
`;

const SocialContainer = styled(Container)`
  text-align: center;
`;

const SocialTitle = styled.h3`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
  font-weight: 500;
  opacity: 0.8;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.colors.aiSurface};
  border: 1px solid ${theme.colors.glassBorder};
  border-radius: ${theme.borderRadius.lg};
  text-decoration: none;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: ${theme.shadows.small};
  animation: ${fadeInUp} 0.6s ease forwards;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.aiGlow};
    border-color: ${theme.colors.aiAccent};
    color: ${theme.colors.aiAccent};
  }
  
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
`;

const SocialIcon = styled.span`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const SocialText = styled.span`
  font-size: 0.95rem;
`;

const SocialMedia: React.FC<SocialMediaProps> = ({ linkedin, twitter }) => {
  if (!linkedin && !twitter) {
    return null;
  }

  return (
    <SocialMediaWrapper id="social-media">
      <SocialContainer>
        <SocialTitle>Let's Connect</SocialTitle>
        <SocialLinksContainer>
          {linkedin && (
            <SocialLink href={linkedin} target="_blank" rel="noopener noreferrer">
              <SocialIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
              <SocialText>LinkedIn</SocialText>
            </SocialLink>
          )}
          {twitter && (
            <SocialLink href={twitter} target="_blank" rel="noopener noreferrer">
              <SocialIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </SocialIcon>
              <SocialText>Twitter</SocialText>
            </SocialLink>
          )}
        </SocialLinksContainer>
      </SocialContainer>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
