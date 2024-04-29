import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function AlignItemsList() {
  const [data, setData] = React.useState([]);
  const getdata = async () => {
    if (localStorage.getItem('my_token')) {
      const data = localStorage.getItem('my_token');
      console.log(data);
      const res = await axios.post(
        'http://127.0.0.1:8000/api/google-auth-verify/',
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
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      {data.map((item) => {
        return (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.header}
                  </Typography>
                  {item.body}
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
