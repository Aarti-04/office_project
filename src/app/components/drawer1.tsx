// import React from 'react';
// import { Drawer, List, ListItem, ListItemText } from '@mui/material';

// const DrawerComponent = () => {
//   return (
//     <Drawer variant="permanent">
//       <List>
//         <ListItem button>
//           <ListItemText primary="Inbox" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Spam" />
//         </ListItem>
//         {/* Add more items as needed */}
//       </List>
//     </Drawer>
//   );
// };

// export default DrawerComponent;

// Drawer component
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const DrawerComponent = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
