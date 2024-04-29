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
import React, { useState } from "react";
import AppBarComponent from "./appbar1";
import DrawerComponent from "./drawer1";
import Header from "./header";
import AlignItemsList from "./inbox";

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
      <AppBarComponent onMenuClick={handleMenuClick} />
      <DrawerComponent open={isDrawerOpen} onClose={closeDrawer} />
      {/* <Header></Header> */}
      <div>
        <AlignItemsList></AlignItemsList>
      </div>
    </>
  );
};

export default GmailDashboard;

// import React from "react";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import { makeStyles } from "@mui/styles";

// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// const drawerWidth = 240;

// const useStyles = makeStyles((theme: any) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// function GmailDashboard() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//             Inbox
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <Toolbar />
//         <div className={classes.drawerContainer}>
//           <List>
//             {["Inbox", "Starred", "Sent Mail", "Drafts", "Trash"].map(
//               (text, index) => (
//                 <ListItem button key={text}>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               )
//             )}
//           </List>
//         </div>
//       </Drawer>
//       <main className={classes.content}>
//         <Toolbar />
//         <Container maxWidth="lg">
//           <Paper elevation={3} className="p-4">
//             {/* List of Emails */}
//             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               <li className="bg-white p-4 shadow-md">Email 1</li>
//               <li className="bg-white p-4 shadow-md">Email 2</li>
//               <li className="bg-white p-4 shadow-md">Email 3</li>
//               {/* Add more emails as needed */}
//             </ul>
//           </Paper>
//         </Container>
//       </main>
//     </div>
//   );
// }

// export default GmailDashboard;
