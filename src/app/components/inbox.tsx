import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import { AuthActions } from "../auth/utils";

export default function AlignItemsList() {
  const [data, setData] = React.useState([]);
  const [openLoader, setOpen] = React.useState(true);

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
    } else {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    getdata();
  }, []);
  const actions = AuthActions();

  return (
    <List>
      <Divider variant="inset" component="li" />
      {/* {data.length == 0 && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openLoader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
      {data.map((item) => {
        return (
          <ListItem
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              width: "100%",
              bgcolor: "background.paper",
              margin: "100px",
            }}
            alignItems="flex-start"
            key={item.id}
          >
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={item.header}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.body}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        actions.checkSpamOrHam(item.body);
                      }}
                    >
                      Check
                    </Button>
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        );
      })}
      <Divider variant="inset" component="li" />
    </List>
  );
}
