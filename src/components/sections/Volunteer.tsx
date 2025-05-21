import React from 'react';
import styled from 'styled-components';
import { VolunteerExperience as VolunteerExperienceType } from '../../types';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import { theme } from '../../styles/theme';

interface VolunteerProps {
  volunteerExperience: VolunteerExperienceType[];
}

const VolunteerWrapper = styled(Section)`
  background: linear-gradient(180deg, ${theme.colors.background} 0%, ${theme.colors.backgroundAlt} 100%);
  padding: ${theme.spacing.xxl} 0;
`;

const VolunteerContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
`;

const VolunteerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const VolunteerCard = styled.div`
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

const Role = styled.h3`
  font-size: ${theme.typography.sizes.title3};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const Organization = styled.h4`
  font-size: ${theme.typography.sizes.title3};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const Location = styled.p`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xs};
`;

const Period = styled.span`
  display: inline-block;
  background: rgba(74, 157, 255, 0.1);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const Description = styled.p`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
`;

const Volunteer: React.FC<VolunteerProps> = ({ volunteerExperience }) => {
  return (
    <VolunteerWrapper id="volunteer">
      <VolunteerContainer>
        <Heading level={2} size="title1" gradient withAccent>
          Volunteer Experience
        </Heading>
        <VolunteerGrid>
          {volunteerExperience.map((exp, index) => (
            <VolunteerCard key={index}>
              <Role>{exp.role}</Role>
              <Organization>{exp.organization}</Organization>
              <Location>{exp.location}</Location>
              <Period>{exp.period}</Period>
              <Description>{exp.description}</Description>
            </VolunteerCard>
          ))}
        </VolunteerGrid>
      </VolunteerContainer>
    </VolunteerWrapper>
  );
};

export default Volunteer; 