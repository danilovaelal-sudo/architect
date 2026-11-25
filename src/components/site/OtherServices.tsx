const otherServices = [
  {
    title: "Редактура рукописи",
    description:
      "Если книга уже написана, можно начать с нескольких глав: на них понятно, где достаточно языковой правки, а где нужно перестроить текст.",
  },
  {
    title: "Курс или рабочая тетрадь на заказ",
    description:
      "Из ваших материалов соберу программу, уроки и задания. Сначала определим, что должен уметь участник после курса, и какие материалы помогут ему к этому прийти. Загрузка уроков на платформу, технический запуск и платежи не входят.",
  },
  {
    title: "Разовый разбор или упаковка проекта",
    description:
      "Можно обсудить тему книги, структуру курса, содержание страницы или формулировку предложения. На старте согласуем конкретный материал, который вы получите. Если для запуска нужны отдельные тексты, договоримся о них заранее. Дальше вы можете работать с этим самостоятельно.",
  },
];

export function OtherServices() {
  return (
    <section id="other-services" className="scroll-mt-20 border-t border-line/70 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Другие задачи</h2>
        <ul className="mt-4 divide-y divide-line">
          {otherServices.map(({ title, description }) => (
            <li key={title} className="py-5 last:pb-0">
              <h3 className="font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
