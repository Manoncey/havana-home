import { Grid, Typography, Box, IconButton, Stack, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CheckIcon from "@mui/icons-material/Check"; // <--- NEW ICON IMPORT

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

// @ts-expect-error - TS doesn't natively understand CSS imports
import "swiper/css/bundle";

import type { Amenity, Room, Section } from "../types"; 
import { getAmenityIcon } from "~/utils";

interface Props {
  rooms: Room[];
  amenities: Amenity[];
  section: Section;
}

export default function DesktopRoomCarousel({ rooms, section, amenities }: Props) {
  return (
    <Box component="section" id={section.id} className="section-global">
      <Swiper
        modules={[Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={600}
        navigation={{
          nextEl: ".room-next",
          prevEl: ".room-prev",
        }}
        allowTouchMove={false} 
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.roomNumber}>
            <Grid container className="carousel-slide-grid">
              
              {/* ------------------- LEFT SIDE: CONTENT ------------------- */}
              <Grid size={{ xs: 12, md: 7 }} className="section-content-text">
                
                <Box className="global-info-wrapper">
                  <Typography className="section-overline">
                    {section.label}
                  </Typography>
                  <Typography className="global-description">
                    We have {rooms.length} rooms available, including {rooms.filter((r) => r.type === "Double" ).length} double and {rooms.filter((r) => r.type === "Single" ).length} single. All stays include:
                  </Typography>

                  <Grid container spacing={2}>
                    {amenities
                      .filter((amenity) => amenity.isAvailable)
                      .map((amenity) => {
                        const IconComponent = getAmenityIcon(amenity.icon);
                        return (
                          <Grid size={{ xs: 6 }} key={amenity.id}>
                            <Box className="amenity-item-wrapper">
                              <IconComponent className="amenity-icon" />
                              <Typography className="amenities-list">
                                {amenity.name}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                  </Grid>
                </Box>

                <Divider className="section-divider" />

                {/* 2. SPECIFIC ROOM DETAILS */}
                <Box className="room-details-wrapper">
                  <Typography variant="h3" component="h3" className="section-title">
                    {room.roomNumber} — {room.type}
                  </Typography>
                  <Typography variant="h6" className="room-price">
                    {room.price ? `${room.price}` : "Price upon request"}
                  </Typography>
                  <Typography variant="body1" className="section-body">
                    {room.description}
                  </Typography>
                </Box>

                {/* 3. NAVIGATION CONTROLS (Centered at bottom) */}
                <Box className="nav-arrows-container">
                  <IconButton className="room-nav-btn room-prev" aria-label="Previous Room">
                    <ArrowBackIosNewIcon fontSize="small" />
                  </IconButton>
                  <IconButton className="room-nav-btn room-next" aria-label="Next Room">
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>
                
              </Grid>

              {/* ------------------- RIGHT SIDE: PHOTO ------------------- */}
              <Grid size={{ xs: 12, md: 5 }} className="section-image-container">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true, el: ".photo-pagination" }}
                  loop={room.desktopPhotos.length > 1}
                  nested={true}
                  className="swiper"
                >
                  {room.desktopPhotos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <Box
                        component="img"
                        src={photo} 
                        alt={`${room.roomNumber} - View ${index + 1}`}
                        className="section-image"
                      />
                    </SwiperSlide>
                  ))}
                  
                  <Box className="photo-pagination-wrapper photo-pagination" />
                </Swiper>
              </Grid>

            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}