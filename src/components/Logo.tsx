
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
  const newLogo = '/lovable-uploads/e8e070b4-80a2-4341-b70f-2fdab0010bb7.png';
  
  // For visual consistency, we'll use the same logo regardless of variant
  // but we can apply different styling based on variant
  const variantClasses = variant === 'light' 
    ? 'brightness-[1.15]' 
    : variant === 'dark' 
      ? 'brightness-100' 
      : '';
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={newLogo} 
        alt="myclub Logo" 
        className={`${sizeClasses[size]} object-contain ${variantClasses}`}
      />
    </div>
  );
};

export default Logo;
