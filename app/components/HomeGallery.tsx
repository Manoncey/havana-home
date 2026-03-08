import { Box, Grid, Typography } from "@mui/material";
import { useLanguage } from "~/context/LanguagesContext";
import type { GalleryPhoto, Section } from "~/types";

interface Props {
  galleryPhotos: GalleryPhoto[];
  section: Section;
}

export default function Gallery({ galleryPhotos, section }: Props) {
    const { language } = useLanguage();
  
  return (
    <Box component="section" className="section-global">
      <Box className="house-info-wrapper">
        <Typography className="section-overline">{section.title[language]}</Typography>
        <Typography variant="h3" className="section-title">Nuevo Hostal Calle Habana 559</Typography>
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }} className="gallery-grid">
        {galleryPhotos.map((photo, index) => (
          <Grid key={index} size={{ xs: 6, md: 3 }}>
            <Box className="gallery-image-wrapper">
              <Box
                component="img"
                src={photo.photoURL}
                alt={photo.alt}
                className="gallery-imagen"
              />
            </Box>
            <Typography className="global-description">
              {photo.legend[language]}
            </Typography>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}