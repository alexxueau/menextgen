import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../op1000theme";

export const WhatIsMeydIt = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        bgcolor: "#f4efe5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        data-model-id="1:495"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "1024px",
          px: { xs: 2, sm: 4, md: 8, lg: 15 },
          paddingLeft: { xs: 2, sm: 4, md: 0 },
        }}
      >
        <Stack spacing={8} sx={{ maxWidth: "640px" }}>
          <Typography variant="h2">What is MEYD.it?</Typography>

          <Stack spacing={8}>
            <Typography
              variant="h4"
              sx={{
                maxWidth: "526px",
                color: "text.primary",
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              MEYD.it is more than a platform.
              <br />
              It&apos;s a community that respects people &amp; the planet
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.bodyDark,
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              No middlemen. No fast fashion.
              <br />
              Just authentic connection, meaningful design, and fashion that
              tells a story.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        component="img"
        alt="Frame"
        src="/img/frame-1000001550.png"
        sx={{
          width: "650px",
          height: "100vh",
          pr: 7.5,
          overflow: "hidden",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};
