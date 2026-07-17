/**
 * Централизованные настройки сайта. Заполнять только данными,
 * подтверждёнными Еленой — не публиковать домыслы и предположения.
 */
export const siteSettings = {
  /** Основной канал связи. */
  contactUrl: "https://vk.me/danilovaelal",

  /**
   * TODO (данные от Елены): срок ответа на первое сообщение.
   * Пока не подтверждён — нигде на сайте не публикуется.
   */
  responseTime: undefined as string | undefined,

  /**
   * TODO (данные от Елены): сколько уточняющих вопросов или итераций
   * обычно требуется до выбора формата.
   * Пока не подтверждено — нигде на сайте не публикуется.
   */
  iterationsNote: undefined as string | undefined,

  /**
   * TODO (данные от Елены): детали голосового диалога (платформа,
   * длительность) сверх уже подтверждённого «в течение дня» для
   * консультации «Собрать точку опоры».
   * Пока не подтверждено — нигде на сайте не публикуется.
   */
  voiceDialogDetails: undefined as string | undefined,
};

/**
 * Фотография автора (Этап 10).
 *
 * Файлы лежат в public/author/ (elena.avif, elena.webp, elena.jpg —
 * сгенерированы из портрета, присланного Еленой; исходник сжат до
 * 900px по ширине для производительности).
 */
export const authorPhoto = {
  available: true,
  avifSrc: `${import.meta.env.BASE_URL}author/elena.avif`,
  webpSrc: `${import.meta.env.BASE_URL}author/elena.webp`,
  jpgSrc: `${import.meta.env.BASE_URL}author/elena.jpg`,
  alt: "Елена Данилова",
  width: 900,
  height: 1349,
};
