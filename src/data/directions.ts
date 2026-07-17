export interface Direction {
  id: string;
  title: string;
  description: string;
  serviceNumbers: string[];
}

export const directions: Direction[] = [
  {
    id: "orientation",
    title: "Разобраться и найти опору",
    description:
      "Если пока непонятно, с чего начать, и хочется сначала разобраться, а не сразу делать.",
    serviceNumbers: ["01", "02"],
  },
  {
    id: "book",
    title: "Создать книгу",
    description:
      "Форматы для тех, кто хочет написать книгу — от разовой консультации до сопровождения всего процесса.",
    serviceNumbers: ["03", "04", "05"],
  },
  {
    id: "product",
    title: "Собрать продукт",
    description:
      "Курс, сайт или тексты для проекта — форматы для тех, кто хочет получить готовый продукт.",
    serviceNumbers: ["06", "07", "08"],
  },
  {
    id: "extra",
    title: "Дополнительная практическая помощь",
    description:
      "Смысл и сценарий часто важнее самого монтажа — помощь с короткими видео.",
    serviceNumbers: ["09"],
  },
];
