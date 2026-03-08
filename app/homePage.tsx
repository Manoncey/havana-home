import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import { siteSectionsMockData, HavanaInfoMockData, roomsMockData, amenitiesMockData, hostInfosMockData, contactInfoMockData } from "./data/mockData";
import SectionWrapper from "./components/SectionWrapper";
import Navigation from "./components/Navigation";
import HavanaIntro from "./components/HavanaIntro";
import { appTheme } from "./theme";
import RoomsCarousel from "./components/RoomCarouselMapping";
import AboutUs from "./components/AboutUs";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguagesContext";

export function HomePage() {
  return (
    <LanguageProvider>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Navigation sections={siteSectionsMockData} />
      <main>
        <Toolbar /> 
        {siteSectionsMockData.map((section, index) => {
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
                <HavanaIntro info={HavanaInfoMockData} section={section} />
              )}
              {/* Rooms Carousel Section */}
              {section.id === "rooms" && (
                <RoomsCarousel rooms={roomsMockData} amenities={amenitiesMockData} section={section} />
              )}

              {/* AboutUs Section */}
              {section.id === "about" && (
                <AboutUs host={hostInfosMockData} section={section}/>
              )}

              {/* AboutUs Section */}
              {section.id === "booking" && (
                <Booking contact={contactInfoMockData} section={section} />
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