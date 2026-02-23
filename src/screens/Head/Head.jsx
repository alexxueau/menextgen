import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../../op1000theme";

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
          sx={{
            height: { xs: 72, sm: 100 },
            px: { xs: 2, sm: 4 },
            py: { xs: 1, sm: 2 },
            gap: 2,
            minWidth: 0,
          }}
        >
          <Box
            component="img"
            src="/img/logo.png"
            alt="Logo"
            sx={{
              height: { xs: 30, sm: 50 },
              maxWidth: { xs: 200, sm: "none" }, // prevents logo from eating space
              objectFit: "contain",
              flexShrink: 1,
            }}
          />
          <Button
            sx={{
              flexShrink: 0,
              px: { xs: 1.5, sm: 3 },
              py: { xs: 0.75, sm: 1 },
              minWidth: { xs: 96, sm: 120 },
              backgroundColor: theme.palette.primary[900],
              color: "#fff",
              textTransform: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary[500],
              },
            }}
            onClick={() =>
              (window.location.href =
                "https://t3h2v.share-ap1.hsforms.com/2htv9LsPZQte0cCfvF_qw3A")
            }
          >
            <Typography variant="body1">Join Now</Typography>
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: "1440px",
          height: { xs: "calc(100vh - 100px)", sm: "100%" },
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 7.5,
          pt: { xs: "100px", sm: 0 },
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
