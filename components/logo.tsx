import { cn } from '@/lib/utils';
import { Brain } from 'lucide-react';
import { Poppins } from 'next/font/google';

interface PropsLogo {
   className?: string;
}

const poppins = Poppins({ weight: '700', subsets: ['latin'] });

const Logo: React.FC<PropsLogo> = ({ className }) => {
   return (
      <div className={cn('flex items-center', className)}>
         <Brain color="#d2455b" size={40} />
         <span className={cn('ml-2 font-bold text-3xl', poppins.className)}>
            XSAI
         </span>
      </div>
   );
};

export default Logo;
