import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { WorkExperience } from '../../types';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Timeline from '../ui/Timeline';
import KpiMetric from '../ui/KpiMetric';
import { theme } from '../../styles/theme';

interface ExperienceProps {
  experience: WorkExperience[];
}

const ExperienceWrapper = styled(Section)`
  min-height: 100vh;
  background: linear-gradient(180deg, ${theme.colors.backgroundAlt} 0%, ${theme.colors.background} 100%);
  position: relative;
  overflow: hidden;
  padding: ${theme.spacing.xxl} 0;
  
  /* Add subtle tech pattern to background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 25px 25px, rgba(74, 157, 255, 0.1) 2%, transparent 0%),
                      radial-gradient(circle at 75px 75px, rgba(74, 157, 255, 0.05) 2%, transparent 0%);
    background-size: 100px 100px;
    opacity: 0.4;
    z-index: 0;
  }
`;

const ExperienceContainer = styled(Container)`
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.xl}) {
    padding: 0 ${theme.spacing.xxl};
  }
`;

const SectionTitle = styled.div`
  margin-bottom: ${theme.spacing.xxl};
  text-align: center;
`;

const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const TimelineContainer = styled.div`
  @media (max-width: ${theme.breakpoints.lg}) {
    margin-bottom: ${theme.spacing.xl};
  }
`;

const DetailContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2),
              inset 0 0 0 1px rgba(255, 255, 255, 0.05);
`;

const JobHeader = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, 
      rgba(74, 157, 255, 0.5), 
      rgba(74, 157, 255, 0.1), 
      transparent
    );
  }
`;

const JobTitle = styled.h3`
  font-size: ${theme.typography.sizes.title1};
  margin-bottom: ${theme.spacing.sm};
  background: linear-gradient(135deg, #fff 20%, ${theme.colors.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
`;

const JobDetails = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.textSecondary};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`;

const JobCompany = styled.span`
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.text};
  font-size: ${theme.typography.sizes.title3};
  margin-right: ${theme.spacing.sm};
`;

const JobPeriod = styled.span`
  background: rgba(74, 157, 255, 0.1);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-family: 'Fira Code', monospace;
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.primary};
  letter-spacing: 0.5px;
  border: 1px solid rgba(74, 157, 255, 0.2);
`;

const JobLocation = styled.span`
  display: flex;
  align-items: center;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.sizes.body};
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${theme.colors.secondary};
    margin-right: ${theme.spacing.xs};
    box-shadow: 0 0 10px rgba(106, 142, 255, 0.5);
  }
`;

const SectionHeader = styled.h4`
  font-size: ${theme.typography.sizes.title3};
  margin-top: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  
  &::before {
    content: '//';
    color: ${theme.colors.primary};
    margin-right: ${theme.spacing.sm};
    font-family: 'Fira Code', monospace;
    opacity: 0.8;
  }
`;

const KpiMetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AchievementsContainer = styled.div`
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(74, 157, 255, 0.15);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const AchievementHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.sm};
  padding-bottom: ${theme.spacing.xs};
  border-bottom: 1px solid rgba(74, 157, 255, 0.15);
`;

const AchievementHeaderText = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.primary};
`;

const AchievementList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const AchievementItem = styled.li`
  position: relative;
  padding-left: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.sm};
  font-size: ${theme.typography.sizes.caption};
  line-height: 1.6;
  color: ${theme.colors.textSecondary};
  
  &:before {
    content: '•';
    color: ${theme.colors.primary};
    position: absolute;
    left: 4px;
    top: 0;
    font-size: 18px;
  }
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

const Technology = styled.span`
  background: rgba(74, 157, 255, 0.1);
  border: 1px solid rgba(74, 157, 255, 0.2);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.sizes.caption};
  color: ${theme.colors.textSecondary};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 157, 255, 0.2);
    color: ${theme.colors.text};
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '#';
    color: ${theme.colors.primary};
    margin-right: 4px;
  }
`;

// Harvard-style achievements format
const formatAchievementForHarvard = (achievement: string) => {
  const lowerAchievement = achievement.toLowerCase();
  
  // Extract the action verb (usually at the beginning)
  const actionVerbs = [
    'spearheaded', 'led', 'developed', 'implemented', 'created', 
    'established', 'orchestrated', 'pioneered', 'conceptualized',
    'built', 'designed', 'managed', 'analyzed', 'launched', 'instituted'
  ];
  
  let formattedAchievement = achievement;
  
  // Look for numbers/metrics to highlight
  const metricMatches = achievement.match(/(\d+%|\$\d+(?:\.\d+)?[KMB]?|\d+,\d+|\d+\+?)/g);
  
  if (metricMatches && metricMatches.length > 0) {
    // Bold the metrics
    metricMatches.forEach(metric => {
      formattedAchievement = formattedAchievement.replace(
        metric, 
        `<strong style="color: #fff;">${metric}</strong>`
      );
    });
  }
  
  return formattedAchievement;
};

const Experience: React.FC<ExperienceProps> = ({ experience }: ExperienceProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedJob, setSelectedJob] = useState<WorkExperience>(experience[0]);
  
  useEffect(() => {
    setSelectedJob(experience[activeIndex]);
  }, [activeIndex, experience]);
  
  // Map KPIs to metrics
  const getKpiMetrics = (job: WorkExperience) => {
    if (!job.kpis || job.kpis.length === 0) return [];
    
    // Create metrics from KPIs
    const kpiData = job.kpis.map((kpi, index) => {
      // Extract numbers from the KPI text
      const numberMatch = kpi.match(/\d+(\+|\s)?/);
      const value = numberMatch ? numberMatch[0] : '';
      
      // Determine icon and label based on KPI content
      let icon = 'chart';
      let label = kpi;
      let accentColor = '#4A9DFF';
      
      if (kpi.toLowerCase().includes('product')) {
        icon = 'chart';
        label = 'Products Developed';
        accentColor = '#4A9DFF';
      } else if (kpi.toLowerCase().includes('team') || kpi.toLowerCase().includes('engineer')) {
        icon = 'users';
        label = 'Team Members';
        accentColor = '#6C8EFF';
      } else if (kpi.toLowerCase().includes('stakeholder')) {
        icon = 'users';
        label = 'Stakeholders';
        accentColor = '#A170F6';
      } else if (kpi.toLowerCase().includes('nft') || kpi.toLowerCase().includes('marketplace')) {
        icon = 'chart';
        label = 'NFT Marketplaces';
        accentColor = '#58EDD2';
      } else if (kpi.toLowerCase().includes('data') || kpi.toLowerCase().includes('user')) {
        icon = 'chart';
        label = 'Data Analysis';
        accentColor = '#FFB155';
      }
      
      return {
        value: value.trim(),
        label,
        fullText: kpi,
        icon,
        accentColor,
        delay: index
      };
    });
    
    return kpiData.slice(0, 3); // Limit to 3 metrics for display
  };
  
  return (
    <ExperienceWrapper id="experience">
      <ExperienceContainer>
        <SectionTitle>
          <Heading level={2} size="title1" gradient withAccent>
            Professional Journey
          </Heading>
        </SectionTitle>
        <ExperienceContent>
          <TimelineContainer>
            <Timeline 
              items={experience.map(job => ({
                period: job.period,
                title: job.title,
                company: job.company,
                location: job.location
              }))}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </TimelineContainer>
          
          <DetailContainer>
            <JobHeader>
              <JobTitle>{selectedJob.title}</JobTitle>
              <JobDetails>
                <JobCompany>{selectedJob.company}</JobCompany>
                <JobLocation>{selectedJob.location}</JobLocation>
                <JobPeriod>{selectedJob.period}</JobPeriod>
              </JobDetails>
            </JobHeader>
            
            {selectedJob.kpis && selectedJob.kpis.length > 0 && (
              <>
                <SectionHeader>Key Performance Indicators</SectionHeader>
                <KpiMetricsContainer>
                  {getKpiMetrics(selectedJob).map((metric, index) => (
                    <KpiMetric
                      key={index}
                      value={metric.value}
                      label={metric.label}
                      icon={metric.icon}
                      accentColor={metric.accentColor}
                      delay={metric.delay}
                    />
                  ))}
                </KpiMetricsContainer>
              </>
            )}
            
            <ContentContainer>
              <div>
                <SectionHeader>Achievements</SectionHeader>
                <AchievementsContainer>
                  <AchievementHeader>
                    <AchievementHeaderText>resume_achievements.md</AchievementHeaderText>
                  </AchievementHeader>
                  <AchievementList>
                    {selectedJob.achievements && selectedJob.achievements.slice(0, 5).map((achievement, index) => (
                      <AchievementItem 
                        key={index}
                        dangerouslySetInnerHTML={{ __html: formatAchievementForHarvard(achievement) }}
                      />
                    ))}
                  </AchievementList>
                </AchievementsContainer>
              </div>
              
              <div>
                <SectionHeader>Technologies</SectionHeader>
                <TechnologiesList>
                  {selectedJob.technologies && selectedJob.technologies.map((tech, index) => (
                    <Technology key={index}>{tech}</Technology>
                  ))}
                </TechnologiesList>
              </div>
            </ContentContainer>
          </DetailContainer>
        </ExperienceContent>
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default Experience; 