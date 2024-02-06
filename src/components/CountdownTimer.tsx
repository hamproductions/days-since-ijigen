import { Stack, styled } from "styled-system/jsx";
import { Text } from "./ui/text";
import { Heading } from "./ui/heading";
import { getIjigenDay } from "~/utils/getIjigenDay";

export const CountdownTimer = () => {
  return (
    <Stack flex="1" alignItems="center" justifyContent="center" gap="3">
      <Stack p="5" alignItems="center" bgColor="white.a4">
        <Stack
          fontSize="3xl"
          fontWeight="400"
          gap="0"
          flexGrow="0"
          textAlign="center"
          alignItems="center"
        >
          <Text
            animation="fade-in"
            animationDuration="3s"
            layerStyle="textGradient"
            animationFillMode="both"
          >
            異次元フェス
          </Text>
          <Text
            animation="fade-in"
            layerStyle="textGradient"
            animationDelay="1s"
            animationDuration="2s"
            animationFillMode="both"
          >
            アイドルマスター★♥︎ラブライブ！歌合戦
          </Text>
          <Text
            animation="fade-in"
            layerStyle="textGradient"
            animationDelay="2s"
            animationDuration="2s"
            animationFillMode="both"
            fontSize="5xl"
          >
            Day {getIjigenDay()}
          </Text>
        </Stack>
        <styled.a
          target="_blank"
          fontSize="xl"
          href="https://ijigen-fes.jp/utagassen/"
        >
          詳細
        </styled.a>
      </Stack>
    </Stack>
  );
};
