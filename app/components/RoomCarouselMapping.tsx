import { useTheme, useMediaQuery } from "@mui/material";
import DesktopRoomsCarousel from "./DesktopRoomsCarousel";
import MobileRoomsCarousel from "./MobileRoomsCarousel";
import type { Amenity, Room, Section } from "../types";

interface Props {
  rooms: Room[];
  amenities: Amenity[];
  section: Section;
}

export default function RoomsCarousel(props: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (isMobile) {
    return <MobileRoomsCarousel {...props} />;
  }
  return <DesktopRoomsCarousel {...props} />;
}