import { Grid, Typography, Box, Divider, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { ContactInfo, Section } from "../types";
import { bookingInfo } from "~/data/mockData";
import { useLanguage } from "~/context/LanguagesContext";

interface Props {
  contact: ContactInfo;
  section: Section;

}

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function Booking({ contact, section }: Props) {
  const { language } = useLanguage();
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${contact.coordinates.googlePlaceId}&zoom=16`;
  return (
    <Box component="section" id={section.id} className="section-global">
      <Grid container className="booking-grid-container">
        
        <Grid size={{ xs: 12, md: 7 }} className="section-content-text">
          <Box className="global-info-wrapper">
            <Typography className="section-overline">{section.label[language]}</Typography>
            <Typography variant="h3" className="section-title">{bookingInfo.title[language]}</Typography>
          </Box>

          <Divider className="section-divider" />

          <Box className="room-details-wrapper">
            <Typography className="section-body">
              {bookingInfo.bookingDescription[language]}
            </Typography>

            <Box className="booking-contact-methods">
              <Link 
                href={`https://wa.me/${contact.phone.replace(/\s+/g, '')}`} 
                target="_blank" 
                className="contact-link" 
              >
                <WhatsAppIcon className="contact-icon" />
                <Typography className="contact-text-primary">{contact.phone}</Typography>
              </Link>

              <Link href={`mailto:${contact.email}`} className="contact-link">
                <EmailIcon className="contact-icon" />
                <Typography className="contact-text-primary">{bookingInfo.email[language]}</Typography>
              </Link>

              <Box className="contact-link">
                <LocationOnIcon className="contact-icon" />
                <Typography className="contact-text-secondary">
                  {contact.address}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }} className="map-container">
          <iframe
            title="Location Map"
            src={mapEmbedUrl}
            className="google-map-iframe"
            allowFullScreen
            loading="lazy"
          />
        </Grid>

      </Grid>
    </Box>
  );
}