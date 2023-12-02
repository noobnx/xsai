import { cn } from '@/lib/utils';

import Topbar from '@/components/topbar';
import Sidebar from '@/components/sidebar';
import MobileSidebar from '@/components/sidebar/mobile-sidebar';
import UpgradeProModal from '@/components/dashboard/upgrade-pro-modal';

const DashboardLayout = (props: { children: React.ReactNode }) => {
   const isProlan = false;
   const userLimitCount = 0;

   return (
      <div>
         <header>
            <Topbar />
         </header>
         <main
            className={cn(
               'lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20',
            )}
         >
            <Sidebar
               userLimitCount={userLimitCount}
               isProlan={isProlan}
               classname={cn(
                  'fixed left-0 z-20 w-80 hidden [&:has([is-navbar-minimal])]:w-fit',
                  'lg:block',
               )}
            />
            <MobileSidebar
               isProlan={isProlan}
               userLimitCount={userLimitCount}
            />
            <UpgradeProModal isProlan={isProlan} />
            <div
               className={cn(
                  'bg-background h-[calc(100vh-56px)]',
                  'lg:rounded-3xl lg:p-7',
               )}
            >
               {props.children}
            </div>
         </main>
      </div>
   );
};

export default DashboardLayout;
