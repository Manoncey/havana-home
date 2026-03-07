import { Grid, Typography, Box } from "@mui/material";
import type{ CityInfo, Section } from "../types";

interface Props {
  info: CityInfo;
  section: Section;
}

export default function HavanaIntro({ info, section }: Props) {
  return (
    <Grid container className="section-global" alignItems="center">
      
      <Grid 
        size={{ xs: 12, md: 7 }} 
         className="section-content-text"
      >
        <Typography variant="h3" component="h2" className="section-title">
          {section.label}
        </Typography>
        <Typography variant="h4" component="h3" gutterBottom className="section-subtitle">
          {info.title}
        </Typography>
        <Typography variant="body1" className="section-body">
          {info.description}
        </Typography>
      </Grid>

      {/* ------------------- RIGHT SIDE: PHOTO ------------------- */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Box 
          component="img"
          src={info.photos[0]}
          alt="Havana street - Photo by Mattia Albertin on Unsplash"
          className="section-image"
        />
      </Grid>

    </Grid>
  );
}