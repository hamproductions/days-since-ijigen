import { KousienBg } from "~/components/bg/KousienBg";

import ijigenLogo from "../assets/logo/ijigen.png";
import kousienLogo from "../assets/logo/kousien.png";
import hasu2l from "../assets/logo/hasu2l.png";
import hasu4l from "../assets/logo/hasu4l.webp";

import { css } from "styled-system/css";
import { ImageBg } from "~/components/bg/ImageBg";
import { YoutubeBg } from "~/components/bg/YoutubeBg";

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

    Background: YoutubeBg("3p7__uAHhdQ", 97)
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

    Background: KousienBg
  },
  ["hasu2ndchiba"]: {
    slug: "hasu2ndchiba",
    name: "ラブライブ！蓮ノ空女学院スクールアイドルクラブ 2nd Live Tour 〜Blooming with ○○○〜 千葉公演",
    twitter: "@hasunosora_SIC",
    location: "幕張メッセ 国際展示場 1～3ホール",
    time: "16:00開場／17:00開演",
    timestamp: new Date("2024-04-20T00:00:00+09:00"),
    hashtags: ["蓮ノ空", "リンクラ", "lovelive"],
    dayHashtag: "蓮ノ空2nd千葉Day",
    logo: hasu2l,
    headlines: [
      "ラブライブ！蓮ノ空女学院スクールアイドルクラブ",
      "2nd Live Tour 〜Blooming with ○○○〜",
      "千葉公演"
    ],
    detailsUrl:
      "https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=BLW",
    textStyles: css({ layerStyle: "hasu2nd" }),
    Background: ImageBg(hasu2l.src)
  },
  ["hasu2ndhyougo"]: {
    slug: "hasu2ndhyougo",
    name: "ラブライブ！蓮ノ空女学院スクールアイドルクラブ 2nd Live Tour 〜Blooming with ○○○〜 兵庫公演",
    twitter: "@hasunosora_SIC",
    location: "神戸ワールド記念ホール",
    time: "16:00開場／17:00開演",
    timestamp: new Date("2024-05-18T00:00:00+09:00"),
    hashtags: ["蓮ノ空", "リンクラ", "lovelive"],
    dayHashtag: "蓮ノ空2nd兵庫Day",
    logo: hasu2l,
    headlines: [
      "ラブライブ！蓮ノ空女学院スクールアイドルクラブ",
      "2nd Live Tour 〜Blooming with ○○○〜",
      "兵庫公演"
    ],
    detailsUrl:
      "https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=BLW",
    textStyles: css({ layerStyle: "hasu2nd" }),
    Background: ImageBg(hasu2l.src)
  },
  ["hasu4thishikawa"]: {
    slug: "hasu4thishikawa",
    name: "ラブライブ！蓮ノ空女学院スクールアイドルクラブ 4th Live Dream ～Bloom, The Dream Believers～ ＜石川公演＞",
    twitter: "@hasunosora_SIC",
    location: "石川・石川県産業展示館（4号館）",
    time: "15:30開場／16:30開演",
    timestamp: new Date("2025-04-26T00:00:00+09:00"),
    hashtags: ["蓮ノ空", "リンクラ", "lovelive"],
    dayHashtag: "蓮ノ空4th石川Day",
    logo: hasu4l,
    headlines: [
      "ラブライブ！蓮ノ空女学院スクールアイドルクラブ",
      "4th Live Dream ～Bloom, The Dream Believers～",
      "石川公演"
    ],
    detailsUrl:
      "https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=BTDB",
    textStyles: css({ layerStyle: "hasu4th" }),
    Background: YoutubeBg("cydhu22mMAE", 72)
  },
  ["hasu4thhyougo"]: {
    slug: "hasu4thhyougo",
    name: "ラブライブ！蓮ノ空女学院スクールアイドルクラブ 4th Live Dream ～Bloom, The Dream Believers～ ＜兵庫公演＞",
    twitter: "@hasunosora_SIC",
    location: "兵庫・GLION ARENA KOBE",
    time: "16:00開場／17:00開演",
    timestamp: new Date("2025-05-31T00:00:00+09:00"),
    hashtags: ["蓮ノ空", "リンクラ", "lovelive"],
    dayHashtag: "蓮ノ空4th兵庫Day",
    logo: hasu4l,
    headlines: [
      "ラブライブ！蓮ノ空女学院スクールアイドルクラブ",
      "4th Live Dream ～Bloom, The Dream Believers～",
      "兵庫公演"
    ],
    detailsUrl:
      "https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=BTDB",
    textStyles: css({ layerStyle: "hasu4th" }),
    Background: YoutubeBg("_Eo5v85W8tw", 72)
  },
  ["hasu4th102thgraduation"]: {
    slug: "hasu4th102thgraduation",
    name: "ラブライブ！蓮ノ空女学院スクールアイドルクラブ 4th Live Dream ～Bloom, The Dream Believers～ ＜102期卒業公演＞",
    twitter: "@hasunosora_SIC",
    location: "神奈川・Ｋアリーナ横浜",
    time: "15:30開場／17:00開演",
    timestamp: new Date("2025-06-07T00:00:00+09:00"),
    hashtags: ["蓮ノ空", "リンクラ", "lovelive"],
    dayHashtag: "蓮ノ空4th卒業Day",
    logo: hasu4l,
    headlines: [
      "ラブライブ！蓮ノ空女学院スクールアイドルクラブ",
      "4th Live Dream ～Bloom, The Dream Believers～",
      "102期卒業公演"
    ],
    detailsUrl:
      "https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=BTDB",
    textStyles: css({ layerStyle: "hasu4th" }),
    Background: YoutubeBg("3gFA59hAmrI", 230)
  }
} satisfies Record<string, Event>;

export const EVENTS = Object.values(EVENTS_MAP);
