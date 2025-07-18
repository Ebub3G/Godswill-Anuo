import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'default' | 'lg' | 'xl';
}

export function Container({ children, size = 'default', className, ...props }: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-6xl',
    lg: 'max-w-7xl',
    xl: 'max-w-8xl'
  };

  return (
    <div 
      className={cn(
        'container-section mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}