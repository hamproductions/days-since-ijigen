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
                  ["--delay" as "animationDuration"]: `1s`
                }}
                animation="fade-in"
                animationDuration="3s"
                animationDelay="var(--delay)"
                className={event.textStyles}
                animationFillMode="both"
              >
                {headline}
              </Text>
            );
          })}
          <Text
            style={{
              ["--delay" as "animationDuration"]: `${1}s`
            }}
            animation="fade-in"
            className={event.textStyles}
            animationDelay="var(--delay)"
            animationDuration="2s"
            animationFillMode="both"
            fontSize="5xl"
          >
            Day {getEventDay(event.timestamp)}
          </Text>
        </Stack>
        <styled.a
          className={event.textStyles}
          target="_blank"
          fontSize="xl"
          href={event.detailsUrl}
        >
          詳細
        </styled.a>
        <styled.a
          className={event.textStyles}
          target="_blank"
          fontSize="sm"
          href={`https://twitter.com/intent/tweet?hashtags=${event.dayHashtag}${getEventDay(event.timestamp)},${event.hashtags.join(",")}&url=${encodeURIComponent("https://day-n.ham-san.net/" + event.slug)}`}
        >
          ポストする
        </styled.a>
      </Stack>
    </Stack>
  );
};
