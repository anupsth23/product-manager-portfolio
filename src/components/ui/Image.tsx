import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ImageProps {
  src?: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  isLogo?: boolean;
}

const ImageWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  background: rgba(20, 25, 35, 0.6);
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.sizes.caption};
  padding: ${theme.spacing.md};
  text-align: center;
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const StyledImage = styled.img<{ width?: string; height?: string; isLogo?: boolean }>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  object-fit: ${props => props.isLogo ? 'contain' : 'cover'};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;
  max-width: 100%;
  max-height: 100%;
  
  &:hover {
    transform: ${props => props.isLogo ? 'scale(1.05)' : 'scale(1.02)'};
  }
`;

const LogoContainer = styled.div<{ width?: string; height?: string }>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '120px'};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md};
  border: 1px solid rgba(74, 157, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(74, 157, 255, 0.3);
  }
`;

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, isLogo = false }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <ImageWrapper width={width} height={height} className={className}>
        {alt}
      </ImageWrapper>
    );
  }

  if (isLogo) {
    return (
      <LogoContainer width={width} height={height} className={className}>
        <StyledImage
          src={src}
          alt={alt}
          isLogo={true}
          onError={() => setError(true)}
        />
      </LogoContainer>
    );
  }

  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default Image; 