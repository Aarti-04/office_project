// import React from 'react';
// import DrawerComponent from './drawer1';
// import AppBarComponent from './appbar1';

// const GmailDashboard = () => {
//   return (
//     <>
//       <DrawerComponent />
//       <AppBarComponent></AppBarComponent>
//     </>
//   );
// };

// export default GmailDashboard;
// Main component to integrate both AppBar and Drawer
import React, { useState } from 'react';
import AppBarComponent from './appbar1';
import DrawerComponent from './drawer1';
import Header from './header';

const GmailDashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* <AppBarComponent onMenuClick={handleMenuClick} /> */}
      {/* <DrawerComponent open={isDrawerOpen} onClose={closeDrawer} /> */}
      <Header></Header>
    </>
  );
};

export default GmailDashboard;
