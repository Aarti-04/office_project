// 'use client';
// import React from 'react';
// import Login from '../components/login';
// import Logout from '../components/logout';
// import Header from '../components/header';
// import SideBar from '../components/sdiebar';
// import MainTopBar from '../components/appbar';
// import ResponsiveDrawer from '../components/sdiebar';
// import SwipeableTemporaryDrawer from '../components/sdiebar';
// import GmailDashboard from '../components/gmaildashboard';

// const Dashboard = () => {
//   return (
//     <div>
//       {/* <Header></Header> */}
//       <div className="flex  min-h-screen flex-col items-center justify-between bg-slate-300 p-24">
//         {/* <h1 className="bg-orange-600">Welcome</h1> */}
//         {/* <MainTopBar></MainTopBar> */}
//         {/* <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer> */}
//         {/* <GmailDashboard></GmailDashboard> */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// layout.tsx
'use client';
import React from 'react';
import DashboardLayout from '../components1/DashboardLayout';
import Login from '../components1/Login';
import Logout from '../components1/Logout';
import { useRouter } from 'next/navigation';

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  // Check if the current page is the login or logout page
  const isAuthPage = ['/auth/login', '/auth/logout'].includes(pathname);

  // Render the appropriate layout based on the current page
  if (isAuthPage) {
    return (
      <div>
        {pathname === '/auth/login' && <Login />}
        {pathname === '/auth/logout' && <Logout />}
      </div>
    );
  } else {
    // For other pages, render the dashboard layout
    return <DashboardLayout>{children}</DashboardLayout>;
  }
};

export default Layout;
