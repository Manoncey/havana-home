import { Grid, Typography, Box, IconButton, Stack, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CheckIcon from "@mui/icons-material/Check";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// @ts-expect-error
import "swiper/css/bundle";

import type { Amenity, Room, Section } from "../types"; 
import { getAmenityIcon } from "~/utils";

interface Props {
  rooms: Room[];
  amenities: Amenity[];
  section: Section;
}

export default function MobileRoomsCarousel({ rooms, section, amenities }: Props) {
  return (
    <Box component="section" id={section.id} className="mobile-section-global">
      
      <Box className="mobile-global-info">
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
                <Grid size={{ xs: 12, sm: 6 }} key={amenity.id}>
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
        
        <Divider className="section-divider mobile-divider" />
      </Box>

      {/* Room carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30} 
        autoHeight={true}
        navigation={{
          nextEl: ".mobile-room-next",
          prevEl: ".mobile-room-prev",
        }}
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.roomNumber}>
            <Box className="mobile-slide-content">
              
              {/* Room header */}
              <Box className="mobile-room-header">
                <Typography variant="h4" component="h3" className="section-title">
                  {room.roomNumber} — {room.type}
                </Typography>
                <Typography variant="h6" className="room-price">
                  {room.price ? `${room.price}` : "Price upon request"}
                </Typography>
              </Box>

              {/* Room photos */}
              <Box className="mobile-photo-container">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true, el: ".photo-pagination" }}
                  loop={room.mobilePhotos.length > 1}
                  nested={true} 
                  className="swiper"
                >
                  {room.mobilePhotos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <Box
                        component="img"
                        src={photo} 
                        alt={`${room.roomNumber} - View ${index + 1}`}
                        className="mobile-section-image"
                      />
                    </SwiperSlide>
                  ))}
                  <Box className="photo-pagination-wrapper photo-pagination" />
                </Swiper>
              </Box>

              {/* Room description + arrows */}
              <Box className="mobile-room-footer">
                <Typography variant="body1" className="section-body">
                  {room.description}
                </Typography>

                <Box className="nav-arrows-container">
                  <IconButton className="room-nav-btn mobile-room-prev" aria-label="Previous Room">
                    <ArrowBackIosNewIcon fontSize="small" />
                  </IconButton>
                  <IconButton className="room-nav-btn mobile-room-next" aria-label="Next Room">
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}