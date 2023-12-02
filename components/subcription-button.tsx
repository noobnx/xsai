'use client';

import { Sparkle } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import axios from 'axios';

import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';

interface SubcriptionButtonProps {
   className?: string;
   isPro?: boolean;
}

const SubcriptionButton: React.FC<SubcriptionButtonProps> = ({
   className,
   isPro,
}) => {
   const [loading, setLoading] = useState(false);
   const { toast } = useToast();
   const handleSubcribe = async () => {
      try {
         setLoading(true);
         const { data } = await axios.get('/api/stripe');
      } catch (error) {
         toast({
            variant: 'destructive',
            description: 'Something went wrong. Please try again.',
         });
      } finally {
         setLoading(false);
      }
   };
   return (
      <div className={className}>
         <Button
            variant="outline"
            size="lg"
            disabled={loading}
            onClick={handleSubcribe}
            className={cn(
               'text-white w-full font-semibold border-none gradient-btn',
               'hover:text-white',
            )}
         >
            <span>{isPro ? 'Manage Subcription' : 'Upgrade to Pro'}</span>
            <Sparkle />
         </Button>
      </div>
   );
};

export default SubcriptionButton;
