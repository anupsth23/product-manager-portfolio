import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

interface TimelineItemProps {
  period: string;
  title: string;
  company: string;
  location: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

interface TimelineProps {
  items: Array<{
    period: string;
    title: string;
    company: string;
    location: string;
  }>;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const pulse = keyframes`
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.5; transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(74, 157, 255, 0.4); }
  50% { box-shadow: 0 0 15px rgba(74, 157, 255, 0.6); }
  100% { box-shadow: 0 0 5px rgba(74, 157, 255, 0.4); }
`;

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  
  /* Timeline vertical line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 13px;
    width: 3px;
    background: linear-gradient(to bottom, 
      rgba(74, 157, 255, 0.1), 
      rgba(74, 157, 255, 0.5),
      rgba(74, 157, 255, 0.1)
    );
    border-radius: 3px;
    z-index: 0;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding-left: 26px;
    
    &::before {
      left: 10px;
    }
  }
`;

const TimelineItemContainer = styled.div<{isActive: boolean; index: number}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: ${props => props.isActive ? 
    'linear-gradient(120deg, rgba(74, 157, 255, 0.08), rgba(74, 157, 255, 0.02))' : 
    'transparent'};
  transform: translateX(${props => props.isActive ? '6px' : '0'});
  backdrop-filter: ${props => props.isActive ? 'blur(10px)' : 'none'};
  border: 1px solid ${props => props.isActive ? 
    'rgba(74, 157, 255, 0.3)' : 
    'transparent'};
  box-shadow: ${props => props.isActive ? 
    '0 5px 15px rgba(0, 0, 0, 0.1), 0 0 10px rgba(74, 157, 255, 0.15)' : 
    'none'};
  opacity: ${props => props.isActive ? 1 : 0.75};
  
  &:hover {
    opacity: 1;
    transform: translateX(3px);
    background: linear-gradient(120deg, rgba(74, 157, 255, 0.05), rgba(74, 157, 255, 0.01));
    border-color: rgba(74, 157, 255, 0.2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  }
  
  /* Timeline node */
  &::before {
    content: '';
    position: absolute;
    left: -32px;
    top: 24px;
    width: ${props => props.isActive ? '24px' : '18px'};
    height: ${props => props.isActive ? '24px' : '18px'};
    border-radius: 50%;
    background: ${props => props.isActive ? 
      'linear-gradient(135deg, #4A9DFF, #0065D0)' : 
      theme.colors.background};
    border: 2px solid ${props => props.isActive ? 
      theme.colors.primary : 
      'rgba(74, 157, 255, 0.3)'};
    z-index: 1;
    transition: all 0.3s ease;
    box-shadow: ${props => props.isActive ? 
      '0 0 15px rgba(74, 157, 255, 0.6)' : 
      'none'};
    animation: ${props => props.isActive ? glow : 'none'} 2s infinite;
    
    @media (max-width: ${theme.breakpoints.md}) {
      left: -26px;
      width: ${props => props.isActive ? '20px' : '14px'};
      height: ${props => props.isActive ? '20px' : '14px'};
    }
  }
  
  /* Timeline pulse effect - only for active state */
  &::after {
    content: '';
    position: absolute;
    left: -32px;
    top: 24px;
    width: ${props => props.isActive ? '24px' : '18px'};
    height: ${props => props.isActive ? '24px' : '18px'};
    border-radius: 50%;
    background: transparent;
    border: 2px solid ${props => props.isActive ? theme.colors.primary : 'transparent'};
    opacity: ${props => props.isActive ? 0.6 : 0};
    transform: scale(1.5);
    z-index: 0;
    animation: ${props => props.isActive ? pulse : 'none'} 2s infinite;
    
    @media (max-width: ${theme.breakpoints.md}) {
      left: -26px;
      width: ${props => props.isActive ? '20px' : '14px'};
      height: ${props => props.isActive ? '20px' : '14px'};
    }
  }
`;

const PeriodTag = styled.span<{isActive: boolean}>`
  font-family: 'Fira Code', monospace;
  font-size: ${theme.typography.sizes.caption};
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.textSecondary};
  background: ${props => props.isActive 
    ? 'rgba(74, 157, 255, 0.15)' 
    : 'rgba(255, 255, 255, 0.05)'};
  padding: 6px 12px;
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.sm};
  font-weight: ${props => props.isActive ? 600 : 400};
  letter-spacing: 0.5px;
  box-shadow: ${props => props.isActive 
    ? 'inset 0 0 10px rgba(74, 157, 255, 0.1)' 
    : 'none'};
  transition: all 0.3s ease;
`;

const JobTitle = styled.h3<{isActive: boolean}>`
  margin: 0;
  font-size: ${props => props.isActive 
    ? theme.typography.sizes.title3 
    : theme.typography.sizes.body};
  font-weight: ${props => props.isActive 
    ? theme.typography.fontWeights.bold 
    : theme.typography.fontWeights.semibold};
  color: ${props => props.isActive ? theme.colors.text : theme.colors.textSecondary};
  transition: all 0.3s ease;
`;

const CompanyName = styled.span<{isActive: boolean}>`
  font-size: ${theme.typography.sizes.body};
  color: ${props => props.isActive 
    ? 'linear-gradient(90deg, #4A9DFF, #6C8EFF)' 
    : theme.colors.textSecondary};
  background: ${props => props.isActive 
    ? 'linear-gradient(90deg, #4A9DFF, #6C8EFF)' 
    : 'transparent'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${props => props.isActive ? 'transparent' : 'inherit'};
  background-clip: ${props => props.isActive ? 'text' : 'border-box'};
  margin-top: ${theme.spacing.xs};
  font-weight: ${props => props.isActive ? 600 : 400};
  display: block;
  transition: all 0.3s ease;
`;

const Location = styled.span<{isActive: boolean}>`
  font-size: ${theme.typography.sizes.caption};
  color: ${props => props.isActive 
    ? theme.colors.textSecondary 
    : 'rgba(255, 255, 255, 0.5)'};
  margin-top: ${theme.spacing.xs};
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${props => props.isActive 
      ? theme.colors.secondary 
      : 'rgba(255, 255, 255, 0.3)'};
    margin-right: ${theme.spacing.xs};
    transition: all 0.3s ease;
  }
`;

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  period, 
  title, 
  company, 
  location, 
  index, 
  isActive, 
  onClick 
}) => {
  return (
    <TimelineItemContainer 
      isActive={isActive} 
      index={index} 
      onClick={onClick}
      role="button"
      aria-pressed={isActive}
    >
      <PeriodTag isActive={isActive}>{period}</PeriodTag>
      <JobTitle isActive={isActive}>
        {title}
      </JobTitle>
      <CompanyName isActive={isActive}>@{company}</CompanyName>
      <Location isActive={isActive}>{location}</Location>
    </TimelineItemContainer>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items, activeIndex, setActiveIndex }) => {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          period={item.period}
          title={item.title}
          company={item.company}
          location={item.location}
          index={index}
          isActive={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </TimelineContainer>
  );
};

export default Timeline; 