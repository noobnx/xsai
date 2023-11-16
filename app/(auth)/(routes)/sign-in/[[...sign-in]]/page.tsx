import { cn } from '@/lib/utils';
import { SignIn } from '@clerk/nextjs';

const Page = () => {
   return (
      <div className={cn('flex items-center justify-center h-screen')}>
         <SignIn />
      </div>
   );
};

export default Page;
