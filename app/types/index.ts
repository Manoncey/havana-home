// --------------- TRANSLATION RELATED ---------------

export type SupportedLanguage = "en" | "fr" | "es";

export interface LocalizedString {
  en: string;
  fr: string;
  es: string;
}

// --------------- WEBSITE RELATED ---------------

export type SectionName = "havana" | "rooms" | "about" | "house" | "booking";

export interface Section {
  id: SectionName;      // <section id="havana">
  label: LocalizedString; // What appears in the Menu 
  title: LocalizedString; // in the component
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
  title: LocalizedString;
  description: LocalizedString;
  photos: string[];
  coordinates?: { // for the map
    lat: number;
    lng: number;
  };
}

// --------------- DATA RELATED ---------------

type RoomType = "Single" | "Twin" | "Double" | "Triple";

export interface Room {
  roomNumber: string;
  type: RoomType;
  capacity: number;
  mobilePhotos: string[];
  desktopPhotos: string[];
  description: LocalizedString; 
  price?: string;
};

export interface Amenity {
  id: string;
  name: LocalizedString; 
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
  bio: LocalizedString; 
  photo: string;
  languages: string[];
}

export interface GalleryPhoto {
  photoURL: string;
  alt: string;
  legend: LocalizedString;
}