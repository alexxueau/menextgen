import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import theme from "../../op1000theme";
import tailorImage from "/img/tailor.jpg";

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
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          alignItems: "center",
          maxWidth: "1600px",
          width: "100%",
          minHeight: { xs: "auto", md: "100vh" },
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          justifyContent: { xs: "center", md: "center" },
          gap: { xs: 4, md: 10 },
        }}
      >
        <Stack spacing={{ xs: 2, md: 4 }} sx={{ maxWidth: "540px" }}>
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
          <Stack alignItems="center">
            <Button
              variant="contained"
              sx={{
                width: {
                  xs: "50%",
                  md: "100%",
                },
                height: {
                  xs: "50px",
                  md: "70px",
                },
                padding: "var(--global-tokens-light-spacing-3)",
                borderRadius: "20px",
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary[700],
                },
              }}
              onClick={() =>
                (window.location.href =
                  "https://t3h2v.share-ap1.hsforms.com/2htv9LsPZQte0cCfvF_qw3A")
              }
            >
              <Typography variant="button">Join Now</Typography>
            </Button>
          </Stack>
        </Stack>
        <Box
          sx={{
            maxWidth: "698px",
            minWidth: { lg: "600px", md: "600px", sm: "500px" },
            width: "100%",
            height: "auto",
            borderRadius: "40px",
            bgcolor: theme.palette.primary[200],
            padding: "30px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            columns={{ xs: 1, sm: 1, md: 2 }}
            columnSpacing={"50px"}
            rowSpacing={"20px"}
          >
            {[...Array(10)].map((_, index) => {
              const colors = [
                theme.palette.primary.main,
                "#F99BAB",
                "#00C0E8",
                "#FFCC00",
              ];
              const borderColor = colors[index % 4];
              return (
                <Grid item xs={1} key={index}>
                  <Box
                    flexDirection="row"
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "115px",
                      bgcolor: "white",
                      borderRadius: "10px",
                      padding: "10px",
                      gap: "16px",
                      border: `3px solid ${borderColor}`,
                    }}
                  >
                    <Box
                      component="img"
                      src={tailorImage}
                      sx={{
                        maxWidth: "90px",
                        maxHeight: "90px",
                        width: "100%",
                        height: "100%",
                        borderRadius: "12px",
                        flexShrink: 0,
                        objectFit: "cover",
                      }}
                    ></Box>
                    <Box
                      flexDirection="column"
                      sx={{
                        display: "flex",
                        width: "100%",
                        height: "90px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        overflowWrap: "break-word",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="body3">Name</Typography>
                      <Typography variant="body4">Description</Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
