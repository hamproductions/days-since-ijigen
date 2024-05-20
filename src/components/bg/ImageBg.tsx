import { Box, styled } from "styled-system/jsx";

export const ImageBg = (src: string) => () => {
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
      <styled.img
        src={src}
        title="bg"
        h="100vh"
        opacity="45%"
        aspectRatio="16 / 9"
      />
    </Box>
  );
};
