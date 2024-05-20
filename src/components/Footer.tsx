import { HStack, Stack, Wrap } from "styled-system/jsx";
import { Text } from "~/components/ui/text";
import { EVENTS_MAP, type Event } from "~/utils/events";
import { getEventDay } from "~/utils/getEventDay";
import { Link } from "./ui/link";

export const Footer = (props: { event: Event }) => {
  const { event } = props ?? {};
  return (
    <Stack gap="1">
      <Wrap
        justifyContent="space-around"
        mx="2"
        bgColor="white.a6"
        py="2"
        rounded="l1"
      >
        {Object.values(EVENTS_MAP).map((e) => {
          return (
            <Link
              href={"https://day-n.ham-san.net/" + e.slug}
              className={event.textStyles}
            >
              #{e.dayHashtag}
              {getEventDay(e.timestamp)}
            </Link>
          );
        })}
      </Wrap>
      <HStack py="2" justifyContent="center" layerStyle={event.slug}>
        <Link href="https://ham-san.net/namecard" target="_blank">
          <Text fontWeight="normal" layerStyle={event.slug}>
            作成：ハムP
          </Text>
        </Link>
        <Text>|</Text>
        <Link
          href="https://github.com/hamproductions/days-since-ijigen"
          target="_blank"
        >
          <Text fontWeight="normal" layerStyle={event.slug}>
            ソース
          </Text>
        </Link>
      </HStack>
    </Stack>
  );
};
