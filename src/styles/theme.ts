export const theme = {
  colors: {
    // Core colors - Deeper blacks for AI theme with subtle blue undertone
    background: '#080B10', // Deep blue-black
    backgroundAlt: '#0D111A', // Slightly lighter blue-black
    text: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.75)',
    
    // Accent colors - Modern AI inspired
    primary: '#4A9DFF', // Bright blue
    secondary: '#A170F6', // Purple
    tertiary: '#58EDD2', // Cyan mint
    success: '#5CF9A5', // Vibrant green
    warning: '#FFB155', // Orange
    error: '#FF5D85', // Pink-red
    
    // Gradients - Smoother, more subtle
    gradientPrimary: 'linear-gradient(135deg, #4A9DFF 0%, #A170F6 100%)',
    gradientSecondary: 'linear-gradient(135deg, #A170F6 0%, #58EDD2 100%)',
    gradientTertiary: 'linear-gradient(135deg, #FF5D85 0%, #FFB155 100%)',
    
    // Glass effects - More subtle for minimalist feel
    glass: 'rgba(13, 17, 26, 0.6)',
    glassBorder: 'rgba(255, 255, 255, 0.08)',
    glassHighlight: 'rgba(255, 255, 255, 0.03)',
    
    // New AI theme specific colors
    aiGlow: 'rgba(74, 157, 255, 0.15)',
    aiAccent: 'rgba(161, 112, 246, 0.15)',
    aiSurface: 'rgba(13, 17, 26, 0.9)',
    aiGrid: 'rgba(255, 255, 255, 0.03)',
  },
  
  // More modern typography
  typography: {
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      display: '56px',
      headline: '42px',
      title1: '32px',
      title2: '24px',
      title3: '20px',
      body: '17px',
      caption: '14px',
      small: '12px',
    },
    lineHeights: {
      tight: 1.1,
      normal: 1.3,
      relaxed: 1.5,
    },
  },
  
  // Spacing and sizing - Slightly more generous for minimalist look
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    huge: '96px',
  },
  
  // Border radius - More rounded for modern feel
  borderRadius: {
    sm: '8px',
    md: '14px',
    lg: '22px',
    xl: '30px',
    circle: '50%',
    pill: '999px',
  },
  
  // Transitions - Smoother
  transitions: {
    fast: '0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    normal: '0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  
  // Shadows - More subtle
  shadows: {
    small: '0 2px 10px rgba(0, 0, 0, 0.15)',
    medium: '0 4px 20px rgba(0, 0, 0, 0.2)',
    large: '0 10px 40px rgba(0, 0, 0, 0.3)',
    glow: (color: string) => `0 0 25px ${color}`,
    aiGlow: '0 0 30px rgba(74, 157, 255, 0.15)',
  },
  
  // Z-index layers
  zIndex: {
    base: 1,
    overlay: 10,
    modal: 100,
    toast: 1000,
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  
  // Media queries
  media: {
    xs: '@media (min-width: 480px)',
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    xxl: '@media (min-width: 1536px)',
  },
  
  // Container widths
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
}; 