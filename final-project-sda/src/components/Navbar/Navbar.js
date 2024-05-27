import React, { useState } from "react";
import Logo from "../../assets/images/foodhub.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  List,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "HOME",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "orange" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src={Logo} className="logo-1" alt="Website Logo" style={{ height: '40px', marginRight: '20px' }} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Button href=".." sx={{ color: 'orange' }}>Home</Button>
          <Button href=".." sx={{ color: 'orange' }}>About</Button>
          <Button href=".." sx={{ color: 'orange' }}>Testimonials</Button>
          <Button href=".." sx={{ color: 'orange' }}>Contact</Button>
          <IconButton href=".." sx={{ color: 'orange' }}>
            <BsCart2 className="navbar-cart-icon" />
          </IconButton>
          <Button variant="contained" sx={{ backgroundColor: 'orange', color: 'white', marginLeft: '10px' }}>
            Book Now
          </Button>
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={() => setOpenMenu(true)}
        >
          <HiOutlineBars3 />
        </IconButton>
      </Toolbar>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'orange' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: 'orange' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;