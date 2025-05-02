
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 48, className = '' }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-devcode-purple to-devcode-blue rounded-md animate-pulse-subtle" style={{ filter: 'blur(8px)' }}></div>
      <div className="relative z-10 w-full h-full bg-black bg-opacity-80 rounded-md flex items-center justify-center border border-white/10">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-devcode-purple to-devcode-blue font-bold" style={{ fontSize: `${size * 0.4}px` }}>
          D&C
        </div>
      </div>
    </div>
  );
};
