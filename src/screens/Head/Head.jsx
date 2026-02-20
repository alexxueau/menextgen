import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import theme from "../../op1000theme";

// const navigationItems = ["ABOUT", "IMPACT", "EVENTS", "INSPO", "SERVICES"];

export const Head = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="/img/rectangle.png"
        alt="Background"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/*fixed navbar*/}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          backgroundColor: scrolled ? "rgba(255,255,255,0.02)" : "transparent",
          zIndex: 10,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "103px", px: 4, py: 2 }}
        >
          <Box
            component="img"
            src="/img/logo.svg"
            alt="Logo"
            sx={{ height: "100%" }}
          />
          <Button
            sx={{
              px: 3,
              py: 1,
              backgroundColor: theme.palette.primary[900],
              color: "#fff",
              "&:hover": {
                backgroundColor: "#7c3aed",
              },
            }}
            onClick={() =>
              (window.location.href =
                "https://t3h2v.share-ap1.hsforms.com/2htv9LsPZQte0cCfvF_qw3A")
            }
          >
            Join Now
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: "1440px",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 7.5,
        }}
      >
        <Stack spacing={5} alignItems="left">
          <Typography
            variant="h1"
            sx={{
              color: "white",
              textAlign: "left",
              maxWidth: "800px",
              textShadow: "0px 1px 3px rgba(0,0,0,0.15)",
            }}
          >
            Style that lasts.
            <br />
            Fashion with meaning.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              textAlign: "left",
              maxWidth: "850px",
              textShadow: "0px 1px 3px rgba(0,0,0,0.15)",
            }}
          >
            Discover MEYD.it — a new destination for slow fashion, timeless
            design, and a conscious way to dress.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
