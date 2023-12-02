'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

import Logo from './logo';
import { useSidebarStore } from '@/stores/sidebar-store';

const Topbar = () => {
   const { handleOpenOrClose } = useSidebarStore();
   return (
      <div
         className={cn(
            'flex items-center justify-between p-4 sticky top-0',
            'lg:hidden',
         )}
      >
         <Logo />
         <Button variant="ghost" size="icon" onClick={handleOpenOrClose}>
            <Menu />
         </Button>
      </div>
   );
};

export default Topbar;
