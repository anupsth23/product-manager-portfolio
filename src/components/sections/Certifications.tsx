import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Certification } from '../../types';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import { theme } from '../../styles/theme';

interface CertificationsProps {
  certifications: Certification[];
}

// Animations
const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const CertificationsWrapper = styled(Section)`
  background: linear-gradient(135deg, rgba(20, 25, 35, 0.95) 0%, rgba(30, 35, 45, 0.95) 100%);
  padding: ${theme.spacing.xxl} 0;
  position: relative;
  overflow: hidden;
  
  /* Subtle grid pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(74, 157, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(74, 157, 255, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.3;
    z-index: 0;
  }
`;

const CertificationsContainer = styled(Container)`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  border: 1px solid rgba(74, 157, 255, 0.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${slideInUp} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    border-color: rgba(74, 157, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.aiAccent});
    opacity: 0.8;
  }
`;

const CertificationHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const IssuerBadge = styled.div<{ issuer: string }>`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
  background: ${props => {
    // Generate consistent colors based on issuer
    const hash = props.issuer.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = hash % 360;
    return `linear-gradient(135deg, hsla(${hue}, 70%, 50%, 0.9), hsla(${hue}, 70%, 30%, 0.9))`;
  }};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  }
`;

const CertificationInfo = styled.div`
  flex: 1;
`;

const CertificationTitle = styled.h3`
  font-size: 1.3rem;
  color: ${theme.colors.text};
  margin: 0 0 ${theme.spacing.sm} 0;
  font-weight: 600;
  line-height: 1.3;
`;

const CertificationIssuer = styled.div`
  font-size: 1rem;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
  display: flex;
  align-items: center;
  
  &::before {
    content: 'by';
    margin-right: ${theme.spacing.xs};
    opacity: 0.6;
    font-weight: normal;
  }
`;

const CertificationMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin: ${theme.spacing.md} 0;
  flex-wrap: wrap;
`;

const DateBadge = styled.div`
  background: rgba(74, 157, 255, 0.1);
  border: 1px solid rgba(74, 157, 255, 0.2);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  font-size: 0.9rem;
  color: ${theme.colors.primary};
  font-weight: 500;
  font-family: 'Fira Code', monospace;
`;

const StatusBadge = styled.div<{ isValid: boolean }>`
  background: ${props => props.isValid ? 'rgba(88, 237, 210, 0.1)' : 'rgba(255, 177, 85, 0.1)'};
  border: 1px solid ${props => props.isValid ? 'rgba(88, 237, 210, 0.3)' : 'rgba(255, 177, 85, 0.3)'};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  font-size: 0.85rem;
  color: ${props => props.isValid ? '#58EDD2' : '#FFB155'};
  font-weight: 500;
  
  &::before {
    content: '${props => props.isValid ? '✓' : '⏰'}';
    margin-right: ${theme.spacing.xs};
  }
`;

const CertificationDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
  margin: ${theme.spacing.md} 0;
`;

const CertificationSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin: ${theme.spacing.lg} 0;
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(74, 157, 255, 0.1);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.85rem;
  color: ${theme.colors.textSecondary};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 157, 255, 0.1);
    border-color: rgba(74, 157, 255, 0.3);
    color: ${theme.colors.text};
    transform: translateY(-1px);
  }
  
  &::before {
    content: '#';
    color: ${theme.colors.primary};
    margin-right: 4px;
  }
`;

const CredentialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: linear-gradient(135deg, rgba(74, 157, 255, 0.1), rgba(74, 157, 255, 0.2));
  border: 1px solid rgba(74, 157, 255, 0.3);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.primary};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: ${theme.spacing.md};
  
  &:hover {
    background: linear-gradient(135deg, rgba(74, 157, 255, 0.2), rgba(74, 157, 255, 0.3));
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(74, 157, 255, 0.2);
  }
  
  &::after {
    content: '→';
    font-weight: bold;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(3px);
  }
`;

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;
  
  const isCertificationValid = (certification: Certification) => {
    if (!certification.validUntil) return true;
    const validUntil = new Date(certification.validUntil);
    return validUntil > new Date();
  };
  
  return (
    <CertificationsWrapper id="certifications">
      <CertificationsContainer>
        <Heading level={2} size="title1" gradient withAccent align="center">
          Professional Certifications
        </Heading>
        
        <CertificationsGrid>
          {certifications.map((certification, index) => (
            <CertificationCard key={index}>
              <CertificationHeader>
                <IssuerBadge issuer={certification.issuer}>
                  {certification.issuer.charAt(0)}
                </IssuerBadge>
                <CertificationInfo>
                  <CertificationTitle>{certification.name}</CertificationTitle>
                  <CertificationIssuer>{certification.issuer}</CertificationIssuer>
                </CertificationInfo>
              </CertificationHeader>
              
              <CertificationMeta>
                <DateBadge>
                  {certification.date}
                </DateBadge>
                {certification.validUntil && (
                  <StatusBadge isValid={isCertificationValid(certification)}>
                    {isCertificationValid(certification) ? 'Valid' : 'Expired'}
                  </StatusBadge>
                )}
              </CertificationMeta>
              
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
                  Verify Credential
                  {certification.credentialId && ` #${certification.credentialId}`}
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