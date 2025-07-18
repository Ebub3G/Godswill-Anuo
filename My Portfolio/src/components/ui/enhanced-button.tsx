import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'default' | 'lg';
  children: React.ReactNode;
  href?: string;
}

export function EnhancedButton({ 
  variant = 'primary', 
  size = 'default', 
  children, 
  href,
  className,
  ...props 
}: EnhancedButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-md text-sm font-futura font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3',
    className
  );

  const variantClasses = {
    primary: cn(
      'btn-primary-enhanced',
      'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]',
      'focus:ring-[#1a1a1a] hover:shadow-lg hover:scale-105'
    ),
    outline: cn(
      'btn-outline-enhanced',
      'border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white',
      'focus:ring-[#1a1a1a] hover:shadow-lg hover:scale-105'
    )
  };

  const Component = href ? 'a' : motion.button;
  const componentProps = href ? { href } : props;

  return (
    <Component
      className={cn(baseClasses, variantClasses[variant])}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...componentProps}
    >
      {children}
    </Component>
  );
}