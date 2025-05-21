import React from 'react';
import styled from 'styled-components';
import { Certification } from '../../types';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import { theme } from '../../styles/theme';

interface CertificationsProps {
  certifications: Certification[];
}

const CertificationsWrapper = styled(Section)`
  background: linear-gradient(180deg, #050505 0%, ${theme.colors.backgroundAlt} 100%);
  position: relative;
  overflow: hidden;
  padding: ${theme.spacing.xxl} 0;
  
  /* Abstract grid pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(0, 113, 227, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 113, 227, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.2;
    z-index: 0;
  }
`;

const CertificationsContainer = styled(Container)`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  padding-left: 24px;
  padding-right: 24px;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
  background: ${theme.colors.glass};
  border-radius: ${theme.borderRadius.xl};
  padding: 2.5rem 2rem;
  backdrop-filter: blur(14px);
  border: 1.5px solid ${theme.colors.glassBorder};
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 12px 32px rgba(0,0,0,0.18);
    border-color: ${theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
    opacity: 0.5;
    transform: translateY(3px);
    transition: all ${theme.transitions.normal};
  }
`;

const CertificationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`;

const CertificationLogo = styled.div<{image?: string}>`
  width: 50px;
  height: 50px;
  border-radius: ${theme.borderRadius.md};
  background: ${theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing.md};
  overflow: hidden;
  
  ${props => props.image ? `
    background-image: url(${props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  ` : ''}
`;

// Fallback component for when logo image is not available
const LogoFallback = styled.div<{issuer: string}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => {
    // Generate a consistent color based on issuer name
    const hash = props.issuer.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = hash % 360;
    return `hsla(${hue}, 70%, 30%, 0.8)`;
  }};
  font-weight: bold;
  color: white;
  font-size: 14px;
  
  &::after {
    content: '${props => props.issuer.substring(0, 1)}';
  }
`;

const CertificationInfo = styled.div`
  flex: 1;
`;

const CertificationTitle = styled.h3`
  margin: 0;
  font-size: ${theme.typography.sizes.title3};
  color: ${theme.colors.text};
`;

const CertificationIssuer = styled.div`
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.textSecondary};
  display: flex;
  align-items: center;
  
  &::before {
    content: 'by';
    margin-right: ${theme.spacing.xs};
    opacity: 0.6;
  }
`;

const CertificationDates = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.primary};
  margin: ${theme.spacing.sm} 0;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: rgba(0, 113, 227, 0.1);
  border-radius: ${theme.borderRadius.sm};
  display: inline-block;
`;

const CertificationDescription = styled.p`
  margin: ${theme.spacing.md} 0;
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
`;

const CertificationSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.md};
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.textSecondary};
  
  &::before {
    content: '#';
    color: ${theme.colors.secondary};
    margin-right: 2px;
  }
`;

const CredentialLink = styled.a`
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: ${theme.spacing.md};
  
  &:hover {
    text-decoration: underline;
  }
  
  &::before {
    content: '→';
    margin-right: ${theme.spacing.xs};
  }
`;

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;
  
  return (
    <CertificationsWrapper id="certifications">
      <CertificationsContainer>
        <Heading level={2} size="headline" align="center" marginBottom="large">
          Professional Certifications
        </Heading>
        
        <CertificationsGrid>
          {certifications.map((certification, index) => (
            <CertificationCard key={index}>
              <CertificationHeader>
                <CertificationLogo image={certification.image}>
                  {!certification.image && <LogoFallback issuer={certification.issuer} />}
                </CertificationLogo>
                <CertificationInfo>
                  <CertificationTitle>{certification.name}</CertificationTitle>
                  <CertificationIssuer>{certification.issuer}</CertificationIssuer>
                </CertificationInfo>
              </CertificationHeader>
              
              <CertificationDates>
                {certification.date} {certification.validUntil ? `- ${certification.validUntil}` : ''}
              </CertificationDates>
              
              {certification.description && (
                <CertificationDescription>
                  {certification.description}
                </CertificationDescription>
              )}
              
              {certification.skills && certification.skills.length > 0 && (
                <CertificationSkills>
                  {certification.skills.map((skill, idx) => (
                    <SkillTag key={idx}>{skill}</SkillTag>
                  ))}
                </CertificationSkills>
              )}
              
              {certification.credentialUrl && (
                <CredentialLink 
                  href={certification.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Verify Credential {certification.credentialId ? `#${certification.credentialId}` : ''}
                </CredentialLink>
              )}
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </CertificationsContainer>
    </CertificationsWrapper>
  );
};

export default Certifications; 