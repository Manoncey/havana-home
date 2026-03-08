// --------------- WEBSITE RELATED ---------------

export type SectionName = "havana" | "rooms" | "about" | "booking";

export interface Section {
  id: SectionName;      // <section id="havana">
  label: string;      // What appears in the Menu 
  title: string;      // in the component
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  coordinates: { // for the map
    lat: number;
    lng: number;
    googlePlaceId?: string;
  };
}

export interface CityInfo {
  title: string;
  description: string;
  photos: string[];
  coordinates?: { // for the map
    lat: number;
    lng: number;
  };
}

// --------------- DATA RELATED ---------------

type RoomType = "Single" | "Twin" | "Double" | "Triple";

export interface Room {
  roomNumber: string,
  type: RoomType,
  capacity: number,
  mobilePhotos: string[],
  desktopPhotos: string[],
  description: string,
  price?: string,
};

export interface Amenity {
  id: string;
  name: string;
  icon?: AmenityIcon;
  isAvailable: boolean; 
}
export type AmenityIcon = 
  | "Wifi" 
  | "AcUnit" 
  | "Breakfast" 
  | "Dinner"
  | "Taxi" 
  | "HotWater" 
  | "Fridge" 
  | "Tv" 
  | "Check";

export interface HostProfile {
  names: string;
  bio: string;
  photo: string;
  languages: string[];
}