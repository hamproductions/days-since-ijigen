import { Stack, styled } from "styled-system/jsx";
import { Text } from "./ui/text";
import { Heading } from "./ui/heading";
import { getIjigenDay } from "~/utils/getIjigenDay";

export const CountdownTimer = () => {
  return (
    <Stack flex="1" alignItems="center" justifyContent="center" gap="3">
      <Stack p="5" alignItems="center" bgColor="white.a4">
        <Heading
          as="h1"
          fontSize="3xl"
          fontWeight="400"
          layerStyle="textGradient"
          textAlign="center"
        >
          異次元フェス
          <br />
          アイドルマスター★♥︎ラブライブ！歌合戦
          <br />
          <styled.span fontSize="5xl">Day {getIjigenDay()}</styled.span>
        </Heading>
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
