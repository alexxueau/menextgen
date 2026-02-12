import { Box, Typography } from "@mui/material";
import React from "react";

export const Embracing = () => {
  return (
    <Box
      data-model-id="1:517"
      sx={{
        position: "relative",
        width: "100%",
        height: "260px",
        backgroundColor: "#2e2146",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 7.5 },
      }}
    >
      <Box
        component="img"
        alt="Image"
        src="/img/image-267.png"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Typography
        variant="h4"
        sx={{
          position: "relative",
          color: "white",
          textAlign: "center",
          maxWidth: "100vw",
        }}
      >
        By embracing circular design, reducing waste &amp; carbon impact, and
        uplifting craftsmanship &amp; culture, MEYD.it is building a future
        where style is sustainable, personal, and powerful.
      </Typography>
    </Box>
  );
};
