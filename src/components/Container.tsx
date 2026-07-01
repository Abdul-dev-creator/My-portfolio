import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 w-full ${className}`}>
      {children}
    </div>
  );
};
