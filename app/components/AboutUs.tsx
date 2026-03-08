import { Grid, Typography, Box, Divider } from "@mui/material";
import type { HostProfile, Section } from "../types";
import { getLanguagesSpoken } from "~/data/websiteData";
import { useLanguage } from "~/context/LanguagesContext";

interface Props {
  host: HostProfile;
  section: Section;
}

export default function AboutUs({ host, section }: Props) {
  const { language } = useLanguage();
  return (
    <Box component="section" id={section.id} className="section-global about-section-wrapper">
      <Grid container className="about-grid-container">

        {/* ------------------- left: photo ------------------- */}
        <Grid size={{ xs: 12, md: 5 }} className="about-image-column">
          <Box
            component="img"
            src={host.photo}
            alt={`Portrait of ${host.names}`}
            className="about-image"
          />
        </Grid>

        {/* ------------------- right: text ------------------- */}
        <Grid size={{ xs: 12, md: 7 }} className="section-content-text">
          <Box className="global-info-wrapper">
            <Typography className="section-overline">
              {section.title[language]}
            </Typography>
            <Typography variant="h3" component="h2" className="section-title">
              {host.names}
            </Typography>  
            <Typography className="global-description">
              {getLanguagesSpoken(host, language)}
            </Typography>
          </Box>
          <Divider className="section-divider" />
          <Typography variant="body1" className="section-body">
            {host.bio[language]}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}