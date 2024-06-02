import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
// import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import Order from "../Order/Order";
import CombineHome from "../CombineHome";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);  
  const menuOptions = [
    {
      text: "HOME",
      icon: <HomeIcon />,
      link: "/",
      component: CombineHome,
    },
    {
      text: "About",
      icon: <InfoIcon />,
      link: "/about",
      component: About,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      link: "/testimonials",
      component: Testimonial,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/contact",
      component: Contact,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      link: "/cart",
      component: Order,
    },
  ];

  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: "white", color: "orange" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img src={Logo} className="logo-1" alt="Website Logo" style={{ height: '40px', marginRight: '20px' }} />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {menuOptions.map((item) => (
              <Button key={item.text} component={Link} to={item.link} sx={{ color: 'orange' }}>
                {item.text}
              </Button>
            ))}
            <IconButton href=".." sx={{ color: 'orange' }}>
              <BsCart2 className="navbar-cart-icon" />
            </IconButton>
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
                  <ListItemButton component={Link} to={item.link}>
                    <ListItemIcon sx={{ color: 'orange' }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} sx={{ color: 'orange' }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
      <Routes>
        {menuOptions.map((item) => (
          <Route key={item.text} path={item.link} element={<item.component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default Navbar;