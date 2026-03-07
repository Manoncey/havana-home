import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { Section } from "../types";

interface Props {
  section: Section;
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function SectionWrapper({ 
  section, 
  children, 
  backgroundColor 
}: Props) {
  const theme = useTheme(); 

  return (
    <Box 
      id={section.id} 
      component="section" 
      sx={{ 
        backgroundColor: backgroundColor || theme.palette.background.default,
        width: "100%" 
      }}
    >
      {children}
    </Box>
  );
}