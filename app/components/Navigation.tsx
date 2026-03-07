import { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import type { Section } from "../types";

interface Props {
  sections: Section[];
}

export default function Navigation({ sections }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" }); 
      setMobileOpen(false); 
    }
  };

  return (
    <AppBar position="fixed" className="app-bar">
      <Toolbar disableGutters className="nav-bar">
        
        {/* Site Title */}
        <Typography 
          variant="h6" 
          component="div" 
          className="site-name"
          onClick={() => scrollToSection("havana")}
        >
          Eldys Rodriguez's Home
        </Typography>

        {/* ----------------- DESKTOP NAVIGATION ----------------- */}
        <Box className="nav-menu-desktop">
          {sections.map((section) => (
            <Button 
              key={section.id} 
              onClick={() => scrollToSection(section.id)}
              className="nav-button"
            >
              {section.label}
            </Button>
          ))}
        </Box>

        {/* ----------------- MOBILE NAVIGATION ----------------- */}
        <IconButton
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className="mobile-menu-btn"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="mobile-drawer"
      >
        <Box className="mobile-drawer-header">
          <IconButton onClick={handleDrawerToggle} className="mobile-drawer-close-btn">
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        
        <List>
          {sections.map((section) => (
            <ListItem key={section.id} disablePadding>
              <ListItemButton 
                onClick={() => scrollToSection(section.id)} 
                className="mobile-nav-item"
              >
                <ListItemText 
                  primary={section.label} 
                  slotProps={{ primary: { className: "mobile-nav-text" } }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}