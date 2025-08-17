import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../styles/theme';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.xl};
  max-width: 8.5in;
  max-height: 90vh;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.3s ease-out;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid #e0e0e0;
  background: #f8f9fa;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e0e0e0;
    color: #333;
  }
`;

const DownloadButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

const DownloadButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: ${theme.borderRadius.md};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.aiAccent};
    transform: translateY(-1px);
  }
`;

const ResumeFrame = styled.iframe`
  width: 100%;
  height: calc(90vh - 100px);
  border: none;
  background: white;
`;

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/product-manager-portfolio/resume.pdf';
    link.download = 'Anup_Shrestha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadHTML = () => {
    const link = document.createElement('a');
    link.href = '/product-manager-portfolio/resume.html';
    link.download = 'Anup_Shrestha_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Anup Shrestha - Resume</ModalTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DownloadButtons>
              <DownloadButton onClick={handleDownloadPDF}>
                📄 PDF
              </DownloadButton>
              <DownloadButton onClick={handleDownloadHTML}>
                🌐 HTML
              </DownloadButton>
              <DownloadButton onClick={handlePrint}>
                🖨️ Print
              </DownloadButton>
            </DownloadButtons>
            <CloseButton onClick={onClose}>×</CloseButton>
          </div>
        </ModalHeader>
        <ResumeFrame 
          src="/product-manager-portfolio/resume.html"
          title="Anup Shrestha Resume"
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default ResumeModal;
