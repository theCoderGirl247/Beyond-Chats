'use client'
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  homeElement?: boolean; 
  separator?: React.ReactNode; 
  capitalizeLinks?: boolean; 
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  homeElement = true,
  separator = <ChevronRight className="w-4 h-4 text-gray-400" />,
  capitalizeLinks = true
}) => {
  const paths = usePathname();
  
  const pathSegments = paths.split('/').filter(segment => segment !== '');
  
  // Function to generate readable text from path segments
  const generateReadableText = (text: string): string => {
    // Remove hyphens and underscores, capitalize if option is true
    const readable = text.replace(/[-_]/g, ' ');
    return capitalizeLinks 
      ? readable.charAt(0).toUpperCase() + readable.slice(1) 
      : readable;
  };

  // Build pathUrls for each segment
  const pathUrls = pathSegments.map((_, index) => {
    return '/' + pathSegments.slice(0, index + 1).join('/');
  });

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
      {homeElement && (
        <Link 
          href="/"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <Home className="w-4 h-4" />
        </Link>
      )}
      
      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        
        return (
          <React.Fragment key={index}>
            {/* Separator */}
            {(homeElement || index > 0) && separator}
            
            {/* Breadcrumb Item */}
            <Link
              href={pathUrls[index]}
              className={`
                ${isLast 
                  ? 'text-white font-medium pointer-events-none' 
                  : 'text-gray-400 hover:text-white transition-colors'}
              `}
              aria-current={isLast ? 'page' : undefined}
            >
              {generateReadableText(segment)}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;