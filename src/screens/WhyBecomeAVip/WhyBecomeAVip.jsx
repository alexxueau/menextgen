import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BenefitCard from "./BenefitCard";
import theme from "../../op1000theme";
import Masonry from "@mui/lab/Masonry";

const benefitCards = [
  {
    icon: "/img/frame-1000001391.png",
    title: "Save your spot among our first 100 VIP members",
    content: "",
    gridColumn: { xs: 12, sm: 6 },
    paddingBottom: "61px",
  },
  {
    icon: "/img/frame-1000001391-1.png",
    title: "A seat at the table",
    content: "Find the right designer for your style and vision with ease.",
    gridColumn: { xs: 12, sm: 6 },
    paddingBottom: "115px",
  },
  {
    icon: "/img/frame-1000001391-2.png",
    title: "Private previews and styling inspiration.",
    content:
      "Get early access to one-of-a-kind designs, repairs, refashions and news",
    gridColumn: { xs: 12, sm: 6 },
    paddingBottom: "61px",
  },
  {
    icon: "/img/frame-1000001391-3.png",
    title: "Special VIP perks",
    content: "Exclusive offers + a digital gift",
    gridColumn: { xs: 12, sm: 6 },
    paddingBottom: "89px",
  },
];

export const WhyBecomeAVip = () => {
  return (
    <Box
      data-model-id="1:520"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "50px 20px", md: "100px 60px" },
        backgroundImage: `
          linear-gradient(rgba(255, 248, 229, 0.8), rgba(255, 248, 229, 0.8)),
          url(/img/why-become-a-vip.png)
        `,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          maxWidth: "1320px",
          height: "100%",
          width: "100%",
          padding: "50px",
          backgroundColor: theme.palette.secondary.sand,
          borderRadius: "16px",
          boxShadow: "2px 2px 50px 1px rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(50px) brightness(100%)",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: theme.spacing(2),
            background: `
            repeating-linear-gradient(0deg, ${theme.palette.neutral[900]}33 0px, ${theme.palette.neutral[900]}33 20px, transparent 20px, transparent 40px),
            repeating-linear-gradient(90deg, ${theme.palette.neutral[900]}33 0px, ${theme.palette.neutral[900]}33 20px, transparent 20px, transparent 40px),
            repeating-linear-gradient(180deg, ${theme.palette.neutral[900]}33 0px, ${theme.palette.neutral[900]}33 20px, transparent 20px, transparent 40px),
            repeating-linear-gradient(270deg, ${theme.palette.neutral[900]}33 0px, ${theme.palette.neutral[900]}33 20px, transparent 20px, transparent 40px)
          `,
            backgroundSize: "2px 100%, 100% 2px, 2px 100%, 100% 2px",
            backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
          },
        }}
      >
        <Stack
          spacing="35px"
          sx={{
            width: { xs: "100%", lg: "550px" },
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: theme.palette.text.headerDark,
            }}
          >
            Why become a meNexGen today?
          </Typography>

          <Box
            sx={{
              width: "420px",
              maxWidth: "100%",
              position: "relative",
              height: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/img/line-220.svg"
              alt="Line"
              sx={{
                position: "absolute",
                left: 0,
                top: "12px",
                width: "50px",
                height: "1px",
              }}
            />
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              Exclusive access—limited VIP spaces
            </Typography>
            <Box
              component="img"
              src="/img/line-221.svg"
              alt="Line"
              sx={{
                position: "absolute",
                right: 0,
                top: "12px",
                width: "50px",
                height: "1px",
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "450px" },
              maxWidth: "100%",
              height: "300px",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "2px 2px 30px 1px rgba(0, 0, 0, 0.15)",
              backgroundImage: "url(/img/rectangle-10272.svg)",
              backgroundSize: "100% 100%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/img/meyditlogolight-1.svg"
              alt="Meyditlogolight"
              sx={{
                position: "absolute",
                top: "38px",
                width: "20px",
                height: "16px",
              }}
            />

            <Stack
              direction="row"
              spacing="4.5px"
              sx={{
                position: "absolute",
                top: "70px",
              }}
            >
              <Box
                component="img"
                src="/img/star-3.svg"
                alt="Star"
                sx={{
                  width: "9.51px",
                  height: "9.05px",
                }}
              />
              <Box
                component="img"
                src="/img/star-3.svg"
                alt="Star"
                sx={{
                  width: "9.51px",
                  height: "9.05px",
                }}
              />
              <Box
                component="img"
                src="/img/star-3.svg"
                alt="Star"
                sx={{
                  width: "9.51px",
                  height: "9.05px",
                }}
              />
            </Stack>

            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                top: "110px",
                color: "#ffffff",
              }}
            >
              meNexGen
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: "14px",
                position: "absolute",
                bottom: "30px",
                width: "215px",
                color: "#FFFFFF80",
              }}
            >
              Only a few VIP spots available...
              <br />
              Lead the fashion shift
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              width: { xs: "100%", sm: "450px" },
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
                "https://share-ap1.hsforms.com/1r0Kng4rHRTGEx9jNO-3B4Qt3h2v")
            }
          >
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: 700,
              }}
            >
              Join Now
            </Typography>
          </Button>
        </Stack>

        <Box
          sx={{
            width: "1px",
            height: "642px",
            backgroundColor: "#D0C097",
            display: { xs: "none", lg: "block" },
          }}
        />

        <Box
          sx={{
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <Masonry
            columns={{ xs: 1, sm: 1, md: 2, lg: 2 }}
            spacing={1}
            sx={{ width: "100%", alignItems: "center" }}
          >
            {benefitCards.map((card, index) => (
              <BenefitCard
                key={index}
                index={index}
                title={card.title}
                content={card.content}
                icon={card.icon}
              />
            ))}
          </Masonry>
        </Box>
      </Box>
    </Box>
  );
};
