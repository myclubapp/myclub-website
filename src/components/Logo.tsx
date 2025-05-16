
import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'colored';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant = 'colored',
  size = 'md',
  className = ''
}) => {
  // Size mapping
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  // New logo
  const newLogo = '/lovable-uploads/9eb0e361-1508-4d5e-a219-d6fff8ebdb1d.png';

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={newLogo} 
        alt="myclub Logo" 
        className={`${sizeClasses[size]} ${variant === 'light' ? 'brightness-[1.15]' : variant === 'dark' ? 'brightness-100' : ''}`} 
      />
    </div>
  );
};

export default Logo;
