import React from 'react';
import ThemeProvider from './styles/ThemeProvider';
import Hero from './components/sections/Hero';
import Summary from './components/sections/Summary';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import { portfolioData } from './data/portfolioData';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Hero personalInfo={portfolioData.personalInfo} />
      <Summary summary={portfolioData.summary} vision={portfolioData.vision} />
      <Experience experience={portfolioData.experience} />
      <Certifications certifications={portfolioData.certifications || []} />
      {/* Add other sections here as they are developed */}
    </ThemeProvider>
  );
};

export default App; 