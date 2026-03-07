import type { Amenity, CityInfo, ContactInfo, HostProfile, Room, Section } from "~/types";


export const siteSectionsMockData: Section[] = [
  { id: "havana", label: "La Havana", title: "Discover the Heart of Cuba", icon: "LocationCity" },
  { id: "rooms", label: "Rooms & Amenities", title: "Our Casa Particular", icon: "Bed" },
  { id: "about", label: "About Us", title: "Meet Your Hosts", icon: "People" },
  { id: "booking", label: "How to Book", title: "Plan Your Stay", icon: "BookOnline" },
];

export const contactInfoMockData: ContactInfo = {
  phone: "+33650388510",
  address: "Calle Habana 559, entre Calle Teniente Rey y, Amargura, La Habana, Cuba",
  coordinates: {
    lat: 23.136327716881077,
    lng: -82.35267261349513
  }
};

// --------------- BUSINESS DATA ---------------

export const HavanaInfoMockData: CityInfo = {
  title: "Welcome to Havana",
  description: "Experience the vibrant energy, classic cars, and rich history of Cuba. Our casa is perfectly located in the Vedado neighborhood, giving you walking access to the Malecón and local paladares.Experience the vibrant energy, classic cars, and rich history of Cuba. Our casa is perfectly located in the Vedado neighborhood, giving you walking access to the Malecón and local paladares.",
  photos: ["/images/havana/street.jpg"]
};

export const roomsMockData: Room[] = [
  {
    roomNumber: "Room 1",
    type: "Double",
    capacity: 3,
    price: "$35 / night",
    description: "A spacious room with a double bed, air conditioning, and a private en-suite bathroom. Perfect for couples.",
    mobilePhotos: ["/images/rooms/mobile-room1-a.jpg", "/images/rooms/mobile-room1-b.jpg"], 
    desktopPhotos: ["/images/rooms/desktop-room1-a.jpg", "/images/rooms/desktop-room1-b.jpg"], 
  },
  {
    roomNumber: "Room 2",
    type: "Double",
    capacity: 3,
    price: "$35 / night",
    description: "Features a beautiful balcony view of the Havana streets, a comfortable double bed, and plenty of natural light.",
    mobilePhotos: ["/images/rooms/mobile-room1-a.jpg", "/images/rooms/mobile-room1-b.jpg"], 
    desktopPhotos: ["/images/rooms/desktop-room1-a.jpg", "/images/rooms/desktop-room1-b.jpg"], 
  },
  {
    roomNumber: "Room 3",
    type: "Single",
    price: "$25 / night",
    capacity: 3,
    description: "A cozy, quiet room ideal for solo travelers. Includes a fan, a comfortable twin bed, and a private bathroom.",
    mobilePhotos: ["/images/rooms/mobile-room1-a.jpg", "/images/rooms/mobile-room1-b.jpg"], 
    desktopPhotos: ["/images/rooms/desktop-room1-a.jpg", "/images/rooms/desktop-room1-b.jpg"], 
  }
];

export const amenitiesMockData: Amenity[] = [
  { id: "a1", name: "Fresh Tropical Breakfast ($5/day)", isAvailable: true, icon: "Breakfast" },
  { id: "a2", name: "Air Conditioning (Split)", isAvailable: true, icon: "AcUnit" },
  { id: "a3", name: "Hot Water 24/7", isAvailable: true, icon: "HotWater" },
  { id: "a4", name: "Airport Taxi Arrangement", isAvailable: true, icon: "Taxi" },
  { id: "a5", name: "Shared Kitchen", isAvailable: false, icon: "Fridge" } 
];

export const hostInfosMockData: HostProfile = {
  names: "Maria & Jose",
  bio: "Welcome to our home! We have been hosting guests in La Havana for over a decade. We love sharing our culture, cooking authentic Cuban meals, and helping you navigate our beautiful city.",
  photo: "/images/hosts/couple.jpg",
  languages: ["Spanish", "English"]
};