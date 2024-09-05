import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://fedidev.kr", // replace this with your deployed domain
  author: "Fedi Dev KR",
  profile: "https://fedidev.kr",
  desc: "한국에 거주하거나 한국어를 사용하는 연합우주(fediverse) 개발자들의 모임입니다.",
  title: "한국 페디버스 개발자 모임",
  ogImage: "fedidevkr.svg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "ko", // html lang code. Set this empty and default will be "en"
  langTag: ["ko-KR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/fedidevkr",
    linkTitle: `${SITE.title} GitHub`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contact@fedidev.kr",
    linkTitle: `${SITE.title} 문의 메일`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/B2ABMBpHNA",
    linkTitle: `${SITE.title} Discord 서버`,
    active: true,
  },
];
