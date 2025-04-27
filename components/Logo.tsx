'use client';

import { useTheme } from 'next-themes';
import { Flame } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Simplified logo component using Lucide icon as a placeholder
  // In a real project, you might use an SVG file or custom 3D element
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
      <Flame 
        className="h-full w-full text-primary" 
        style={{ filter: `drop-shadow(0 0 8px ${isDark ? 'rgba(255, 165, 0, 0.5)' : 'rgba(255, 165, 0, 0.3)'})` }}
      />
    </div>
  );
}