import { IjigenBg } from "~/components/bg/IjigenBg";
import { KousienBg } from "~/components/bg/KousienBg";

import ijigenLogo from "../assets/logo/ijigen.png";
import kousienLogo from "../assets/logo/kousien.png";
import { css } from "styled-system/css";

export type Event = {
  slug: string;
  name: string;
  twitter: string;
  location: string;
  time: string;
  timestamp: Date;
  hashtags: string[];
  dayHashtag: string;
  logo: { src: string };
  headlines: string[];
  detailsUrl: string;
  textStyles: string;
  fontLib: string;
  Background: React.FunctionComponent;
};

export const EVENTS_MAP = {
  ijigen: {
    slug: "ijigen",
    name: "異次元フェス",
    twitter: "@ijigenfes",
    location: "東京ドーム",
    time: "開場15:00／開演17:00（予定）",
    timestamp: new Date("2023-12-09T00:00:00+09:00"),
    hashtags: ["異次元フェス", "アイラブ歌合戦", "idolmaster", "lovelive"],
    dayHashtag: "アイラブ歌合戦_Day",
    logo: ijigenLogo,
    headlines: ["異次元フェス", "アイドルマスター★♥︎ラブライブ！歌合戦"],
    detailsUrl: "https://ijigen-fes.jp/utagassen/",
    textStyles: css({ layerStyle: "ijigen" }),
    fontLib: "@fontsource/mochiy-pop-one",
    Background: IjigenBg,
  },
  ["unitlive2024"]: {
    slug: "unitlive2024",
    name: "ユニット甲子園2024",
    twitter: "@Lovelive_staff",
    location: "Ｋアリーナ横浜",
    time: "15:00開場／16:30開演",
    timestamp: new Date("2024-03-09T00:00:00+09:00"),
    hashtags: ["lovelive", "Aqours", "虹ヶ咲", "Liella", "蓮ノ空", "リンクラ"],
    dayHashtag: "ユニット甲子園Day",
    logo: kousienLogo,
    headlines: ["LoveLive! Series", "Presents", "ユニット甲子園 2024"],
    detailsUrl:
      "https://lovelive-anime.jp/special/live/live_detail.php?p=unitlive2024",
    textStyles: css({ layerStyle: "unitlive2024" }),
    fontLib: "@fontsource/mochiy-pop-one",
    Background: KousienBg,
  },
} satisfies Record<string, Event>;

export const EVENTS = Object.values(EVENTS_MAP);
