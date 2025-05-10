import React from 'react';
import styled from 'styled-components';

interface SummaryProps {
  summary: string;
}

const SummarySection = styled.section`
  padding: 40px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const SummaryContainer = styled.div`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0;
`;

const SummaryHeading = styled.h2`
  font-size: 2em;
  color: #3498db;
  margin-bottom: 25px;
  text-align: center;
`;

const SummaryText = styled.p`
  line-height: 1.6;
`;

const Summary: React.FC<SummaryProps> = ({ summary }: SummaryProps) => {
  return (
    <SummarySection id="summary">
      <SummaryContainer>
        <SummaryHeading>Summary</SummaryHeading>
        <SummaryText>{summary}</SummaryText>
      </SummaryContainer>
    </SummarySection>
  );
};

export default Summary; 