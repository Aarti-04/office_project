// import React from "react";

// const DummyInbox = () => {
//   return (
//     <>
//       <div>dummy</div>
//       <div className="main-content-left main-content-left-mail card-body card-body">
//         <button
//           type="button"
//           id="btnCompose"
//           className="btn btn-primary btn-compose btn btn-primary"
//         >
//           Compose
//         </button>
//         <div className="main-mail-menu">
//           <div className="nav main-nav-column mg-b-20 nav">
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Inbox"
//                 className="nav-link thumb  nav-link active"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="far fa-envelope"></i> Inbox <span>18</span>
//               </a>
//             </div>
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Starred"
//                 className="nav-link thumb nav-link"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="far fa-star"></i> Starred <span>8</span>
//               </a>
//             </div>
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Snoozed"
//                 className="nav-link thumb nav-link"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="far fa-clock"></i> Snoozed <span>6</span>
//               </a>
//             </div>
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Important"
//                 className="nav-link thumb nav-link"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="far fa-bookmark"></i> Important <span>15</span>
//               </a>
//             </div>
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Sent"
//                 className="nav-link thumb nav-link"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="far fa-paper-plane"></i> Sent Mail <span>24</span>
//               </a>
//             </div>
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Drafts"
//                 className="nav-link thumb nav-link"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="far fa-hourglass"></i> Drafts <span>2</span>
//               </a>
//             </div>
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Spam"
//                 className="nav-link thumb nav-link"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="far fa-dot-circle"></i> Spam <span>32</span>
//               </a>
//             </div>
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Chats"
//                 className="nav-link thumb nav-link"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="far fa-comments"></i> Chats <span>14</span>
//               </a>
//             </div>
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Contacts"
//                 className="nav-link thumb nav-link"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="far fa-user-circle"></i> Contacts <span>547</span>
//               </a>
//             </div>
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Trash"
//                 className="nav-link thumb nav-link"
//                 tabindex="0"
//                 href="#"
//               >
//                 <i className="fe fe-trash"></i> Trash <span>365</span>
//               </a>
//             </div>
//           </div>
//           <label className="main-content-label main-content-label-sm form-label">
//             Settings
//           </label>
//           <div className="nav main-nav-column nav">
//             <div className="nav-item">
//               <a
//                 role="button"
//                 data-rr-ui-event-key="Email"
//                 className="nav-link  nav-link active"
//                 tabindex="0"
//                 href="#"
//               >
//                 Email Settings
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DummyInbox;
"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import axios from "axios";

const messages = [
  {
    id: 1,
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    id: 5,
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    id: 6,
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 7,
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function BottomAppBar() {
  const [data, setData] = React.useState([]);
  const getdata = async () => {
    if (localStorage.getItem("my_token")) {
      const data = localStorage.getItem("my_token");
      console.log(data);
      const res = await axios.post(
        "http://127.0.0.1:8000/api/google-auth-verify/",
        JSON.parse(data)
      );
      setData(res.data);
      console.log(res.data);
    }
  };
  React.useEffect(() => {
    getdata();
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: "50px" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          Inbox
        </Typography>
        <List sx={{ mb: 2 }}>
          {data.map(({ id, header, body }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Today
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Yesterday
                </ListSubheader>
              )}
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={""} />
                </ListItemAvatar>
                <ListItemText primary={header} secondary={body} />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
