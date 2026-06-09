export type Locale = "kr" | "en";
export const locales: Locale[] = ["kr", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const siteConfig = {
  name: "2027 WYD 수원교구대회 공식 사이트",
  url: "https://www.wyd2027did-suwon.org",
  ogImage: "https://r2-image-server.masterforce999.workers.dev/opengraph-image.png",
};

export const content = {
  kr: {
    lang: "ko",
    metadata: {
      title: "2027 WYD 수원교구대회 공식 사이트",
      description: "수원교구 교구대회(DID) 프로그램, 참가 신청, 홈스테이 및 봉사자 정보를 확인하세요.",
      keywords:
        "2027 WYD 수원교구대회, 수원교구, WYD, DID, 교구대회, 일정, 공지사항, 관련 자료, 참가 신청, 홈스테이, 봉사자, 봉헌하기",
      ogLocale: "ko_KR",
    },
    header: {
      logoAlt: "wyd did 수원",
      nav: {
        home: "홈",
        calendar: "캘린더",
        youtube: "영상",
        notice: "공지",
        site: "사이트",
        faq: "FAQ",
      },
    },
    footer: {
      logoAlt: "wyd did 수원",
      address:
        "경기 의왕시 원골로 48 가톨릭교육문화회관",
      emailLabel: "해외순례자 응대 전용 이메일 주소",
      email: "wyd-sw2@casuwon.or.kr",
      phone: "031-458-4442",
      hours: "운영시간: 월~금 08:30~17:30 (점심시간 12:30~13:30)",
      copyright: "Copyright ⓒ 수원교구 All rights reserved",
    },
    slider: {
      pause: "일시정지 버튼",
      play: "재생 버튼",
      prev: "이전 슬라이드 버튼",
      next: "다음 슬라이드 버튼",
    },
    sections: {
      calendar: "CALENDAR",
      notice: "공지사항",
      youtube: "추천 영상",
      site: "관련 사이트",
      faq: "FAQ",
    },
    notice: {
      backLink: "돌아가기",
    },
    common: {
      prev: "이전",
      next: "다음",
      prevPage: "이전 페이지",
      nextPage: "다음 페이지",
      backToTop: "맨 위로 이동",
      close: "닫기",
      hideFor7Days: "7일간 보지 않기",
    },
    popup: {
      title: "2026 세계청년대회 안내",
      description:
        "수원교구에서 준비하는 세계청년대회 소식을 확인해보세요.",
    },
  },
  en: {
    lang: "en",
    metadata: {
      title: "2027 WYD Suwon DID Official Site",
      description: "2027 WYD Suwon DID schedules, notices, and info.",
      keywords:
        "2027 WYD Suwon DID, Suwon Diocese, WYD, DID, Diocesan Day, schedule, notices, resources, application, homestay, volunteer, offering",
      ogLocale: "en_US",
    },
    header: {
      logoAlt: "wyd did Suwon",
      nav: {
        home: "Home",
        calendar: "Calendar",
        youtube: "Videos",
        notice: "Notice",
        site: "Sites",
        faq: "FAQ",
      },
    },
    footer: {
      logoAlt: "wyd did Suwon",
      address:
        "48, Wongol-ro, Uiwang-si, Gyeonggi-do, Catholic Education & Culture Center",
      emailLabel: "Dedicated email for overseas pilgrims",
      email: "wyd-sw2@casuwon.or.kr",
      phone: "031-458-4442",
      hours: "Hours: Mon-Fri 08:30~17:30 (Lunch 12:30~13:30)",
      copyright: "Copyright ⓒ Diocese of Suwon All rights reserved",
    },
    slider: {
      pause: "Pause",
      play: "Play",
      prev: "Previous slide",
      next: "Next slide",
    },
    sections: {
      calendar: "CALENDAR",
      notice: "Notice",
      youtube: "Featured Videos",
      site: "Related Sites",
      faq: "FAQ",
    },
    notice: {
      backLink: "Go back",
    },
    common: {
      prev: "Previous",
      next: "Next",
      prevPage: "Previous page",
      nextPage: "Next page",
      backToTop: "Back to top",
      close: "Close",
      hideFor7Days: "Hide for 7 days",
    },
    popup: {
      title: "WYD 2026 Information",
      description:
        "Check out the latest news about WYD from the Diocese of Suwon.",
    },
  },
} as const;

export type Content = (typeof content)["kr"];
