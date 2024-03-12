import { Stack, styled, Box } from "styled-system/jsx";
import kosienAd from "../../assets/media/kosien.webm";

export const KousienBg = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="50%"
      translate="-50%"
      pointerEvents="none"
      zIndex="-1"
      bgColor="black.a1"
      filter="brightness(112%)"
      mixBlendMode="normal"
      aspectRatio="16 / 9"
      h="100vh"
    >
     <styled.video src={kosienAd} muted autoPlay h="full" loop/>
    </Box>
  );
};
