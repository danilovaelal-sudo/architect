export interface Direction {
  id: string;
  title: string;
  description: string;
  serviceNumbers: string[];
}

export const directions: Direction[] = [
  {
    id: "structure",
    title: "Разобрать и структурировать материал",
    description:
      "Аудит, распаковка, поиск главной идеи, карта материала — если пока непонятно, с чего начать.",
    serviceNumbers: ["01", "02"],
  },
  {
    id: "book",
    title: "Собрать книгу",
    description:
      "Концепция, структура, работа с черновиками, сопровождение — форматы для тех, кто хочет написать книгу.",
    serviceNumbers: ["03", "04"],
  },
  {
    id: "product",
    title: "Собрать образовательный или экспертный продукт",
    description:
      "Курс, методическое пособие, тексты, содержание сайта — форматы для тех, кто хочет получить готовый продукт.",
    serviceNumbers: ["06", "07", "08"],
  },
];
