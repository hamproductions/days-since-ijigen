import { HStack } from "styled-system/jsx";
import { Text } from "~/components/ui/text";
import type { Event } from "~/utils/events";
import { Link } from "./ui/link";

export const Footer = (props: { event: Event }) => {
  const { event } = props ?? {};
  return (
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
  );
};
