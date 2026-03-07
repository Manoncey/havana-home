import { Grid, Typography, Box, Divider, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { ContactInfo, Section } from "../types";

interface Props {
  contact: ContactInfo;
  section: Section;
}

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function Booking({ contact, section }: Props) {
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${contact.coordinates.lat},${contact.coordinates.lng}&zoom=16`;
  const fallbackMapUrl = `https://maps.google.com/maps?q=${contact.coordinates.lat},${contact.coordinates.lng}&z=16&output=embed`;

  return (
    <Box component="section" id={section.id} className="section-global">
      <Grid container className="booking-grid-container">
        
        <Grid size={{ xs: 12, md: 7 }} className="section-content-text">
          <Box className="global-info-wrapper">
            <Typography className="section-overline">{section.label}</Typography>
            <Typography variant="h3" className="section-title">How to Book</Typography>
          </Box>

          <Divider className="section-divider" />

          <Box className="room-details-wrapper">
            <Typography className="section-body">
              Booking is simple. Reach out to us directly to confirm availability for your dates. 
              We typically respond within an hour.
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

              <Link href="mailto:eldys@example.com" className="contact-link">
                <EmailIcon className="contact-icon" />
                <Typography className="contact-text-primary">Contact via Email</Typography>
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
            src={fallbackMapUrl}
            className="google-map-iframe"
            allowFullScreen
            loading="lazy"
          />
        </Grid>

      </Grid>
    </Box>
  );
}