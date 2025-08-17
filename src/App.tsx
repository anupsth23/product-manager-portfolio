import React from 'react';
import ThemeProvider from './styles/ThemeProvider';
import Hero from './components/sections/Hero';
import Summary from './components/sections/Summary';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import ProductManagerSkills from './components/sections/ProductManagerSkills';
import Projects from './components/sections/Projects';
import Volunteer from './components/sections/Volunteer';
import Certifications from './components/sections/Certifications';
import SocialMedia from './components/sections/SocialMedia';
import { portfolioData } from './data/portfolioData';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Hero personalInfo={portfolioData.personalInfo} />
      <Summary summary={portfolioData.summary} vision={portfolioData.vision} />
      <Experience experience={portfolioData.experience} />
      <Education education={portfolioData.education || []} />
      <ProductManagerSkills 
        technicalSkills={portfolioData.technicalSkills || {
          productManagement: [],
          tools: [],
          programming: [],
          cloudPlatforms: [],
          data: []
        }} 
        competencies={portfolioData.competencies || []} 
      />
      <Skills 
        technicalSkills={portfolioData.technicalSkills || {
          productManagement: [],
          tools: [],
          programming: [],
          cloudPlatforms: [],
          data: []
        }} 
        competencies={portfolioData.competencies || []} 
      />
      <Projects projects={portfolioData.projects || []} />
      <Volunteer volunteerExperience={portfolioData.volunteerExperience || []} />
      <Certifications certifications={portfolioData.certifications || []} />
      <SocialMedia 
        linkedin={portfolioData.personalInfo.socialLinks?.linkedin}
        twitter={portfolioData.personalInfo.socialLinks?.twitter}
      />
      {/* Add other sections here as they are developed */}
    </ThemeProvider>
  );
};

export default App; 