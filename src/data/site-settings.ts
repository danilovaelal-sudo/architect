const confirmedTelegramUrl = "https://t.me/danilovaelal";

export const siteSettings = {
  authorName: "Елена Бродская",
  contactUrl: "https://vk.me/danilovaelal",
  telegramUrl:
    (import.meta.env.DEV && import.meta.env.VITE_REVIEW_TELEGRAM_URL) || confirmedTelegramUrl,
  email: "Ddanilovaelal@yandex.ru",
  book: {
    title: "Почему после 40-ка не поздно! И есть ли жизнь после монастыря?",
    author: "Елена Данилова",
    year: 2024,
    url: "https://www.litres.ru/book/elena-danilova-32959/pochemu-posle-40-ka-ne-pozdno-i-est-li-zhizn-posle-mo-70398937/",
  },
};

export const authorPhoto = {
  avifSrc: `${import.meta.env.BASE_URL}author/elena.avif`,
  webpSrc: `${import.meta.env.BASE_URL}author/elena.webp`,
  jpgSrc: `${import.meta.env.BASE_URL}author/elena.jpg`,
  alt: siteSettings.authorName,
  width: 900,
  height: 1349,
};
