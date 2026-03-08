import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import { siteSectionsData, HavanaInfoData, roomsData, amenitiesData, hostInfosData, contactInfoData, galleryData } from "./data/websiteData";
import SectionWrapper from "./components/SectionWrapper";
import Navigation from "./components/Navigation";
import HavanaIntro from "./components/HavanaIntro";
import { appTheme } from "./theme";
import RoomsCarousel from "./components/RoomCarouselMapping";
import AboutUs from "./components/AboutUs";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguagesContext";
import Gallery from "./components/HomeGallery";

export function HomePage() {
  return (
    <LanguageProvider>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Navigation sections={siteSectionsData} />
      <main>
        <Toolbar /> 
        {siteSectionsData.map((section, index) => {
          const dynamicBg = index % 2 === 0 
            ? appTheme.palette.background.default 
            : appTheme.palette.background.paper;

          return (
            <SectionWrapper 
              key={section.id} 
              section={section}
              backgroundColor={dynamicBg} 
            >
              {/* Havana Intro Section */}
              {section.id === "havana" && (
                <HavanaIntro info={HavanaInfoData} section={section} />
              )}
              {/* Rooms Carousel Section */}
              {section.id === "rooms" && (
                <RoomsCarousel rooms={roomsData} amenities={amenitiesData} section={section} />
              )}

              {/* Our house Section */}
              {section.id === "house" && (
                <Gallery galleryPhotos={galleryData} section={section}/>
              )}
  
              {/* AboutUs Section */}
              {section.id === "about" && (
                <AboutUs host={hostInfosData} section={section}/>
              )}

              {/* AboutUs Section */}
              {section.id === "booking" && (
                <Booking contact={contactInfoData} section={section} />
              )}
            </SectionWrapper>
          );
        })}
      </main>
      <Footer />
    </ThemeProvider>
    </LanguageProvider>
  );
}