import type { Components, CssVarsTheme, Theme } from "@mui/material/styles";

export const components: Components<Omit<Theme, "palette" | "components"> & CssVarsTheme> = {

  // ---------------------------------- Typography ----------------------------------
  MuiTypography: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        // ----------------- Branding & Nav --------------------
        ...(ownerState.className?.includes("site-name") && {
          flexGrow: 1,
          fontWeight: "bold",
          cursor: "pointer",
          paddingLeft: "-40%",
          color: theme.palette.text.primary,
          "&:hover": { opacity: 0.8 },
        }),
        ...(ownerState.className?.includes("mobile-nav-text") && {
          fontSize: "1.2rem",
          fontWeight: 600,
          color: theme.palette.text.primary,
          letterSpacing: 1,
        }),

        // ----------------- Section Headers -------------------
        ...(ownerState.className?.includes("section-overline") && {
          fontSize: "0.75rem",
          letterSpacing: 2,
          fontWeight: 600,
          textTransform: "uppercase",
          display: "block",
          marginBottom: theme.spacing(1),
          color: theme.palette.primary.main,
        }),
        ...(ownerState.className?.includes("section-title") && {
          flexGrow: 1,
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "10%",
          color: theme.palette.secondary.main,
        }),
        ...(ownerState.className?.includes("section-subtitle") && {
          flexGrow: 1,
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: theme.spacing(1),
          color: theme.palette.text.primary,
        }),

        // ----------------- Body & Details --------------------
        ...(ownerState.className?.includes("global-description") && {
          fontSize: "0.875rem",
          lineHeight: 1.6,
          marginBottom: theme.spacing(3),
          color: theme.palette.text.secondary,
        }),
        ...(ownerState.className?.includes("section-body") && {
          flexGrow: 1,
          fontSize: "1rem",
          lineHeight: 1.6,
          marginBottom: "5%",
          color: theme.palette.text.primary,
        }),
        ...(ownerState.className?.includes("room-price") && {
          fontWeight: 400,
          color: theme.palette.text.secondary,
          marginBottom: theme.spacing(1),
        }),
        ...(ownerState.className?.includes("amenities-list") && {
          fontSize: "0.875rem",
          lineHeight: 1.5,
          color: theme.palette.text.secondary,
        }),
        ...(ownerState.className?.includes("contact-text-primary") && {
          color: theme.palette.text.primary,
          fontWeight: 500,
        }),
        ...(ownerState.className?.includes("contact-text-secondary") && {
          color: theme.palette.text.secondary,
          fontSize: "0.9rem",
        }),
        ...(ownerState.className?.includes("footer-text") && {
          fontSize: "0.9rem",
          color: theme.palette.text.secondary,
          textAlign: "center",
        }),
        ...(ownerState.className?.includes("footer-credit") && {
          fontSize: "0.8rem",
          color: theme.palette.text.disabled,
          textAlign: "center",
          marginTop: theme.spacing(1),
          fontStyle: "italic",
        }),
      }),
    },
  },
// ---------------------------------- Links ----------------------------------

  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none", 
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
  },

  // ---------------------------------- Grid & layout ----------------------------------
  MuiGrid: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        // ----------------- Global Section Containers ---------
        ...(ownerState.className?.includes("section-global") && {
          alignItems: "center",
          minHeight: "100dvh",
          scrollMarginTop: "80px",
        }),
        ...(ownerState.className?.includes("section-content-text") && {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: theme.spacing(12),
          paddingBottom: theme.spacing(4),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
          },
          [theme.breakpoints.up("md")]: {
            paddingLeft: theme.spacing(8),
            paddingRight: theme.spacing(8),
          },
        }),

        // ----------------- Room Carousel Layout --------------
        ...(ownerState.className?.includes("carousel-slide-grid") && {
          alignItems: "stretch",
          height: "100dvh",
        }),
        ...(ownerState.className?.includes("section-image-container") && {
          position: "relative",
          height: "50dvh",
          [theme.breakpoints.up("md")]: {
            height: "100dvh",
          },
        }),

        // ----------------- About Us Layout -------------------
        ...(ownerState.className?.includes("about-grid-container") && {
          width: "100%",
          minHeight: "100dvh",
          alignItems: "center",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: { flexDirection: "row" },
        }),
        ...(ownerState.className?.includes("about-image-column") && {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(4),
          [theme.breakpoints.up("md")]: { padding: theme.spacing(8) },
        }),
        // ----------------- Booking Layout --------------------
        ...(ownerState.className?.includes("booking-grid-container") && {
          width: "100%",
          minHeight: "80dvh", 
          flexDirection: "column-reverse",
          [theme.breakpoints.up("md")]: { flexDirection: "row" },
        }),
        ...(ownerState.className?.includes("map-container") && {
          width: "100%",
          height: "45dvh", 
          [theme.breakpoints.up("md")]: { height: "auto" },
        }),
      }),
    },
  },

// ---------------------------------- Navigation (Header & Buttons) ----------------------------------
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
      }),
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up("md")]: {
          paddingLeft: theme.spacing(8),
          paddingRight: theme.spacing(6),
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.className?.includes("nav-button") && {
          textTransform: "none",
          flexGrow: 1,
          cursor: "pointer",
          color: theme.palette.text.primary,
          "&:hover": { fontWeight: "bold", opacity: 0.8 },
        }),
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.className?.includes("mobile-menu-btn") && {
          color: theme.palette.text.primary,
          display: "inline-flex",
          [theme.breakpoints.up("md")]: { display: "none" },
        }),
      }),
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.className?.includes("section-divider") && {
          marginBottom: theme.spacing(4),
          width: "50px",
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
        }),
      }),
    },
  },

  // ---------------------------------- CSS global ----------------------------------
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      // ----------------- Desktop Nav -----------------------
      ".nav-menu-desktop": {
        display: "none",
        [theme.breakpoints.up("md")]: { display: "flex" },
      },

      // ----------------- Mobile Drawer Classes -------------
      ".mobile-drawer": {
        display: "block",
        [theme.breakpoints.up("md")]: { display: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 250,
          backgroundColor: theme.palette.background.default,
        },
      },
      ".mobile-drawer-header": {
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "flex-end",
      },
      ".mobile-drawer-close-btn": {
        color: theme.palette.text.primary,
      },
      ".mobile-nav-item": {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },

      // ----------------- Amenities List --------------------
      ".amenity-item-wrapper": {
        display: "flex",
        alignItems: "flex-start",
        gap: theme.spacing(1.5),
        marginBottom: theme.spacing(1),
      },
      ".amenity-icon": {
        fontSize: "1rem !important",
        color: theme.palette.primary.main,
        marginTop: "2px",
      },

      // ----------------- Swiper & Custom Nav ---------------
      ".swiper": { width: "100%", height: "100%" },
      ".room-nav-btn": {
        transition: "all 0.3s ease",
        border: 0,
        "& svg": {
          color: theme.palette.secondary.main,
          fontSize: "2rem",
        },
        "&:hover": {
          "& svg": {
            color: theme.palette.secondary.dark,
            transform: "scale(1.1)",
          },
        },
      },
      ".nav-arrows-container": {
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(3),
        paddingTop: theme.spacing(2),
      },
      ".room-nav-btn.swiper-button-disabled": {
        opacity: 0.3,
        pointerEvents: "none",
      },
      ".photo-pagination .swiper-pagination-bullet": {
        backgroundColor: "#ffffff",
        opacity: 0.5,
      },
      ".photo-pagination .swiper-pagination-bullet-active": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },

      // ----------------- Desktop Section Styles ------------
      ".section-image": {
        width: "100%",
        height: "50dvh",
        display: "block",
        objectFit: "cover",
        [theme.breakpoints.up("md")]: { height: "100dvh" },
      },
      ".global-info-wrapper": { marginBottom: theme.spacing(4) },
      ".room-details-wrapper": { marginBottom: theme.spacing(6) },
      ".photo-pagination-wrapper": {
        position: "absolute",
        bottom: "24px",
        width: "100%",
        textAlign: "center",
        zIndex: 10,
      },

      // ----------------- Mobile Carousel Specific ----------
      ".mobile-section-global": {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(8),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        minHeight: "100dvh",
        scrollMarginTop: "80px",
      },
      ".mobile-global-info": { marginBottom: theme.spacing(4) },
      ".mobile-divider": {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
      },
      ".mobile-slide-content": { display: "flex", flexDirection: "column" },
      ".mobile-room-header": { marginBottom: theme.spacing(3) },
      ".mobile-photo-container": {
        position: "relative",
        width: "100%",
        height: "40vh",
        marginBottom: theme.spacing(4),
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
      },
      ".mobile-section-image": {
        width: "100%",
        height: "100%",
        objectFit: "contain !important",
        display: "block",
      },
      ".mobile-room-footer": {
        display: "flex",
        flexDirection: "column",
        paddingBottom: theme.spacing(2),
      },

      // ----------------- About Us Specific -----------------
      ".about-image": {
        width: "100%",
        maxWidth: "450px",
        height: "auto",
        aspectRatio: "4 / 5",
        objectFit: "cover",
        borderRadius: "12px",
        boxShadow: theme.shadows[6],
      },
      // ----------------- Map & Booking Styling ------------------
      // ----------------- Booking & Map UI ------------------
      ".google-map-iframe": {
        width: "100%",
        height: "100%",
        border: 0,
        // Grayscale filter makes the map look very high-end/architectural
        filter: "grayscale(0.2)", 
        transition: "opacity 0.5s ease-in-out",
      },
      ".contact-link": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(2),
        cursor: "pointer",
        "&:hover": {
          opacity: 0.7,
        },
      },
      ".contact-method": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
      ".booking-step": {
        display: "flex",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(3),
      },
      ".step-number": {
        color: theme.palette.primary.main,
        fontWeight: "bold",
        fontSize: "1.2rem",
      },
      ".site-footer": {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
      },
    }),
  },
};