import type { AmenityIcon } from "./types";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import HotTubIcon from "@mui/icons-material/HotTub";
import KitchenIcon from "@mui/icons-material/Kitchen";
import TvIcon from "@mui/icons-material/Tv";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ICON_MAP: Record<AmenityIcon, React.ElementType> = {
  Wifi: WifiIcon,
  AcUnit: AcUnitIcon,
  Breakfast: FreeBreakfastIcon,
  Dinner: RestaurantIcon,
  Taxi: LocalTaxiIcon,
  HotWater: HotTubIcon,
  Fridge: KitchenIcon,
  Tv: TvIcon,
  Check: CheckCircleIcon,
};

export const getAmenityIcon = (iconName?: AmenityIcon): React.ElementType => {
  if (!iconName || !ICON_MAP[iconName]) {
    return ICON_MAP["Check"]; 
  }
  return ICON_MAP[iconName];
};