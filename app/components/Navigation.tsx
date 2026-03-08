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
  ListItemText,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useLanguage } from "../context/LanguagesContext";
import type { Section, SupportedLanguage } from "../types";

interface Props {
  sections: Section[];
}

const availableLanguages: SupportedLanguage[] = ["en", "fr", "es"];

export default function Navigation({ sections }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

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
          Calle Habana 559
        </Typography>

        {/* ----------------- DESKTOP NAVIGATION ----------------- */}
        <Box className="nav-menu-desktop">
          {sections.map((section) => (
            <Button 
              key={section.id} 
              onClick={() => scrollToSection(section.id)}
              className="nav-button"
            >
              {section.label[language]}
            </Button>
          ))}
          
          <Divider orientation="vertical" variant="middle" flexItem className="nav-vertical-divider" />
          
          {/* Desktop Language Switcher */}
          <Box className="lang-switcher-container">
            {availableLanguages.map((lang, index) => (
              <Box key={lang} className="lang-item-container">
                <Typography
                  component="span"
                  onClick={() => setLanguage(lang)}
                  className={`lang-text ${language === lang ? "active" : ""}`}
                >
                  {lang}
                </Typography>
                
                {index < availableLanguages.length - 1 && (
                  <Typography className="lang-divider">|</Typography>
                )}
              </Box>
            ))}
          </Box>
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
          {/* Mobile Language Switcher */}
          <Box className="lang-switcher-container">
            {availableLanguages.map((lang, index) => (
              <Box key={lang} className="lang-item-container">
                <Typography
                  component="span"
                  onClick={() => setLanguage(lang)}
                  className={`lang-text ${language === lang ? "active" : ""}`}
                >
                  {lang}
                </Typography>
                {index < availableLanguages.length - 1 && (
                  <Typography className="lang-divider">|</Typography>
                )}
              </Box>
            ))}
          </Box>
          
          <IconButton onClick={handleDrawerToggle} className="mobile-drawer-close-btn">
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        
        <Divider />

        <List>
          {sections.map((section) => (
            <ListItem key={section.id} disablePadding>
              <ListItemButton 
                onClick={() => scrollToSection(section.id)} 
                className="mobile-nav-item"
              >
                <ListItemText 
                  primary={section.label[language]} 
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