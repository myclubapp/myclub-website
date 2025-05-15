
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

  // Choose the appropriate logo based on variant
  const logoSrc = variant === 'light' 
    ? '/lovable-uploads/2ac8e449-d690-4951-a533-ead9382cbb69.png' 
    : variant === 'dark' 
      ? '/lovable-uploads/cb539770-ab12-4233-ae3a-18bdce0dd13f.png'
      : '/lovable-uploads/af203d05-a168-4ed0-bf41-99382e84cfe6.png';
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="myclub Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
};

export default Logo;
