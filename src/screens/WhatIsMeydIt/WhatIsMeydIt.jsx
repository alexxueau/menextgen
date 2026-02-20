import { Box, Button, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import theme from "../../op1000theme";

export const WhatIsMeydIt = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f4efe5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "auto", md: "100vh" },
        py: { xs: 8, md: 0 },
      }}
    >
      <Box
        data-model-id="1:495"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          minHeight: { xs: "auto", md: "100vh" },
          px: { xs: 2, sm: 4, md: 8, lg: 12 },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Stack spacing={{ xs: 4, md: 8 }} sx={{ maxWidth: "640px" }}>
          <Typography
            variant="h2"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Bring your vision to life
          </Typography>

          <Typography
            variant="h3"
            sx={{
              maxWidth: "526px",
              color: "text.headerDark",
              lineHeight: 1.3,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Collaborate with talented creatives who match your taste and vision.
          </Typography>

          <Stack spacing={2}>
            <Typography variant="h4">
              Let's create something remarkable together
            </Typography>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <CheckCircleIcon sx={{ color: "primary.main", mt: 0.5 }} />
              <Typography variant="body1">Share your budget</Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <CheckCircleIcon sx={{ color: "primary.main", mt: 0.5 }} />
              <Typography variant="body1">Upload your moodboard</Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <CheckCircleIcon sx={{ color: "primary.main", mt: 0.5 }} />
              <Typography variant="body1">Shape your style</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "71px",
                padding: "var(--global-tokens-light-spacing-3)",
                borderRadius: "20px",
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#7c3aed",
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
        </Stack>
      </Box>
    </Box>
  );
};
