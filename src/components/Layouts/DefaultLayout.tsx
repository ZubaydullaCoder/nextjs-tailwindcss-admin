'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { SideBarToggleStateProvider } from '@/context/SidebarToggleStateProvider';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideBarToggleStateProvider>
        {/* <!-- ===== Page Wrapper Star ===== --> */}
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Star ===== --> */}
          <Sidebar
          // sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
          />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Star ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {/* <!-- ===== Header Star ===== --> */}
            <Header
            //  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
            />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Star ===== --> */}
            <main className="no-scrollbar">
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </SideBarToggleStateProvider>
    </>
  );
}
