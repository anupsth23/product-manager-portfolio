import React from 'react';
import styled from 'styled-components';
import { WorkExperience } from '../types';

interface ExperienceProps {
  experience: WorkExperience[];
}

const ExperienceSection = styled.section`
  padding: 40px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const ExperienceContainer = styled.div`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0;
`;

const ExperienceHeading = styled.h2`
  font-size: 2em;
  color: #3498db;
  margin-bottom: 25px;
  text-align: center;
`;

const JobCard = styled.div`
  margin-bottom: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

const JobTitle = styled.h3`
  font-size: 1.5em;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const CompanyLocation = styled.p`
  font-size: 1em;
  color: #7f8c8d;
  margin-bottom: 15px;
`;

const JobResponsibilities = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 0;
`;

const Responsibility = styled.li`
  margin-bottom: 10px;
  color: #555;
`;

const Experience: React.FC<ExperienceProps> = ({ experience }: ExperienceProps) => {
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <ExperienceHeading>Work Experience</ExperienceHeading>
        
        {experience.map((job: WorkExperience, index: number) => (
          <JobCard key={index}>
            <JobTitle>{job.title}</JobTitle>
            <CompanyLocation>
              {job.company}, {job.location} | {job.period}
            </CompanyLocation>
            <JobResponsibilities>
              {job.responsibilities.map((responsibility: string, idx: number) => (
                <Responsibility key={idx}>{responsibility}</Responsibility>
              ))}
            </JobResponsibilities>
          </JobCard>
        ))}
        
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience; 