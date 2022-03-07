import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ContactSecretory({ contactData, handleChange }) {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", margin: "0 1rem 0 0" }}
    >
      {contactData.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem
              alignItems='flex-start'
              onClick={() => handleChange(item)}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ backgroundColor: "#ff6d00" }}
                  alt={item.contactPerson}
                  src='/static/images/avatar/1.jpg'
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.locationName}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      {item.contactPerson}
                    </Typography>
                    {" - Hon. Secretary"}
                    <br />
                    <Typography
                      sx={{ display: "inline" }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      Phone&nbsp;-&nbsp;
                    </Typography>
                    {item.contactMobile}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider
              variant='inset'
              component='li'
              sx={{ display: item === 9 ? "none" : "block" }}
            />
          </React.Fragment>
        );
      })}
    </List>
  );
}
