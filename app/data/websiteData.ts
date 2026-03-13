import type { 
  Amenity, 
  CityInfo, 
  ContactInfo, 
  GalleryPhoto, 
  HostProfile, 
  Room, 
  Section, 
  SupportedLanguage 
} from "~/types"; // Adjust this import path if needed!

// --------------- UI STRUCTURE DATA ---------------

export const siteSectionsData: Section[] = [
  { 
    id: "havana", 
    icon: "LocationCity",
    label: { en: "La Havana", fr: "La Havane", es: "La Habana" },
    title: { en: "Discover the Heart of Cuba", fr: "Découvrez le Cœur de Cuba", es: "Descubra el Corazón de Cuba" }
  },
  { 
    id: "rooms", 
    icon: "Bed",
    label: { en: "Rooms & Amenities", fr: "Chambres & Équipements", es: "Habitaciones y Servicios" },
    title: { en: "Our Casa Particular", fr: "Notre Casa Particular", es: "Nuestra Casa Particular" }
  },
  { 
    id: "about", 
    icon: "People",
    label: { en: "About Us", fr: "À Propos", es: "Sobre Nosotros" },
    title: { en: "Meet Your Hosts", fr: "Rencontrez Vos Hôtes", es: "Conozca a Sus Anfitriones" }
  },
  { 
    id: "house", 
    icon: "House",
    label: { en: "Our House", fr: "Notre Maison", es: "Nuestra Casa" },
    title: { en: "Discover where you'll be staying", fr: "Découvrez où vous séjournerez", es: "Descubra dónde se alojará" }
  },
  { 
    id: "booking", 
    icon: "BookOnline",
    label: { en: "How to Book", fr: "Comment Réserver", es: "Cómo Reservar" },
    title: { en: "Plan Your Stay", fr: "Planifiez Votre Séjour", es: "Planifique su Estancia" }
  },
];

export const contactInfoData: ContactInfo = {
  phone: "+51996844257",
  email: "recordemos@gmail.com",
  address: "Calle Habana 559, entre Calle Teniente Rey y, Amargura, La Habana, Cuba",
  coordinates: {
    lat: 23.136327716881077,
    lng: -82.35267261349513,
    googlePlaceId: "ChIJCy6KE-t5zYgR_x8K3xGf0bE",
  }
};

// --------------- BUSINESS DATA ---------------

export const HavanaInfoData: CityInfo = {
  photos: ["/images/havana/street.jpg"],
  title: { 
    en: "Welcome to Havana", 
    fr: "Bienvenue à La Havane", 
    es: "Bienvenidos a La Habana" 
  },
  description: { 
    en: "Step into the honest, unfiltered beauty of Old Havana. Beyond the classic cars and vibrant streets, you'll find a neighborhood rich with history, beautifully aged architecture, and undeniable soul. Hosted by Eldys and Reidaldo, our historic casa offers a safe, grounded, and welcoming retreat, giving you easy walking access to the cobblestone plazas, local paladares, and the iconic Malecón.",
    fr: "Plongez dans la beauté authentique et sans filtre de la Vieille Havane. Au-delà des voitures classiques et de l'effervescence des rues, découvrez un quartier chargé d'histoire, à l'architecture patinée par le temps. Gérée par Eldys et Reidaldo, notre maison historique offre un refuge sûr et chaleureux, à quelques pas des places pavées, des paladares locaux et de l'emblématique Malecón.",
    es: "Adéntrese en la belleza auténtica y sin filtros de La Habana Vieja. Más allá de los autos clásicos y las calles vibrantes, encontrará un barrio lleno de historia, con una arquitectura bellamente envejecida y un alma innegable. Con la hospitalidad de Eldys y Reidaldo, nuestra casa colonial ofrece un refugio seguro y acogedor, a un corto paseo de las plazas adoquinadas, los paladares locales y el icónico Malecón."
  }
};

export const roomsData: Room[] = [
  {
    roomNumber: "Room 1",
    type: "Triple",
    capacity: 3,
    price: "$30 / night",
    mobilePhotos: ["/images/rooms/mobile-room1-a.jpg", "/images/rooms/mobile-room1-b.jpg"], 
    desktopPhotos: ["/images/rooms/desktop-room1-a.jpg", "/images/rooms/desktop-room1-b.jpg"],
    description: {
      en: "A spacious room with a double bed, a single bed and a private bathroom.",
      fr: "Une chambre spacieuse avec un lit double, un lit simple et une salle de bain privée.",
      es: "Una habitación espaciosa con una cama doble, una cama individual y baño privado."
    }
  },
  {
    roomNumber: "Room 2",
    type: "Double",
    capacity: 2,
    price: "$35 / night",
    mobilePhotos: ["/images/rooms/mobile-room2-a.jpeg", "/images/rooms/mobile-room2-b.jpeg"], 
    desktopPhotos: ["/images/rooms/desktop-room2-a.jpeg", "/images/rooms/desktop-room2-b.jpeg"], 
    description: {
      en: "A spacious room with a double bed and a private bathroom. Perfect for couples.",
      fr: "Une chambre spacieuse avec un lit double et une salle de bain privée. Idéale pour les couples.",
      es: "Una habitación espaciosa con cama doble y baño privado. Perfecta para parejas."
    }
  },
  {
    roomNumber: "Room 3",
    type: "Double",
    capacity: 2,
    price: "$35 / night",
    mobilePhotos: ["/images/rooms/mobile-room3-a.jpeg"], 
    desktopPhotos: ["/images/rooms/desktop-room3-a.jpeg"], 
    description: {
      en: "A spacious room with a double bed and a private en-suite bathroom. Perfect for couples.",
      fr: "Une chambre spacieuse avec un lit double et une salle de bain attenante. Idéale pour les couples.",
      es: "Una habitación espaciosa con cama doble y baño privado en suite. Perfecta para parejas."
    }
  },
  {
    roomNumber: "Room 4",
    type: "Double",
    capacity: 2,
    price: "$35 / night",
    mobilePhotos: ["/images/rooms/mobile-room4-a.jpeg", "/images/rooms/mobile-room4-b.jpeg"], 
    desktopPhotos: ["/images/rooms/desktop-room4-a.jpeg", "/images/rooms/desktop-room4-b.jpeg"], 
    description: {
      en: "A spacious room with a double bed and a private en-suite bathroom. Perfect for couples.",
      fr: "Une chambre spacieuse avec un lit double et une salle de bain attenante. Idéale pour les couples.",
      es: "Una habitación espaciosa con cama doble y baño privado en suite. Perfecta para parejas."
    }
  },
  {
    roomNumber: "Room 5",
    type: "Double",
    price: "$40 / night",
    capacity: 2,
    mobilePhotos: ["/images/rooms/mobile-room5-a.jpeg"], 
    desktopPhotos: ["/images/rooms/desktop-room5-a.jpeg"], 
    description: {
      en: "A cozy, quiet room ideal for travelers. Includes two comfortable twin beds, and a private bathroom.",
      fr: "Une chambre calme et confortable, idéale pour les voyageurs. Comprend deux lits simples et une salle de bain privée.",
      es: "Una habitación acogedora y tranquila ideal para viajeros. Incluye dos cómodas camas individuales y baño privado."
    }
  },
  {
    roomNumber: "Room 6",
    type: "Single",
    price: "$25 / night",
    capacity: 1,
    mobilePhotos: ["/images/rooms/mobile-room6-a.jpeg", "/images/rooms/mobile-room6-b.jpeg"], 
    desktopPhotos: ["/images/rooms/desktop-room6-a.jpeg", "/images/rooms/desktop-room6-b.jpeg"], 
    description: {
      en: "A cozy, quiet room ideal for solo travelers. Includes two comfortable twin beds, and a private bathroom.",
      fr: "Une chambre calme et confortable, idéale pour les voyageurs en solo. Comprend deux lits simples et une salle de bain privée.",
      es: "Una habitación acogedora y tranquila ideal para viajeros en solitario. Incluye dos cómodas camas individuales y baño privado."
    }
  }
];

export const amenitiesData: Amenity[] = [
  { 
    id: "a1", 
    isAvailable: true, 
    icon: "Breakfast",
    name: {
      en: "Breakfast (between $5 and $10 depending on sourcing)",
      fr: "Petit-déjeuner (entre 5$ et 10$ selon les arrivages)",
      es: "Desayuno (entre 5$ y 10$ dependiendo de los ingredientes)"
    }
  },
  { 
    id: "a2", 
    isAvailable: true, 
    icon: "Dinner",
    name: {
      en: "Dinner (prices may vary depending on sourcing)",
      fr: "Dîner (les prix peuvent varier selon les arrivages)",
      es: "Cena (los precios pueden variar dependiendo de los ingredientes)"
    }
  },
  { 
    id: "a3", 
    isAvailable: false, 
    icon: "HotWater",
    name: {
      en: "Hot Water 24/7",
      fr: "Eau chaude 24h/24",
      es: "Agua caliente 24/7"
    }
  },
  { 
    id: "a4", 
    isAvailable: true, 
    icon: "Taxi",
    name: {
      en: "Airport Taxi Arrangement",
      fr: "Réservation de taxi pour l'aéroport",
      es: "Gestión de taxi al aeropuerto"
    }
  },
  { 
    id: "a5", 
    isAvailable: false, 
    icon: "Fridge",
    name: {
      en: "Shared Kitchen",
      fr: "Cuisine commune",
      es: "Cocina compartida"
    }
  } 
];

export const hostInfosData: HostProfile = {
  names: "Eldys & Reidaldo",
  photo: "/images/hosts/couple.jpg",
  languages: ["Spanish"], 
  bio: {
    en: "Welcome to our home! We have been hosting guests in La Havana for over 17 years. This used to be the hostal of our son but we took over after his passing. We love sharing our culture, cooking authentic Cuban meals, and helping you navigate our beautiful city. We can help you book excursions to other parts of Cuba if you want (Vinales for example), or even just help you find the right people to do a tour of La Havana in a typical old-school car. Don't hesitate to reach out to us to know more, we look forward to hosting you!",
    fr: "Bienvenue chez nous ! Nous accueillons des voyageurs à La Havane depuis plus de 17 ans. C'était l'auberge de notre fils, mais nous avons pris le relais après son décès. Nous aimons partager notre culture, cuisiner des plats cubains authentiques et vous aider à découvrir notre belle ville. Nous pouvons vous aider à réserver des excursions dans d'autres régions de Cuba (Viñales par exemple), ou simplement vous trouver les bonnes personnes pour faire un tour de La Havane dans une voiture classique typique. N'hésitez pas à nous contacter pour en savoir plus, nous avons hâte de vous accueillir !",
    es: "¡Bienvenidos a nuestra casa! Llevamos más de 17 años recibiendo huéspedes en La Habana. Este solía ser el hostal de nuestro hijo, pero nos hicimos cargo tras su fallecimiento. Nos encanta compartir nuestra cultura, cocinar auténtica comida cubana y ayudarles a navegar por nuestra hermosa ciudad. Podemos ayudarles a reservar excursiones a otras partes de Cuba si lo desean (Viñales, por ejemplo), o simplemente ayudarles a encontrar a las personas adecuadas para hacer un recorrido por La Habana en un típico auto clásico. No duden en contactarnos para saber más, ¡esperamos recibirles pronto!"
  }
};

export const galleryPhotos = [
  "/images/home-gallery/home-from-outside.jpeg",
  "/images/home-gallery/lobby.jpeg",
  "/images/home-gallery/hallway.jpeg",
  "/images/home-gallery/first-floor.jpeg",
];

export const galleryData: GalleryPhoto[] = [
  {
    photoURL: "/images/home-gallery/home-from-outside.jpeg",
    alt: "Street view of a building's facade featuring dark brown wooden double doors, a window covered by ornate black metal security grilles, and decorative stained-glass style panels above the doors and windows depicting a tropical landscape.",
    legend: {
      en: "Our house, from the street",
      fr: "Notre maison, vue de la rue",
      es: "Nuestra casa, vista desde la calle",
    },
  },
  {
    photoURL: "/images/home-gallery/lobby.jpeg",
    alt: "An indoor lobby area with high arched ceilings and a curved staircase leading to an upper balcony. A green TripAdvisor Certificate of Excellence banner hangs from the balcony railing. The walls are decorated with framed certificates, artwork, and a hanging Swiss flag.",
    legend: {
      en: "The lobby where we'll first welcome you",
      fr: "Le hall d'entrée où nous vous accueillerons",
      es: "El lobby donde le daremos la bienvenida en primer lugar",
    },
  },
  {
    photoURL: "/images/home-gallery/hallway.jpeg",
    alt: "A long ground-floor hallway with hexagonal terracotta floor tiles. The left wall features a prominent 3D textured relief sculpture. Black metal patio chairs, small tables, and potted plants line the walkway, which leads toward a blue door and a small set of stairs at the back.",
    legend: {
      en: "The hallway to your room",
      fr: "Le couloir menant à votre chambre",
      es: "El pasillo que lleva a su habitación",
    },
  },
  {
    photoURL: "/images/home-gallery/first-floor.jpeg",
    alt: "A narrow upper-floor balcony hallway with terracotta floor tiles. On the right, an ornate black wrought-iron railing overlooks a lower courtyard area. Several external air conditioning units are mounted on the opposite wall across the open space.",
    legend: {
      en: "The first floor hallway, where some of the rooms are located",
      fr: "Le couloir du premier étage, où sont situées certaines des chambres",
      es: "El pasillo del primer piso, donde se encuentran algunas de las habitaciones",
    },
  },
]
// --------------- HELPER FUNCTIONS & TEXT ---------------

export const footerInfo = {
  en: "Manoncey. All rights reserved. Made with ♡︎ in Paris",
  fr: "Manoncey. Tous droits réservés. Fait avec ♡︎ à Paris",
  es: "Manoncey. Todos los derechos reservados. Hecho con ♡︎ en París"
};

export const bookingInfo = {
  title: {
    en: "How to Book",
    fr: "Comment Réserver",
    es: "Cómo Reservar"
  },
  bookingDescription: {
    en: "To book, reach out to us directly to confirm availability for your dates. Please include the type of room you wish to reserve and the number of guests in your request. We typically respond within two days.",
    fr: "Pour réserver, contactez-nous directement pour confirmer la disponibilité de vos dates. Veuillez préciser s'il vous plaît le type de chambre souhaité ainsi que le nombre de personnes dans votre demande. Nous répondons généralement sous deux jours.",
    es: "Para reservar, contáctenos directamente para confirmar la disponibilidad para sus fechas. Por favor, incluya el tipo de habitación que desea reservar y el número de personas en su solicitud. Normalmente respondemos en un plazo de dos días."
  },
  email: {
    en: "Contact via Email",
    fr: "Contacter par Email",
    es: "Contactar por Correo"
  }
};

// These helper functions now accept the selected language so they can return the dynamic string!
export const getRoomsDescription = (rooms: Room[], lang: SupportedLanguage) => {
  const doubleCount = rooms.filter((r) => r.type === "Double").length;
  const tripleCount = rooms.filter((r) => r.type === "Triple").length;
  const singleCount = rooms.filter((r) => r.type === "Single").length;

  const translations = {
    en: `We have ${rooms.length} rooms available, including ${doubleCount} double, ${tripleCount} triple and ${singleCount} single room. Additional available amenities are the following:`,
    fr: `Nous disposons de ${rooms.length} chambres, dont ${doubleCount} doubles, ${tripleCount} triples et ${singleCount} simple. Les équipements supplémentaires disponibles sont les suivants :`,
    es: `Tenemos ${rooms.length} habitaciones disponibles, incluyendo ${doubleCount} dobles, ${tripleCount} triples y ${singleCount} individual. Las comodidades adicionales disponibles son las siguientes:`
  };
  
  return translations[lang];
};

export const getLanguagesSpoken = (hostProfile: HostProfile, lang: SupportedLanguage) => {
  const translations = {
    en: `Languages spoken: ${hostProfile.languages.join(", ")}`,
    fr: `Langues parlées : ${hostProfile.languages.join(", ")}`,
    es: `Idiomas hablados: ${hostProfile.languages.join(", ")}`
  };
  
  return translations[lang];
};