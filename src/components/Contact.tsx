import React from 'react';
import styled from 'styled-components';
import { PersonalInfo } from '../types';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const ContactSection = styled.footer`
  background-color: #34495e;
  color: #ffffff;
  text-align: center;
  padding: 40px 0;
`;

const ContactContainer = styled.div`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0;
`;

const ContactHeading = styled.h2`
  color: #ffffff;
  margin-bottom: 20px;
`;

const ContactInfo = styled.p`
  font-size: 1.1em;
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Contact: React.FC<ContactProps> = ({ personalInfo }: ContactProps) => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactHeading>Contact</ContactHeading>
        <ContactInfo>
          Email: <ContactLink href={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
          </ContactLink>
        </ContactInfo>
        <ContactInfo>Location: {personalInfo.location}</ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 