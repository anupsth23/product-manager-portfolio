import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

interface KpiMetricProps {
  value: string;
  label: string;
  icon?: string;
  prefix?: string;
  suffix?: string;
  accentColor?: string;
  delay?: number;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const MetricContainer = styled.div<{ accentColor: string; delay: number }>`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(74, 157, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${fadeIn} 0.6s ${props => props.delay * 0.1}s forwards,
             ${float} 5s ease-in-out infinite;
  opacity: 0;
  transform: translateY(20px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2),
              inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25),
                0 0 15px rgba(74, 157, 255, 0.2),
                inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    border-color: rgba(74, 157, 255, 0.4);
    
    &::before {
      opacity: 0.6;
      width: 100px;
      height: 100px;
      filter: blur(50px);
    }
  }
  
  /* Accent glow */
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    background: ${props => props.accentColor || theme.colors.primary};
    filter: blur(40px);
    opacity: 0.4;
    border-radius: 50%;
    z-index: 0;
    transition: all 0.4s ease;
  }
  
  /* Tech line decoration */
  &::after {
    content: '';
    position: absolute;
    bottom: 15px;
    left: 15px;
    width: 40%;
    height: 2px;
    background: linear-gradient(
      to right,
      ${props => props.accentColor || theme.colors.primary},
      transparent
    );
    opacity: 0.6;
  }
`;

const MetricHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
`;

const MetricValue = styled.div<{ accentColor: string }>`
  font-size: 3rem;
  font-weight: ${theme.typography.fontWeights.bold};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.text};
  position: relative;
  z-index: 1;
  display: flex;
  align-items: baseline;
  background: linear-gradient(135deg, #fff 0%, ${props => props.accentColor || theme.colors.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  line-height: 1;
  animation: ${pulse} 3s infinite ease-in-out;
  transform-origin: center;
`;

const MetricLabel = styled.div`
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.textSecondary};
  max-width: 100%;
  position: relative;
  z-index: 1;
  opacity: 0.9;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const IconContainer = styled.div<{ accentColor: string }>`
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.accentColor || theme.colors.primary};
  border-radius: ${theme.borderRadius.circle};
  opacity: 0.9;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(74, 157, 255, 0.3);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 
              inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  animation: ${pulse} 3s infinite ease-in-out;
`;

const Prefix = styled.span`
  font-size: ${theme.typography.sizes.title3};
  margin-right: ${theme.spacing.xs};
  opacity: 0.7;
`;

const Suffix = styled.span`
  font-size: ${theme.typography.sizes.title3};
  margin-left: ${theme.spacing.xs};
  opacity: 0.7;
`;

// Line below the metric
const MetricUnderline = styled.div<{ accentColor: string }>`
  height: 3px;
  width: 60px;
  background: ${props => props.accentColor || theme.colors.primary};
  margin-top: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  opacity: 0.7;
`;

// Icons as React components using SVG
const Icons = {
  trending: (color: string) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17L9 11L13 15L21 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 7H21V14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  users: (color: string) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21V19C22.9986 17.1771 21.7079 15.5857 20 15.13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13C17.7105 3.58317 19.0053 5.17786 19.0053 7.005C19.0053 8.83214 17.7105 10.4268 16 10.88" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  clock: (color: string) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6V12L16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chart: (color: string) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 20V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 20V4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 20V14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const KpiMetric: React.FC<KpiMetricProps> = ({ 
  value, 
  label, 
  icon = 'chart',
  prefix,
  suffix,
  accentColor = theme.colors.primary,
  delay = 0
}) => {
  const renderIcon = () => {
    if (icon in Icons) {
      return Icons[icon as keyof typeof Icons](accentColor);
    }
    // Default to chart icon if specified icon doesn't exist
    return Icons.chart(accentColor);
  };

  return (
    <MetricContainer accentColor={accentColor} delay={delay}>
      <MetricHeader>
        <IconContainer accentColor={accentColor}>
          {renderIcon()}
        </IconContainer>
      </MetricHeader>
      
      <MetricValue accentColor={accentColor}>
        {prefix && <Prefix>{prefix}</Prefix>}
        {value}
        {suffix && <Suffix>{suffix}</Suffix>}
      </MetricValue>
      
      <MetricUnderline accentColor={accentColor} />
      
      <MetricLabel>{label}</MetricLabel>
    </MetricContainer>
  );
};

export default KpiMetric; 