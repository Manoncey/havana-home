import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" className="site-footer">
      <Container maxWidth="lg">
        <Typography className="footer-text">
          © {currentYear} Manoncey. All rights reserved. Made with ❤️ in Paris
        </Typography>
      </Container>
    </Box>
  );
}