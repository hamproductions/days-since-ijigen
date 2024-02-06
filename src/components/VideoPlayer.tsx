import { Stack, styled, Box } from "styled-system/jsx";

export const VideoPlayer = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="50%"
      translate="-50%"
      pointerEvents="none"
      zIndex="-1"
      bgColor="black.a1"
      mixBlendMode="darken"
      aspectRatio="16 / 9"
      h="100vh"
    >
      <styled.iframe
        src="https://www.youtube.com/embed/3p7__uAHhdQ?si=pQMe5uzvZa7N3Aan&autoplay=1&controls=0&mute=1&loop=1&start=97&modestbranding=1&showinfo=0&disablekb=1&fs=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        h="100vh"
        opacity="45%"
        aspectRatio="16 / 9"
      />
    </Box>
  );
};
