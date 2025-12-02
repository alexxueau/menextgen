import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import theme from "../../op1000theme";
import React, { useEffect, useRef, useState } from "react";

const stepsDataTop = [
  {
    number: "01",
    title: "Profile Creation & Sign Up",
    description:
      "Sign up to explore and connect with our designers. upload your measurements share your design ideas and get started on your bespoke journey.",
    icon: <PersonAddIcon sx={{ fontSize: 80, color: "#1A1A1A" }} />,
  },
  {
    number: "03",
    title: "Creative Matchmaking",
    description:
      "This is where the magic happens - we'll connect you with a designer who's the perfect fit for your vision.",
    icon: <FavoriteIcon sx={{ fontSize: 80, color: "#1A1A1A" }} />,
  },
  {
    number: "05",
    title: "Finalisation",
    description:
      "Your atelier will estimate the time and cost to bring your design to life, then share a quote for you to review and approve.",
    icon: <CheckCircleIcon sx={{ fontSize: 80, color: "#1A1A1A" }} />,
  },
];

const stepsDataBottom = [
  {
    number: "02",
    title: "Details Requirements",
    description:
      "Share your vision — we'll match you with the perfect designer to bring it to life. Tell us what you're dreaming of , from style and fabric to fit and budget — and we'll connect you with an independent designer who can make it real.",
    icon: <ContentCutIcon sx={{ fontSize: 80, color: "#1A1A1A" }} />,
  },
  {
    number: "04",
    title: "Consultation and Design",
    description:
      "Schedule a time to work with your designer to sketch, adjust and finalise the details of your garment.",
    icon: <ContentCutIcon sx={{ fontSize: 80, color: "#1A1A1A" }} />,
  },
];

export const HowItWorks = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);const [scrollProgress, setScrollProgress] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1200);

  useEffect(() => {
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const start = rect.top;
    const end = rect.bottom - windowHeight;
    if (start > 0) {
      setScrollProgress(0);
    } else if (end < 0) {
      setScrollProgress(1);
    } else {
      const scrolled = -start;
      const total = rect.height - windowHeight;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);
      setScrollProgress(progress);
    }
  };
  const calculateMaxScroll = () => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setMaxScroll(Math.max(0, contentWidth - viewportWidth));
    }
  };
  calculateMaxScroll();
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", calculateMaxScroll);
  handleScroll();
  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", calculateMaxScroll);
  };
}, []);

  const translateX = -scrollProgress * maxScroll;

  return (
    <Box
      ref={containerRef}
      data-model-id="1:627"
      sx={{
        bgcolor: "#1A1A1A",
        minHeight: "300vh", // Make it tall enough to allow scrolling
        position: "relative",
        py: 8,
      }}
    >
      {/* Sticky container that holds the horizontally scrolling content */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Stack spacing={8} sx={{ height: "100%", justifyContent: "center" }}>
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              px: { xs: 2, md: 8 },
            }}
          >
            <Box sx={{ maxWidth: "691px" }}>
              <Typography
                variant="h1"
                sx={{
                  color: "#F5F5F5",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                How Meyd.it <span style={{ fontStyle: "italic" }}>works</span>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#E0E0E0",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                From a sketch, to a stitch, to something that lives in your hands.
              </Typography>
            </Box>
            <Box
              component="img"
              src="/img/HowMeyd.itWork.Frame.png"
              alt="Frame"
              sx={{
                width: { xs: "280px", md: "361px" },
                height: { xs: "200px", md: "260px" },
                objectFit: "cover",
                borderRadius: "4px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            />
          </Box>

          {/* Horizontally scrolling content */}
          <Box sx={{ overflow: "hidden" }}>
            <Box
              ref={contentRef}
              sx={{
                transform: `translateX(${translateX}px)`,
                transition: "transform 0.1s ease-out",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: "fit-content",
              }}
            >
              {/* Top Row */}
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  alignItems: "flex-start",
                  px: { xs: 2, md: 8 }
                }}
              >
                {stepsDataTop.map((step, index) => (
                  <Box
                    key={step.number}
                    sx={{
                      display: "flex",
                      gap: 3.5,
                      minWidth: "652px",
                      marginLeft: index == "0" ? "83px" : "740px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "146px",
                        height: "146px",
                        bgcolor: "#B39DDB",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Stack
                      spacing={2}
                      sx={{
                        borderLeft: "5px solid",
                        borderColor: theme.palette.sand[500],
                        pl: 4,
                        maxWidth: "480px",
                      }}
                    >
                      <Stack spacing={1}>
                        <Typography
                          sx={{
                            color: "#B39DDB",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                          }}
                        >
                          {step.number}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            color: "#B39DDB",
                            fontSize: { xs: "1.25rem", md: "1.5rem" },
                            fontWeight: 600,
                          }}
                        >
                          {step.title}
                        </Typography>
                      </Stack>
                      <Typography
                        sx={{
                          color: "#E0E0E0",
                          fontSize: { xs: "0.875rem", md: "1rem" },
                          lineHeight: 1.6,
                          maxWidth:"365px",
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Stack>
                  </Box>
                ))}
              </Box>

              {/* Measuring Tape Image */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <Box
                  component="img"
                  src="../../img/measuringTape.png"
                  alt="Measuring tape"
                  sx={{
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Bottom Row */}
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  alignItems: "flex-start",
                  px: { xs: 2, md: 8 }
                }}
              >
                {stepsDataBottom.map((step, index) => (
                  <Box
                    key={step.number}
                    sx={{
                      display: "flex",
                      gap: 3.5,
                      minWidth: "652px",
                      marginLeft: index == "0" ? "796px" : "740px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "146px",
                        height: "146px",
                        bgcolor: "#B39DDB",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Stack
                      spacing={2}
                      sx={{
                        borderLeft: "5px solid",
                        borderColor: theme.palette.sand[500],
                        pl: 4,
                        maxWidth: "480px",
                      }}
                    >
                      <Stack spacing={1}>
                        <Typography
                          sx={{
                            color: "#B39DDB",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                          }}
                        >
                          {step.number}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            color: "#B39DDB",
                            fontSize: { xs: "1.25rem", md: "1.5rem" },
                            fontWeight: 600,
                          }}
                        >
                          {step.title}
                        </Typography>
                      </Stack>
                      <Typography
                        sx={{
                          color: "#E0E0E0",
                          fontSize: { xs: "0.875rem", md: "1rem" },
                          lineHeight: 1.6,
                          maxWidth: "395px"
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Navigation Arrows */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 2, md: 8 },
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                sx={{
                  bgcolor: "#2A2A2A",
                  color: "#fff",
                  width: 63,
                  height: 63,
                  "&:hover": {
                    bgcolor: "#3A3A3A",
                  },
                }}
                onClick={() => {
                  window.scrollBy({ top: -window.innerHeight * 0.3, behavior: "smooth" });
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "#2A2A2A",
                  color: "#fff",
                  width: 63,
                  height: 63,
                  "&:hover": {
                    bgcolor: "#3A3A3A",
                  },
                }}
                onClick={() => {
                  window.scrollBy({ top: window.innerHeight * 0.3, behavior: "smooth" });
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};