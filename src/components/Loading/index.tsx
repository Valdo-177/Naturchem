"use client"
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import React from 'react';

interface LoadingType {
  show: boolean;
}

const LoadingComponent: React.FC<LoadingType> = ({ show }) => {
  if (show) {
    return (
      <div className="pointer-events-none z-50 fixed top-0 left-0 bg-[#000000d6] text-white flex items-center justify-center w-full h-full">
        <LoadingSpinner />
      </div>
    );
  }
  return null;
};

export default LoadingComponent;
