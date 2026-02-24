import FirstStepIcon from "/img/01icon.png";
import SecondStepIcon from "/img/02icon.png";
import ThirdStepIcon from "/img/03icon.png";
import FourthStepIcon from "/img/04icon.png";
import FifthStepIcon from "/img/05icon.png";
import { Box, Stack, Typography } from "@mui/material";
import theme from "../../op1000theme";
import { useEffect, useRef, useState } from "react";

const stepsDataTop = [
  {
    number: "01",
    title: "Profile Creation & Sign Up",
    description:
      "Sign up to explore and connect with our designers. upload your measurements share your design ideas and get started on your bespoke journey.",
    icon: (
      <Box
        component="img"
        src={FirstStepIcon}
        alt="Profile Creation & Sign Up"
        sx={{ fontSize: 80, color: "#1A1A1A" }}
      />
    ),
  },
  {
    number: "03",
    title: "Creative Matchmaking",
    description:
      "This is where the magic happens - we'll connect you with a designer who's the perfect fit for your vision.",
    icon: (
      <Box
        component="img"
        src={ThirdStepIcon}
        alt="Creative Matchmaking"
        sx={{ fontSize: 80, color: "#1A1A1A" }}
      />
    ),
  },
  {
    number: "05",
    title: "Finalisation",
    description:
      "Your atelier will estimate the time and cost to bring your design to life, then share a quote for you to review and approve.",
    icon: (
      <Box
        component="img"
        src={FifthStepIcon}
        alt="Finalisation"
        sx={{ fontSize: 80, color: "#1A1A1A" }}
      />
    ),
  },
];

const stepsDataBottom = [
  {
    number: "02",
    title: "Details Requirements",
    description:
      "Share your vision — we'll match you with the perfect designer to bring it to life. Tell us what you're dreaming of , from style and fabric to fit and budget — and we'll connect you with an independent designer who can make it real.",
    icon: (
      <Box
        component="img"
        src={SecondStepIcon}
        alt="Details Requirements"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
  {
    number: "04",
    title: "Consultation and Design",
    description:
      "Schedule a time to work with your designer to sketch, adjust and finalise the details of your garment.",
    icon: (
      <Box
        component="img"
        src={FourthStepIcon}
        alt="Consultation and Design"
        sx={{ width: "120%", height: "120%", objectFit: "cover" }}
      />
    ),
  },
];

const allSteps = [
  stepsDataTop[0],
  stepsDataBottom[0],
  stepsDataTop[1],
  stepsDataBottom[1],
  stepsDataTop[2],
];

export const HowItWorks = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  const delayThreshold = 0.3; // Delay scroll start by 30% of total scroll
  const adjustedProgress = Math.max(
    0,
    (scrollProgress - delayThreshold) / (1 - delayThreshold),
  );
  const translateX = -adjustedProgress * maxScroll;

  return (
    <Box
      ref={containerRef}
      data-model-id="1:627"
      sx={{
        bgcolor: theme.palette.neutral[900],
        minHeight: { xs: "100vh", md: "300vh" },
        position: "relative",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 2, md: 8 },
          pt: { xs: 6, md: 10 },
          flexShrink: 0,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: "#F5F5F5",
              fontWeight: 500,
              mb: 2,
            }}
          >
            How Meyd.it <span style={{ fontStyle: "italic" }}>works</span>
          </Typography>
          <Typography variant="subtitle1">
            From a sketch, to a stitch, to something that lives in your hands.
          </Typography>
        </Box>
        <Box
          component="img"
          src="/img/HowMeyd.itWork.Frame.png"
          alt="Frame"
          sx={{
            width: { xs: "0", md: "320px" },
            height: { xs: "0", md: "230px" },
            objectFit: "cover",
            borderRadius: "4px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        />
      </Box>
      {/* Content Section */}
      <Box sx={{ display: { xs: "block", md: "none" }, px: 2, py: 8 }}>
        <Stack spacing={4}>
          {allSteps.map((step) => (
            <Box key={step.number} sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  width: "62px",
                  height: "62px",
                  bgcolor: "#B39DDB",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={step.icon.props.src}
                  alt={step.icon.props.alt}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Stack spacing={1}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: 500,
                    fontFamily: theme.typography.body1.fontFamily,
                  }}
                >
                  {step.number}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "24px",
                    fontWeight: 500,
                    fontFamily: theme.typography.h1.fontFamily,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
      {/* Sticky container that holds the horizontally scrolling content */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          position: "sticky",
          top: 0,
          height: "auto",
          minHeight: "600px",
          overflow: "hidden",
          alignItems: "flex-end",
          pt: 8,
        }}
      >
        <Stack spacing={0} sx={{ width: "100%" }}>
          {/* Horizontally scrolling content */}
          <Box
            sx={{
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              flex: 1,
              minHeight: 0,
            }}
          >
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
                  alignItems: "flex-start",
                  px: { xs: 2, md: 8 },
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
                            color: "#FFFFFF",
                            fontSize: "18px",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            fontFamily: theme.typography.body1.fontFamily,
                          }}
                        >
                          {step.number}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontSize: { xs: "1rem", md: "1.5rem" },
                            fontWeight: 500,
                            fontFamily: theme.typography.h1.fontFamily,
                          }}
                        >
                          {step.title}
                        </Typography>
                      </Stack>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: { xs: "0.875rem", md: "1rem" },
                          lineHeight: 1.6,
                          maxWidth: "365px",
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
                  px: { xs: 2, md: 8 },
                }}
              >
                <Box
                  component="img"
                  src="../../img/measuringTape.png"
                  alt="Measuring tape"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Bottom Row */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  px: { xs: 2, md: 8 },
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
                            color: "#FFFFFF",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            fontFamily: theme.typography.body1.fontFamily,
                          }}
                        >
                          {step.number}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            color: "#FFFFFF",
                            fontSize: { xs: "1.25rem", md: "1.5rem" },
                            fontWeight: 500,
                            fontFamily: theme.typography.h1.fontFamily,
                          }}
                        >
                          {step.title}
                        </Typography>
                      </Stack>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: { xs: "0.875rem", md: "1rem" },
                          lineHeight: 1.6,
                          maxWidth: "395px",
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
        </Stack>
      </Box>
    </Box>
  );
};
