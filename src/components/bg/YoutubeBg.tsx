import { Box, styled } from "styled-system/jsx";

export const YoutubeBg =
  (videoId: string, t: number = 0) =>
  () => {
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
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1&start=${t}&modestbranding=1&showinfo=0&disablekb=1&fs=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          h="100vh"
          opacity="45%"
          aspectRatio="16 / 9"
        />
      </Box>
    );
  };
