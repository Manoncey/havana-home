import { Box, Typography, Container } from "@mui/material";
import { useLanguage } from "~/context/LanguagesContext";
import { footerInfo } from "~/data/mockData";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  return (
    <Box component="footer" className="site-footer">
      <Container maxWidth="lg">
        <Typography className="footer-text">
          © {currentYear} {footerInfo[language]}
        </Typography>
      </Container>
    </Box>
  );
}