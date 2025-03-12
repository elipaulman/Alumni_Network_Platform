import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../images/Logo.png";
import StockPfp from "../images/stockpfp.png";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email") || "";

  // Define pages with their paths
  const pages = [
    { name: "Main", path: "/" },
    { name: "About", path: "/about" },
    { name: "Directory", path: "/directory" },
    { name: "Events", path: "/events" },
    { name: "Feed", path: "/feed" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "Resources", path: "/resources" },
  ];

  const authPages = [
    { name: "Signup", path: "/signup" },
    { name: "Login", path: "/login" },
  ];

  const settings = [{ name: "Profile", path: "/profile" }];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Helper function to append email parameter if present
  const getPathWithEmail = (path) => {
    return email ? `${path}?email=${email}` : path;
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#00BDF2" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - desktop */}
          <Link to={getPathWithEmail("/")} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <img
                src={Logo}
                alt="Logo"
                style={{
                  height: "40px",
                  width: "auto",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Box>
          </Link>

          {/* Mobile navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Mobile menu items */}
              {[...pages, ...authPages].map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                  component={Link}
                  to={getPathWithEmail(page.path)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - mobile */}
          <Link
            to={getPathWithEmail("/")}
            style={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
              textDecoration: "none",
            }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  height: "40px",
                  width: "auto",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Box>
          </Link>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={getPathWithEmail(page.path)}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Auth buttons - desktop */}
          <Box sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
            {authPages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={getPathWithEmail(page.path)}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* User menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Profile" src={StockPfp} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem 
                key={setting.name} 
                onClick={() => {
                  handleCloseUserMenu();
                }}
                component={Link}
                to={getPathWithEmail(setting.path)}
              >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
