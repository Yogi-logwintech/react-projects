import { AppBar, Avatar, Badge, Box, InputBase, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import React, { useState } from "react";
import { Facebook, Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  },
}));

const Navbar = () => {
  const [open, setOpen] =  useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Facebook very lite
        </Typography>
        <Facebook sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search.." />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{height: 30, width: 30}} onClick={e => setOpen(true)} />
        </Icons>
        <UserBox onClick={e => setOpen(true)} id='demo-positioned-button'>
          <Avatar sx={{height: 30, width: 30}} />
          <Typography variant="span">Yogi</Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>
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
                    >Ali Connors</Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          </MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
