import { Stack, styled } from "styled-system/jsx";
import type { Event } from "~/utils/events";
import { getEventDay } from "~/utils/getEventDay";
import { Text } from "./ui/text";

export const CountdownTimer = (props: { event: Event }) => {
  const { event } = props ?? {};

  return (
    <Stack flex="1" alignItems="center" justifyContent="center" gap="3" px="4">
      <Stack p="5" alignItems="center" bgColor="white.a8">
        <Stack
          fontSize="3xl"
          fontWeight="400"
          gap="0"
          flexGrow="0"
          textAlign="center"
          alignItems="center"
        >
          {event.headlines.map((headline, idx) => {
            return (
              <Text
                key={idx}
                style={{
                  ["--delay" as "animationDuration"]: `1s`,
                }}
                animation="fade-in"
                animationDuration="3s"
                animationDelay="var(--delay)"
                layerStyle={event.slug}
                animationFillMode="both"
              >
                {headline}
              </Text>
            );
          })}
          <Text
            style={{
              ["--delay" as "animationDuration"]: `${1}s`,
            }}
            animation="fade-in"
            layerStyle={event.slug}
            animationDelay="var(--delay)"
            animationDuration="2s"
            animationFillMode="both"
            fontSize="5xl"
          >
            Day {getEventDay(event.timestamp)}
          </Text>
        </Stack>
        <styled.a
          layerStyle={event.slug}
          target="_blank"
          fontSize="xl"
          href={event.detailsUrl}
        >
          詳細
        </styled.a>
      </Stack>
    </Stack>
  );
};
