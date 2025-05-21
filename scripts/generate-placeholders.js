const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/images/experience',
  'public/images/projects',
  'public/images/testimonials',
  'public/images/certifications'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate placeholder SVG images
const generatePlaceholderSVG = (text, width, height, color) => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`;

// Experience images
const experienceImages = [
  { name: 'twins-ai.jpg', text: 'TwinsAI', color: '#4A9DFF' },
  { name: 'pandaflow.jpg', text: 'Pandaflow', color: '#A170F6' },
  { name: 'invisible-tech.jpg', text: 'Invisible Tech', color: '#58EDD2' },
  { name: 'rumsan.jpg', text: 'Rumsan', color: '#FFB155' },
  { name: 'business-analyst.jpg', text: 'Business Analyst', color: '#FF5D85' }
];

// Project images
const projectImages = [
  { name: 'quantum.jpg', text: 'Quantum', color: '#4A9DFF' },
  { name: 'rahat.jpg', text: 'RahatChain', color: '#A170F6' },
  { name: 'marketpulse.jpg', text: 'MarketPulse', color: '#58EDD2' }
];

// Testimonial images
const testimonialImages = [
  { name: 'testimonial1.jpg', text: 'Sarah Chen', color: '#4A9DFF' },
  { name: 'testimonial2.jpg', text: 'Rajiv Sharma', color: '#A170F6' },
  { name: 'testimonial3.jpg', text: 'Emily Johnson', color: '#58EDD2' }
];

// Certification images
const certificationImages = [
  { name: 'pmi.jpg', text: 'PMP', color: '#4A9DFF' },
  { name: 'cisco.jpg', text: 'Cisco', color: '#A170F6' },
  { name: 'google.jpg', text: 'Google', color: '#58EDD2' }
];

// Generate and save images
const generateImages = (images, directory) => {
  images.forEach(({ name, text, color }) => {
    const svg = generatePlaceholderSVG(text, 800, 400, color);
    fs.writeFileSync(path.join(directory, name.replace('.jpg', '.svg')), svg);
  });
};

generateImages(experienceImages, 'public/images/experience');
generateImages(projectImages, 'public/images/projects');
generateImages(testimonialImages, 'public/images/testimonials');
generateImages(certificationImages, 'public/images/certifications');

console.log('Placeholder images generated successfully!'); 