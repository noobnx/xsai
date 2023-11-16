import { cn } from '@/lib/utils';
import { SignUp } from '@clerk/nextjs';

const Page = () => {
   return (
      <div className={cn('flex items-center justify-center h-screen')}>
         <SignUp />
      </div>
   );
};

export default Page;
