
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../op1000theme";

const cardData = [
  {
    rotation: -10,
    icon: "/img/frame-1000001391.png",
    iconRotation: 10,
    title: "Growing the Meyd.it",
    description:
      "With your support, we can grow the Meyd.it community and inspire more people to choose slow, meaningful fashion.",
  },
  {
    rotation: 15,
    icon: "/img/layer.png",
    title: "Shareable Design",
    description:
      "We've created shareable designs you can post on social media & don't forget to follow us on Instagram and TikTok to stay connected and keep the movement growing.",
  },
];

export const SpreadTheWord = () => {
  const [activeButton, setActiveButton] = useState("download");

  const buttons = [
    { id: "download", left: "0px", img: "/img/DownloadP.svg", url: "/img/StoryPic.png", onClick: () => {
      const link = document.createElement('a');
      link.href = "/img/StoryPic.png";
      link.download = "meyd-it-story.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }},    
    { id: "instagram", left: "90px", img: "/img/InsP.svg", url:"https://www.instagram.com/meyd_it" },
    { id: "tiktok", left: "180px", img: "/img/TTP.svg", url:"https://www.tiktok.com/@meyd.it" },
  ];

  const images = [
    { id: "download", src: "/img/StoryPic.png", alt: "Story" },
    { id: "instagram", src: "/img/INSPic.png", alt: "Instagram" },
    { id: "tiktok", src: "/img/TikPic.png", alt: "TikTok" },
  ];

  const getButtonStyles = (id) => {
    const isActive = activeButton === id;

    return {
      position: "absolute",
      left: buttons.find((b) => b.id === id).left,
      height: "71px", 
      backgroundColor: isActive ? "#7C58BC" : "transparent",
      borderRadius: "20px",
      boxShadow: "0px 2px 4px rgba(255, 255, 255, 0.3)",
      minWidth: "90px",
      padding: "12px",
      transition: "background-color 0.3s ease",
      "& img": {
        filter: isActive ? "brightness(0) invert(1)" : "none"
      },
      "&:hover": { 
        backgroundColor: "#6A4AA8",
        "& img": {
          filter: "brightness(0) invert(1)" 
        }
      },
    };
  };
  
  const getImageStyles = (id) => {
  let rotation = 0;
  let zIndex = 1;

  // Rotation map depending on active button
  switch (activeButton) {
    case "download":
      if (id === "download") rotation = 0;
      if (id === "instagram") rotation = -10;
      if (id === "tiktok") rotation = 10;
      break;

    case "instagram":
      if (id === "instagram") rotation = 0;
      if (id === "download") rotation = -10;
      if (id === "tiktok") rotation = 10;
      break;

    case "tiktok":
      if (id === "tiktok") rotation = 0;
      if (id === "download") rotation = -10;
      if (id === "instagram") rotation = 10;
      break;

    default:
      rotation = 0;
  }

  // Active one is always on top
  zIndex = activeButton === id ? 3 : 2;

  return {
    position: "absolute",
    bottom: 60,
    left: "50%",
    transform: `translateX(-50%) rotate(${rotation}deg)`,
    transformOrigin: "center bottom",
    transition: "transform 0.6s ease, z-index 0.3s ease",
    width: "290px",
    height: "500px",
    zIndex,
  };
};
  

  const getLabel = () => {
    switch (activeButton) {
      case "download":
        return "Download Story";
      case "instagram":
        return "Instagram";
      case "tiktok":
        return "TikTok";
      default:
        return "";
    }
  };

  return (
    <Box
      data-model-id="1:595"
      sx={{
        width: "100%",
        minHeight: "1024px",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `
          linear-gradient(rgba(255, 248, 229, 0.8), rgba(255, 248, 229, 0.8)),
          url(/img/why-become-a-vip.png)
        `,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 12.5,
      }}
    >
      {/* Background vectors */}
      <Box
        sx={{
          position: "absolute",
          top: "-544px",
          left: "-962px",
          width: "3374px",
          height: "2058px",
          pointerEvents: "none",
        }}
      >
        <Box
          component="img"
          src="/img/vector-84.svg"
          alt="Vector"
          sx={{
            position: "absolute",
            top: "500px",
            left: "2000px",
            width: "697px",
            height: "461px",
          }}
        />
        <Box
          component="img"
          src="/img/vector-81.svg"
          alt="Vector"
          sx={{
            position: "absolute",
            top: "998px",
            left: "962px",
            width: "630px",
            height: "570px",
          }}
        />
        <Box
          component="img"
          src="/img/vector-83.svg"
          alt="Vector"
          sx={{
            position: "absolute",
            top: "544px",
            left: "962px",
            width: "801px",
            height: "471px",
          }}
        />
        <Box
          component="img"
          src="/img/vector-82.svg"
          alt="Vector"
          sx={{
            position: "absolute",
            bottom: "100px",
            right: "-800px",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

      {/* Header Icons */}
      <Box
        component="img"
        src="/img/InsP.svg"
        alt="Instagram icon"
        sx={{
          position: "absolute",
          top: "206px", 
          left: "264px",
          width: "88px",
          height: "88px",
          transform: "rotate(-15deg)",
          cursor: "pointer"
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "183px",
          right: "277px",
          width: "72px",
          height: "72px",
        }}
      >
        <Box
          component="img"
          src="/img/TTP.svg"
          alt="TikTok icon"
          sx={{
            color: "#7C58BC",
            width: "88px",
            height: "88px",
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.text.headerDark,
          textAlign: "center",
          mb: 13,
        }}
      >
        Spread the word
      </Typography>

      <Stack
        direction="row"
        spacing={8.75}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          px: 2.5,
        }}
      >
        {/* Left Card */}
        <Paper
          elevation={2}
          sx={{
            width: "296px",
            height: "344px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
            px: 2.75,
            py: 4,
            backgroundColor: theme.palette.sand[500],
            borderRadius: "8px",
            transform: `rotate(${cardData[0].rotation}deg)`,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            component="img"
            src={cardData[0].icon}
            alt="Growing Meyd.it"
            sx={{
              width: "72px",
              height: "72px",
              transform: `rotate(${cardData[0].iconRotation}deg)`,
            }}
          />
          <Stack spacing={1.25}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.headerDark }}
            >
              {cardData[0].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.bodyDark }}
            >
              {cardData[0].description}
            </Typography>
          </Stack>
        </Paper>

        {/* Center Interactive Section */}
        <Box sx={{ width: "365px", height: "619px", position: "relative" }}>
          {/* Images */}
          <Box sx={{ position: "relative", width: "400px", height: "550px" }}>
            {images.map((img, index) => (
              <Box
                key={img.id}
                component="img"
                src={img.src}
                alt={img.alt}
                sx={getImageStyles(img.id, index)}
              />
            ))}
          </Box>

          {/* Label */}
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: "508px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "200px",
              fontSize: "14px",
              color: "#7C58BC",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
          >
            {getLabel()}
          </Typography>

          {/* Button Container */}
          <Box
            sx={{
              position: "absolute",
              top: "546px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "270px",
              height: "71px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-2px",
                left: "-2px",
                width: "274px",
                height: "75px",
                borderRadius: "23px",
                border: "2px solid #7C58BC",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            />

            {/* Buttons */}
            <Box sx={{ position: "relative", height: "71px" }}>
              {buttons.map((btn) => (
                <Button
                  key={btn.id}
                  onClick={() => {
                    setActiveButton(btn.id)
                    window.open(btn.url, '_blank');
                  }}
                  onMouseEnter={() => setActiveButton(btn.id)}
                  sx={getButtonStyles(btn.id)}
                >
                  <Box
                    component="img"
                    src={btn.img}
                    alt={`${btn.id} button`}
                    sx={{
                      width: "36px",
                      height: "36px",
                      position: "absolute",
                      filter:
                        activeButton === btn.id
                          ? "#FFFFFF"
                          : "#7C58BC",
                      transition: "filter 0.3s ease",
                    }}
                  />
                </Button>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Right Card */}
        <Paper
          elevation={2}
          sx={{
            width: "296px",
            height: "344px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
            px: 2.75,
            py: 4,
            backgroundColor: theme.palette.sand[500],
            borderRadius: "8px",
            transform: `rotate(${cardData[1].rotation}deg)`,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            component="img"
            src={cardData[1].icon}
            alt="Shareable Design"
            sx={{
              width: "72px",
              height: "72px",
              transform: `rotate(${cardData[1].iconRotation}deg)`,
            }}
          />
          <Stack spacing={1.25}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.headerDark }}
            >
              {cardData[1].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.bodyDark }}
            >
              {cardData[1].description}
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};
