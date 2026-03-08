import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Box, AppBar, Toolbar, Typography, Button, Divider, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Grid, useTheme as useTheme$1, useMediaQuery, Link, Container, ThemeProvider, CssBaseline } from "@mui/material";
import { useTheme, createTheme } from "@mui/material/styles";
import { createContext, useState, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as Navigation$1, EffectFade, Pagination } from "swiper/modules";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import HotTubIcon from "@mui/icons-material/HotTub";
import KitchenIcon from "@mui/icons-material/Kitchen";
import TvIcon from "@mui/icons-material/Tv";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { LocationPin } from "@mui/icons-material";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const siteSectionsData = [
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
  }
];
const contactInfoData = {
  phone: "+33650388510",
  email: "venturamanon@gmail.com",
  address: "Calle Habana 559, entre Calle Teniente Rey y, Amargura, La Habana, Cuba",
  coordinates: {
    lat: 23.136327716881077,
    lng: -82.35267261349513,
    googlePlaceId: "ChIJCy6KE-t5zYgR_x8K3xGf0bE"
  }
};
const HavanaInfoData = {
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
const roomsData = [
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
const amenitiesData = [
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
const hostInfosData = {
  names: "Eldys & Reidaldo",
  photo: "/images/hosts/couple.jpg",
  languages: ["Spanish"],
  bio: {
    en: "Welcome to our home! We have been hosting guests in La Havana for over 17 years. This used to be the hostal of our son but we took over after his passing. We love sharing our culture, cooking authentic Cuban meals, and helping you navigate our beautiful city. We can help you book excursions to other parts of Cuba if you want (Vinales for example), or even just help you find the right people to do a tour of La Havana in a typical old-school car. Don't hesitate to reach out to us to know more, we look forward to hosting you!",
    fr: "Bienvenue chez nous ! Nous accueillons des voyageurs à La Havane depuis plus de 17 ans. C'était l'auberge de notre fils, mais nous avons pris le relais après son décès. Nous aimons partager notre culture, cuisiner des plats cubains authentiques et vous aider à découvrir notre belle ville. Nous pouvons vous aider à réserver des excursions dans d'autres régions de Cuba (Viñales par exemple), ou simplement vous trouver les bonnes personnes pour faire un tour de La Havane dans une voiture classique typique. N'hésitez pas à nous contacter pour en savoir plus, nous avons hâte de vous accueillir !",
    es: "¡Bienvenidos a nuestra casa! Llevamos más de 17 años recibiendo huéspedes en La Habana. Este solía ser el hostal de nuestro hijo, pero nos hicimos cargo tras su fallecimiento. Nos encanta compartir nuestra cultura, cocinar auténtica comida cubana y ayudarles a navegar por nuestra hermosa ciudad. Podemos ayudarles a reservar excursiones a otras partes de Cuba si lo desean (Viñales, por ejemplo), o simplemente ayudarles a encontrar a las personas adecuadas para hacer un recorrido por La Habana en un típico auto clásico. No duden en contactarnos para saber más, ¡esperamos recibirles pronto!"
  }
};
const galleryData = [
  {
    photoURL: "/images/home-gallery/home-from-outside.jpeg",
    alt: "Street view of a building's facade featuring dark brown wooden double doors, a window covered by ornate black metal security grilles, and decorative stained-glass style panels above the doors and windows depicting a tropical landscape.",
    legend: {
      en: "Our house, from the street",
      fr: "Notre maison, vue de la rue",
      es: "Nuestra casa, vista desde la calle"
    }
  },
  {
    photoURL: "/images/home-gallery/lobby.jpeg",
    alt: "An indoor lobby area with high arched ceilings and a curved staircase leading to an upper balcony. A green TripAdvisor Certificate of Excellence banner hangs from the balcony railing. The walls are decorated with framed certificates, artwork, and a hanging Swiss flag.",
    legend: {
      en: "The lobby where we'll first welcome you",
      fr: "Le hall d'entrée où nous vous accueillerons",
      es: "El lobby donde le daremos la bienvenida en primer lugar"
    }
  },
  {
    photoURL: "/images/home-gallery/hallway.jpeg",
    alt: "A long ground-floor hallway with hexagonal terracotta floor tiles. The left wall features a prominent 3D textured relief sculpture. Black metal patio chairs, small tables, and potted plants line the walkway, which leads toward a blue door and a small set of stairs at the back.",
    legend: {
      en: "The hallway to your room",
      fr: "Le couloir menant à votre chambre",
      es: "El pasillo que lleva a su habitación"
    }
  },
  {
    photoURL: "/images/home-gallery/first-floor.jpeg",
    alt: "A narrow upper-floor balcony hallway with terracotta floor tiles. On the right, an ornate black wrought-iron railing overlooks a lower courtyard area. Several external air conditioning units are mounted on the opposite wall across the open space.",
    legend: {
      en: "The first floor hallway, where some of the rooms are located",
      fr: "Le couloir du premier étage, où sont situées certaines des chambres",
      es: "El pasillo del primer piso, donde se encuentran algunas de las habitaciones"
    }
  }
];
const footerInfo = {
  en: "Manoncey. All rights reserved. Made with ♡︎ in Paris",
  fr: "Manoncey. Tous droits réservés. Fait avec ♡︎ à Paris",
  es: "Manoncey. Todos los derechos reservados. Hecho con ♡︎ en París"
};
const bookingInfo = {
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
const getRoomsDescription = (rooms, lang) => {
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
const getLanguagesSpoken = (hostProfile, lang) => {
  const translations = {
    en: `Languages spoken: ${hostProfile.languages.join(", ")}`,
    fr: `Langues parlées : ${hostProfile.languages.join(", ")}`,
    es: `Idiomas hablados: ${hostProfile.languages.join(", ")}`
  };
  return translations[lang];
};
function SectionWrapper({
  section,
  children,
  backgroundColor
}) {
  const theme = useTheme();
  return /* @__PURE__ */ jsx(
    Box,
    {
      id: section.id,
      component: "section",
      sx: {
        backgroundColor: backgroundColor || theme.palette.background.default,
        width: "100%"
      },
      children
    }
  );
}
const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {
  }
});
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { language, setLanguage }, children });
};
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
const availableLanguages = ["en", "fr", "es"];
function Navigation({ sections }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };
  return /* @__PURE__ */ jsxs(AppBar, { position: "fixed", className: "app-bar", children: [
    /* @__PURE__ */ jsxs(Toolbar, { disableGutters: true, className: "nav-bar", children: [
      /* @__PURE__ */ jsx(
        Typography,
        {
          variant: "h6",
          component: "div",
          className: "site-name",
          onClick: () => scrollToSection("havana"),
          children: "Calle Habana 559"
        }
      ),
      /* @__PURE__ */ jsxs(Box, { className: "nav-menu-desktop", children: [
        sections.map((section) => /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => scrollToSection(section.id),
            className: "nav-button",
            children: section.label[language]
          },
          section.id
        )),
        /* @__PURE__ */ jsx(Divider, { orientation: "vertical", variant: "middle", flexItem: true, className: "nav-vertical-divider" }),
        /* @__PURE__ */ jsx(Box, { className: "lang-switcher-container", children: availableLanguages.map((lang, index) => /* @__PURE__ */ jsxs(Box, { className: "lang-item-container", children: [
          /* @__PURE__ */ jsx(
            Typography,
            {
              component: "span",
              onClick: () => setLanguage(lang),
              className: `lang-text ${language === lang ? "active" : ""}`,
              children: lang
            }
          ),
          index < availableLanguages.length - 1 && /* @__PURE__ */ jsx(Typography, { className: "lang-divider", children: "|" })
        ] }, lang)) })
      ] }),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          "aria-label": "open drawer",
          edge: "end",
          onClick: handleDrawerToggle,
          className: "mobile-menu-btn",
          children: /* @__PURE__ */ jsx(MenuIcon, { fontSize: "large" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      Drawer,
      {
        anchor: "right",
        open: mobileOpen,
        onClose: handleDrawerToggle,
        className: "mobile-drawer",
        children: [
          /* @__PURE__ */ jsxs(Box, { className: "mobile-drawer-header", children: [
            /* @__PURE__ */ jsx(Box, { className: "lang-switcher-container", children: availableLanguages.map((lang, index) => /* @__PURE__ */ jsxs(Box, { className: "lang-item-container", children: [
              /* @__PURE__ */ jsx(
                Typography,
                {
                  component: "span",
                  onClick: () => setLanguage(lang),
                  className: `lang-text ${language === lang ? "active" : ""}`,
                  children: lang
                }
              ),
              index < availableLanguages.length - 1 && /* @__PURE__ */ jsx(Typography, { className: "lang-divider", children: "|" })
            ] }, lang)) }),
            /* @__PURE__ */ jsx(IconButton, { onClick: handleDrawerToggle, className: "mobile-drawer-close-btn", children: /* @__PURE__ */ jsx(CloseIcon, { fontSize: "large" }) })
          ] }),
          /* @__PURE__ */ jsx(Divider, {}),
          /* @__PURE__ */ jsx(List, { children: sections.map((section) => /* @__PURE__ */ jsx(ListItem, { disablePadding: true, children: /* @__PURE__ */ jsx(
            ListItemButton,
            {
              onClick: () => scrollToSection(section.id),
              className: "mobile-nav-item",
              children: /* @__PURE__ */ jsx(
                ListItemText,
                {
                  primary: section.label[language],
                  slotProps: { primary: { className: "mobile-nav-text" } }
                }
              )
            }
          ) }, section.id)) })
        ]
      }
    )
  ] });
}
function HavanaIntro({ info, section }) {
  const { language } = useLanguage();
  return /* @__PURE__ */ jsxs(Grid, { container: true, className: "section-global", alignItems: "center", children: [
    /* @__PURE__ */ jsxs(
      Grid,
      {
        size: { xs: 12, md: 7 },
        className: "section-content-text",
        children: [
          /* @__PURE__ */ jsx(Typography, { className: "section-overline", children: section.title[language] }),
          /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h2", className: "section-title", children: info.title[language] }),
          /* @__PURE__ */ jsx(Typography, { variant: "body1", className: "section-body", children: info.description[language] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Grid, { size: { xs: 12, md: 5 }, children: /* @__PURE__ */ jsx(
      Box,
      {
        component: "img",
        src: info.photos[0],
        alt: "Havana street - Photo by Mattia Albertin on Unsplash",
        className: "section-image"
      }
    ) })
  ] });
}
const palette = {
  primary: {
    main: "#6E7F6B"
  },
  secondary: {
    main: "#C98457"
  },
  background: {
    default: "#F5F3ED",
    paper: "#EAE7DD"
  },
  text: {
    primary: "#4A463F",
    secondary: "#7A766E"
  },
  divider: "#C0BEB8"
};
const typography = {
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  h3: {
    fontFamily: '"Merriweather", serif',
    fontWeight: 600,
    color: "#4A463F",
    fontSize: "2.5rem"
  },
  body1: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "inherit"
  }
};
const components = {
  // ---------------------------------- Typography ----------------------------------
  MuiTypography: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...ownerState.className?.includes("lang-text") && {
          cursor: "pointer",
          fontSize: "0.85rem",
          textTransform: "uppercase",
          transition: "all 0.2s ease",
          color: theme.palette.text.secondary,
          fontWeight: 400,
          "&:hover": {
            color: theme.palette.text.primary
          },
          "&.active": {
            color: theme.palette.secondary.main,
            fontWeight: 700
          }
        },
        ...ownerState.className?.includes("lang-divider") && {
          color: theme.palette.divider,
          fontSize: "0.8rem"
        },
        // ----------------- Branding & Nav --------------------
        ...ownerState.className?.includes("site-name") && {
          flexGrow: 1,
          fontWeight: "bold",
          cursor: "pointer",
          paddingLeft: "-40%",
          color: theme.palette.text.primary,
          "&:hover": { opacity: 0.8 }
        },
        ...ownerState.className?.includes("mobile-nav-text") && {
          fontSize: "1.2rem",
          fontWeight: 600,
          color: theme.palette.text.primary,
          letterSpacing: 1
        },
        // ----------------- Section Headers -------------------
        ...ownerState.className?.includes("section-overline") && {
          fontSize: "0.75rem",
          letterSpacing: 2,
          fontWeight: 600,
          textTransform: "uppercase",
          display: "block",
          marginBottom: theme.spacing(1),
          color: theme.palette.primary.main
        },
        ...ownerState.className?.includes("section-title") && {
          flexGrow: 1,
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: theme.spacing(1),
          color: theme.palette.secondary.main
        },
        ...ownerState.className?.includes("section-subtitle") && {
          flexGrow: 1,
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: theme.spacing(1),
          color: theme.palette.text.primary
        },
        // ----------------- Body & Details --------------------
        ...ownerState.className?.includes("global-description") && {
          fontSize: "0.875rem",
          lineHeight: 1.6,
          marginBottom: theme.spacing(3),
          color: theme.palette.text.secondary
        },
        ...ownerState.className?.includes("section-body") && {
          flexGrow: 1,
          fontSize: "1rem",
          lineHeight: 1.6,
          marginBottom: "5%",
          color: theme.palette.text.primary
        },
        ...ownerState.className?.includes("room-price") && {
          fontWeight: 400,
          color: theme.palette.text.secondary,
          marginBottom: theme.spacing(1)
        },
        ...ownerState.className?.includes("amenities-list") && {
          fontSize: "0.875rem",
          lineHeight: 1.5,
          color: theme.palette.text.secondary
        },
        ...ownerState.className?.includes("contact-text-primary") && {
          color: theme.palette.text.primary,
          fontWeight: 500
        },
        ...ownerState.className?.includes("contact-text-secondary") && {
          color: theme.palette.text.secondary,
          fontSize: "0.9rem"
        },
        ...ownerState.className?.includes("footer-text") && {
          fontSize: "0.9rem",
          color: theme.palette.text.secondary,
          textAlign: "center"
        },
        ...ownerState.className?.includes("footer-credit") && {
          fontSize: "0.8rem",
          color: theme.palette.text.secondary,
          textAlign: "center",
          marginTop: theme.spacing(1),
          fontStyle: "italic"
        }
      })
    }
  },
  // ---------------------------------- Links ----------------------------------
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none"
        }
      }
    }
  },
  // ---------------------------------- Grid & layout ----------------------------------
  MuiGrid: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...ownerState.className?.includes("gallery-grid") && {
          paddingTop: theme.spacing(12),
          paddingBottom: theme.spacing(4),
          paddingLeft: theme.spacing(8),
          paddingRight: theme.spacing(8)
        },
        ...ownerState.className?.includes("gallery-image-wrapper") && {
          width: "100%",
          position: "relative",
          display: "block",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          borderRadius: "4px",
          border: `1px solid`
        },
        ...ownerState.className?.includes("gallery-imagen") && {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          opacity: 0
        },
        // ----------------- Global Section Containers ---------
        ...ownerState.className?.includes("section-global") && {
          alignItems: "center",
          minHeight: "100dvh",
          scrollMarginTop: "80px"
        },
        ...ownerState.className?.includes("section-content-text") && {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: theme.spacing(12),
          paddingBottom: theme.spacing(4),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
          },
          [theme.breakpoints.up("md")]: {
            paddingLeft: theme.spacing(8),
            paddingRight: theme.spacing(8)
          }
        },
        // ----------------- Room Carousel Layout --------------
        ...ownerState.className?.includes("carousel-slide-grid") && {
          alignItems: "stretch",
          height: "100dvh"
        },
        ...ownerState.className?.includes("section-image-container") && {
          position: "relative",
          height: "50dvh",
          [theme.breakpoints.up("md")]: {
            height: "100dvh"
          }
        },
        // ----------------- About Us Layout -------------------
        ...ownerState.className?.includes("about-grid-container") && {
          width: "100%",
          minHeight: "100dvh",
          alignItems: "center",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: { flexDirection: "row" }
        },
        ...ownerState.className?.includes("about-image-column") && {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(4),
          [theme.breakpoints.up("md")]: { padding: theme.spacing(8) }
        },
        // ----------------- Booking Layout --------------------
        ...ownerState.className?.includes("booking-grid-container") && {
          width: "100%",
          minHeight: "80dvh",
          flexDirection: "column-reverse",
          [theme.breakpoints.up("md")]: { flexDirection: "row" }
        },
        ...ownerState.className?.includes("map-container") && {
          width: "100%",
          height: "45dvh",
          [theme.breakpoints.up("md")]: { height: "auto" }
        }
      })
    }
  },
  // ---------------------------------- Navigation (Header & Buttons) ----------------------------------
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`
      })
    }
  },
  MuiToolbar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: "transparent",
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4)
        },
        [theme.breakpoints.up("md")]: {
          paddingLeft: theme.spacing(8),
          paddingRight: theme.spacing(6)
        }
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        borderRadius: "4px",
        ...ownerState.className?.includes("nav-button") && {
          textTransform: "none",
          flexGrow: 1,
          cursor: "pointer",
          color: theme.palette.text.primary,
          "&:hover": { fontWeight: "bold", opacity: 0.8 }
        }
      })
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        borderRadius: "4px",
        ...ownerState.className?.includes("mobile-menu-btn") && {
          color: theme.palette.text.primary,
          display: "inline-flex",
          [theme.breakpoints.up("md")]: { display: "none" }
        }
      })
    }
  },
  MuiDivider: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        "&.nav-vertical-divider": {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          height: "24px",
          alignSelf: "center"
        },
        ...ownerState.className?.includes("section-divider") && {
          marginBottom: theme.spacing(4),
          width: "50px",
          borderColor: theme.palette.secondary.main,
          borderWidth: 2
        }
      })
    }
  },
  // ---------------------------------- CSS global ----------------------------------
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      // ----------------- Desktop Nav -----------------------
      ".nav-menu-desktop": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        [theme.breakpoints.up("md")]: { display: "flex" }
      },
      // ----------------- Mobile Drawer Classes -------------
      ".mobile-drawer": {
        display: "block",
        [theme.breakpoints.up("md")]: { display: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 250,
          backgroundColor: theme.palette.background.default,
          borderRight: `1px solid ${theme.palette.divider}`
        }
      },
      ".mobile-drawer-header": {
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: theme.spacing(3),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      },
      ".mobile-drawer-close-btn": {
        color: theme.palette.text.primary
      },
      ".lang-switcher-container": {
        display: "flex",
        gap: theme.spacing(1.5),
        alignItems: "center"
      },
      ".lang-item-container": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1.5)
      },
      ".mobile-nav-item": {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
      },
      // ----------------- Amenities List --------------------
      ".amenity-item-wrapper": {
        display: "flex",
        alignItems: "flex-start",
        gap: theme.spacing(1.5),
        marginBottom: theme.spacing(1)
      },
      ".amenity-icon": {
        fontSize: "1rem !important",
        color: theme.palette.primary.main,
        marginTop: "2px"
      },
      // ----------------- Swiper & Custom Nav ---------------
      ".swiper": { width: "100%", height: "100%" },
      ".room-nav-btn": {
        transition: "all 0.3s ease",
        border: 0,
        "& svg": {
          color: theme.palette.secondary.main,
          fontSize: "2rem"
        },
        "&:hover": {
          "& svg": {
            color: theme.palette.primary.main,
            transform: "scale(1.1)"
          }
        }
      },
      ".nav-arrows-container": {
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(3),
        paddingTop: theme.spacing(2)
      },
      ".room-nav-btn.swiper-button-disabled": {
        opacity: 0.3,
        pointerEvents: "none"
      },
      ".photo-pagination .swiper-pagination-bullet": {
        backgroundColor: theme.palette.divider,
        opacity: 0.5
      },
      ".photo-pagination .swiper-pagination-bullet-active": {
        backgroundColor: theme.palette.secondary.main,
        opacity: 1
      },
      // ----------------- Desktop Section Styles ------------
      ".section-image": {
        width: "100%",
        height: "50dvh",
        display: "block",
        objectFit: "cover",
        [theme.breakpoints.up("md")]: { height: "100dvh" }
      },
      ".global-info-wrapper": { marginBottom: theme.spacing(4) },
      ".global-house": {
        display: "flex",
        flexDirection: "column",
        paddingBottom: theme.spacing(2)
      },
      ".house-info-wrapper": {
        paddingTop: theme.spacing(18),
        paddingLeft: theme.spacing(8),
        alignSelf: "center"
      },
      ".room-details-wrapper": { marginBottom: theme.spacing(6) },
      ".photo-pagination-wrapper": {
        position: "absolute",
        bottom: "24px",
        width: "100%",
        textAlign: "center",
        zIndex: 10
      },
      // ----------------- Mobile Carousel Specific ----------
      ".mobile-section-global": {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(8),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        minHeight: "100dvh",
        scrollMarginTop: "80px"
      },
      ".mobile-global-info": { marginBottom: theme.spacing(4) },
      ".mobile-divider": {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
      },
      ".mobile-slide-content": { display: "flex", flexDirection: "column" },
      ".mobile-room-header": { marginBottom: theme.spacing(3) },
      ".mobile-photo-container": {
        position: "relative",
        width: "100%",
        height: "40vh",
        marginBottom: theme.spacing(4),
        borderRadius: "4px",
        border: `1px solid ${theme.palette.divider}`,
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
      },
      ".mobile-section-image": {
        width: "100%",
        height: "100%",
        objectFit: "cover !important",
        display: "block"
      },
      ".mobile-room-footer": {
        display: "flex",
        flexDirection: "column",
        paddingBottom: theme.spacing(2)
      },
      // ----------------- About Us Specific -----------------
      ".about-image": {
        width: "100%",
        maxWidth: "450px",
        height: "auto",
        aspectRatio: "4 / 5",
        objectFit: "cover",
        borderRadius: "4px",
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[2]
      },
      // ----------------- Map & Booking Styling -------------
      ".google-map-iframe": {
        width: "100%",
        height: "100%",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "4px",
        filter: "grayscale(0.2)",
        transition: "opacity 0.5s ease-in-out"
      },
      ".contact-link": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(2),
        cursor: "pointer",
        "&:hover": {
          opacity: 0.7
        }
      },
      ".contact-no-link": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(2)
      },
      ".contact-icon": {
        color: theme.palette.text.secondary
      },
      ".contact-method": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(2)
      },
      ".booking-step": {
        display: "flex",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(3)
      },
      ".step-number": {
        color: theme.palette.secondary.main,
        fontWeight: "bold",
        fontSize: "1.2rem"
      },
      ".site-footer": {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`
      }
    })
  }
};
const appTheme = createTheme({
  palette,
  typography,
  components
});
const ICON_MAP = {
  Wifi: WifiIcon,
  AcUnit: AcUnitIcon,
  Breakfast: FreeBreakfastIcon,
  Dinner: RestaurantIcon,
  Taxi: LocalTaxiIcon,
  HotWater: HotTubIcon,
  Fridge: KitchenIcon,
  Tv: TvIcon,
  Check: CheckCircleIcon
};
const getAmenityIcon = (iconName) => {
  if (!iconName || !ICON_MAP[iconName]) {
    return ICON_MAP["Check"];
  }
  return ICON_MAP[iconName];
};
function DesktopRoomCarousel({ rooms, section, amenities }) {
  const { language } = useLanguage();
  return /* @__PURE__ */ jsx(Box, { component: "section", id: section.id, className: "section-global", children: /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Navigation$1, EffectFade],
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 600,
      navigation: {
        nextEl: ".room-next",
        prevEl: ".room-prev"
      },
      allowTouchMove: false,
      children: rooms.map((room) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(Grid, { container: true, className: "carousel-slide-grid", children: [
        /* @__PURE__ */ jsxs(Grid, { size: { xs: 12, md: 7 }, className: "section-content-text", children: [
          /* @__PURE__ */ jsxs(Box, { className: "global-info-wrapper", children: [
            /* @__PURE__ */ jsx(Typography, { className: "section-overline", children: section.title[language] }),
            /* @__PURE__ */ jsx(Typography, { className: "global-description", children: getRoomsDescription(rooms, language) }),
            /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: amenities.filter((amenity) => amenity.isAvailable).map((amenity) => {
              const IconComponent = getAmenityIcon(amenity.icon);
              return /* @__PURE__ */ jsx(Grid, { size: { xs: 6 }, children: /* @__PURE__ */ jsxs(Box, { className: "amenity-item-wrapper", children: [
                /* @__PURE__ */ jsx(IconComponent, { className: "amenity-icon" }),
                /* @__PURE__ */ jsx(Typography, { className: "amenities-list", children: amenity.name[language] })
              ] }) }, amenity.id);
            }) })
          ] }),
          /* @__PURE__ */ jsx(Divider, { className: "section-divider" }),
          /* @__PURE__ */ jsxs(Box, { className: "room-details-wrapper", children: [
            /* @__PURE__ */ jsxs(Typography, { variant: "h3", component: "h3", className: "section-title", children: [
              room.roomNumber,
              " — ",
              room.type
            ] }),
            /* @__PURE__ */ jsx(Typography, { variant: "h6", className: "room-price", children: room.price ? `${room.price}` : "Price upon request" }),
            /* @__PURE__ */ jsx(Typography, { variant: "body1", className: "section-body", children: room.description[language] })
          ] }),
          /* @__PURE__ */ jsxs(Box, { className: "nav-arrows-container", children: [
            /* @__PURE__ */ jsx(IconButton, { className: "room-nav-btn room-prev", "aria-label": "Previous Room", children: /* @__PURE__ */ jsx(ArrowBackIosNewIcon, { fontSize: "small" }) }),
            /* @__PURE__ */ jsx(IconButton, { className: "room-nav-btn room-next", "aria-label": "Next Room", children: /* @__PURE__ */ jsx(ArrowForwardIosIcon, { fontSize: "small" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, md: 5 }, className: "section-image-container", children: /* @__PURE__ */ jsxs(
          Swiper,
          {
            modules: [Pagination],
            pagination: { clickable: true, el: ".photo-pagination" },
            loop: room.desktopPhotos.length > 1,
            nested: true,
            className: "swiper",
            children: [
              room.desktopPhotos.map((photo, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
                Box,
                {
                  component: "img",
                  src: photo,
                  alt: `${room.roomNumber} - View ${index + 1}`,
                  className: "section-image"
                }
              ) }, index)),
              /* @__PURE__ */ jsx(Box, { className: "photo-pagination-wrapper photo-pagination" })
            ]
          }
        ) })
      ] }) }, room.roomNumber))
    }
  ) });
}
function MobileRoomsCarousel({ rooms, section, amenities }) {
  const { language } = useLanguage();
  return /* @__PURE__ */ jsxs(Box, { component: "section", id: section.id, className: "mobile-section-global", children: [
    /* @__PURE__ */ jsxs(Box, { className: "mobile-global-info", children: [
      /* @__PURE__ */ jsx(Typography, { className: "section-overline", children: section.title[language] }),
      /* @__PURE__ */ jsx(Typography, { className: "global-description", children: getRoomsDescription(rooms, language) }),
      /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: amenities.filter((amenity) => amenity.isAvailable).map((amenity) => {
        const IconComponent = getAmenityIcon(amenity.icon);
        return /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsxs(Box, { className: "amenity-item-wrapper", children: [
          /* @__PURE__ */ jsx(IconComponent, { className: "amenity-icon" }),
          /* @__PURE__ */ jsx(Typography, { className: "amenities-list", children: amenity.name[language] })
        ] }) }, amenity.id);
      }) }),
      /* @__PURE__ */ jsx(Divider, { className: "section-divider mobile-divider" })
    ] }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation$1],
        spaceBetween: 30,
        autoHeight: true,
        navigation: {
          nextEl: ".mobile-room-next",
          prevEl: ".mobile-room-prev"
        },
        children: rooms.map((room) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(Box, { className: "mobile-slide-content", children: [
          /* @__PURE__ */ jsxs(Box, { className: "mobile-room-header", children: [
            /* @__PURE__ */ jsxs(Typography, { variant: "h4", component: "h3", className: "section-title", children: [
              room.roomNumber,
              " — ",
              room.type
            ] }),
            /* @__PURE__ */ jsx(Typography, { variant: "h6", className: "room-price", children: room.price ? `${room.price}` : "Price upon request" })
          ] }),
          /* @__PURE__ */ jsx(Box, { className: "mobile-photo-container", children: /* @__PURE__ */ jsxs(
            Swiper,
            {
              modules: [Pagination],
              pagination: { clickable: true, el: ".photo-pagination" },
              loop: room.mobilePhotos.length > 1,
              nested: true,
              className: "swiper",
              children: [
                room.mobilePhotos.map((photo, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
                  Box,
                  {
                    component: "img",
                    src: photo,
                    alt: `${room.roomNumber} - View ${index + 1}`,
                    className: "mobile-section-image"
                  }
                ) }, index)),
                /* @__PURE__ */ jsx(Box, { className: "photo-pagination-wrapper photo-pagination" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs(Box, { className: "mobile-room-footer", children: [
            /* @__PURE__ */ jsx(Typography, { variant: "body1", className: "section-body", children: room.description[language] }),
            /* @__PURE__ */ jsxs(Box, { className: "nav-arrows-container", children: [
              /* @__PURE__ */ jsx(IconButton, { className: "room-nav-btn mobile-room-prev", "aria-label": "Previous Room", children: /* @__PURE__ */ jsx(ArrowBackIosNewIcon, { fontSize: "small" }) }),
              /* @__PURE__ */ jsx(IconButton, { className: "room-nav-btn mobile-room-next", "aria-label": "Next Room", children: /* @__PURE__ */ jsx(ArrowForwardIosIcon, { fontSize: "small" }) })
            ] })
          ] })
        ] }) }, room.roomNumber))
      }
    )
  ] });
}
function RoomsCarousel(props) {
  const theme = useTheme$1();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (isMobile) {
    return /* @__PURE__ */ jsx(MobileRoomsCarousel, { ...props });
  }
  return /* @__PURE__ */ jsx(DesktopRoomCarousel, { ...props });
}
function AboutUs({ host, section }) {
  const { language } = useLanguage();
  return /* @__PURE__ */ jsx(Box, { component: "section", id: section.id, className: "section-global about-section-wrapper", children: /* @__PURE__ */ jsxs(Grid, { container: true, className: "about-grid-container", children: [
    /* @__PURE__ */ jsx(Grid, { size: { xs: 12, md: 5 }, className: "about-image-column", children: /* @__PURE__ */ jsx(
      Box,
      {
        component: "img",
        src: host.photo,
        alt: `Portrait of ${host.names}`,
        className: "about-image"
      }
    ) }),
    /* @__PURE__ */ jsxs(Grid, { size: { xs: 12, md: 7 }, className: "section-content-text", children: [
      /* @__PURE__ */ jsxs(Box, { className: "global-info-wrapper", children: [
        /* @__PURE__ */ jsx(Typography, { className: "section-overline", children: section.title[language] }),
        /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h2", className: "section-title", children: host.names }),
        /* @__PURE__ */ jsx(Typography, { className: "global-description", children: getLanguagesSpoken(host, language) })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "section-divider" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body1", className: "section-body", children: host.bio[language] })
    ] })
  ] }) });
}
const API_KEY = "AIzaSyA5XNTVklQWDchwZCybN9XdjmKLtnR51Kc";
function Booking({ contact, section }) {
  const { language } = useLanguage();
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${contact.coordinates.googlePlaceId}&zoom=16`;
  return /* @__PURE__ */ jsx(Box, { component: "section", id: section.id, className: "section-global", children: /* @__PURE__ */ jsxs(Grid, { container: true, className: "booking-grid-container", children: [
    /* @__PURE__ */ jsxs(Grid, { size: { xs: 12, md: 7 }, className: "section-content-text", children: [
      /* @__PURE__ */ jsxs(Box, { className: "global-info-wrapper", children: [
        /* @__PURE__ */ jsx(Typography, { className: "section-overline", children: section.title[language] }),
        /* @__PURE__ */ jsx(Typography, { variant: "h3", className: "section-title", children: bookingInfo.title[language] })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "section-divider" }),
      /* @__PURE__ */ jsxs(Box, { className: "room-details-wrapper", children: [
        /* @__PURE__ */ jsx(Typography, { className: "section-body", children: bookingInfo.bookingDescription[language] }),
        /* @__PURE__ */ jsxs(Box, { className: "booking-contact-methods", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: `https://wa.me/${contact.phone.replace(/\s+/g, "")}`,
              target: "_blank",
              className: "contact-link",
              children: [
                /* @__PURE__ */ jsx(WhatsAppIcon, { className: "contact-icon" }),
                /* @__PURE__ */ jsx(Typography, { className: "contact-text-primary", children: contact.phone })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(Link, { href: `mailto:${contact.email}`, className: "contact-link", children: [
            /* @__PURE__ */ jsx(EmailIcon, { className: "contact-icon" }),
            /* @__PURE__ */ jsx(Typography, { className: "contact-text-primary", children: bookingInfo.email[language] })
          ] }),
          /* @__PURE__ */ jsxs(Box, { className: "contact-no-link", children: [
            /* @__PURE__ */ jsx(LocationPin, { className: "contact-icon" }),
            /* @__PURE__ */ jsx(Typography, { className: "contact-text-secondary", children: contact.address })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Grid, { size: { xs: 12, md: 5 }, className: "map-container", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        title: "Location Map",
        src: mapEmbedUrl,
        className: "google-map-iframe",
        allowFullScreen: true,
        loading: "lazy"
      }
    ) })
  ] }) });
}
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const { language } = useLanguage();
  return /* @__PURE__ */ jsx(Box, { component: "footer", className: "site-footer", children: /* @__PURE__ */ jsx(Container, { maxWidth: "lg", children: /* @__PURE__ */ jsxs(Typography, { className: "footer-text", children: [
    "© ",
    currentYear,
    " ",
    footerInfo[language]
  ] }) }) });
}
function Gallery({ galleryPhotos, section }) {
  const { language } = useLanguage();
  return /* @__PURE__ */ jsxs(Box, { component: "section", className: "section-global", children: [
    /* @__PURE__ */ jsxs(Box, { className: "house-info-wrapper", children: [
      /* @__PURE__ */ jsx(Typography, { className: "section-overline", children: section.title[language] }),
      /* @__PURE__ */ jsx(Typography, { variant: "h3", className: "section-title", children: "Nuevo Hostal Calle Habana 559" })
    ] }),
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: { xs: 2, md: 3 }, className: "gallery-grid", children: galleryPhotos.map((photo, index) => /* @__PURE__ */ jsxs(Grid, { size: { xs: 6, md: 3 }, children: [
      /* @__PURE__ */ jsx(Box, { className: "gallery-image-wrapper", children: /* @__PURE__ */ jsx(
        Box,
        {
          component: "img",
          src: photo.photoURL,
          alt: photo.alt,
          className: "gallery-imagen"
        }
      ) }),
      /* @__PURE__ */ jsx(Typography, { className: "global-description", children: photo.legend[language] })
    ] }, index)) })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsxs(ThemeProvider, { theme: appTheme, children: [
    /* @__PURE__ */ jsx(CssBaseline, {}),
    /* @__PURE__ */ jsx(Navigation, { sections: siteSectionsData }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Toolbar, {}),
      siteSectionsData.map((section, index) => {
        const dynamicBg = index % 2 === 0 ? appTheme.palette.background.default : appTheme.palette.background.paper;
        return /* @__PURE__ */ jsxs(
          SectionWrapper,
          {
            section,
            backgroundColor: dynamicBg,
            children: [
              section.id === "havana" && /* @__PURE__ */ jsx(HavanaIntro, { info: HavanaInfoData, section }),
              section.id === "rooms" && /* @__PURE__ */ jsx(RoomsCarousel, { rooms: roomsData, amenities: amenitiesData, section }),
              section.id === "house" && /* @__PURE__ */ jsx(Gallery, { galleryPhotos: galleryData, section }),
              section.id === "about" && /* @__PURE__ */ jsx(AboutUs, { host: hostInfosData, section }),
              section.id === "booking" && /* @__PURE__ */ jsx(Booking, { contact: contactInfoData, section })
            ]
          },
          section.id
        );
      })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
function meta({}) {
  return [{
    title: "Hostal in La Havana - Calle Habana 559"
  }, {
    name: "description",
    content: "Book your room at La Havana"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(HomePage, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Dymhuyb3.js", "imports": ["/assets/chunk-EPOLDU6W-DWToDBS1.js", "/assets/index-B6ThtZG-.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BxhVN-pV.js", "imports": ["/assets/chunk-EPOLDU6W-DWToDBS1.js", "/assets/index-B6ThtZG-.js"], "css": ["/assets/root-D35oY5Xd.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-B-DtitMz.js", "imports": ["/assets/chunk-EPOLDU6W-DWToDBS1.js", "/assets/index-B6ThtZG-.js"], "css": ["/assets/home-Cnw9ticf.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-fccd6986.js", "version": "fccd6986", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "unstable_trailingSlashAwareDataRequests": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
