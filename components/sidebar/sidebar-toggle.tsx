import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

import { useSidebarStore } from '@/stores/sidebar-store';
import { Button } from '../ui/button';

const SidebarToggle = () => {
   const { isMinimal, handleChangeSidebar, handleOpenOrClose } =
      useSidebarStore();
   return (
      <div>
         <div
            className={cn('cursor-pointer hidden', 'lg:block')}
            onClick={handleChangeSidebar}
            is-navbar-minimal={isMinimal ? 'true' : undefined}
         >
            <Image
               src={`icons/menu-${isMinimal ? 'open' : 'close'}.svg`}
               width={24}
               height={24}
               alt="navbar icon"
            />
         </div>
         <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={handleOpenOrClose}
         >
            <X />
         </Button>
      </div>
   );
};

export default SidebarToggle;
