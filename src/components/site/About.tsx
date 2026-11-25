const situations = [
  {
    title: "Хочу написать о своей жизни",
    description:
      "Для книги не обязательно прожить героическую жизнь. Иногда хочется записать семейную историю или наконец рассказать о событиях, к которым всё время возвращаешься. И не обязательно сразу решать, будет ли у книги читатель.",
  },
  {
    title: "Хочу передать свой опыт",
    description:
      "Если знания накопились в лекциях, заметках и разговорах, помогу понять, что из этого может стать экспертной книгой, курсом или рабочей тетрадью.",
  },
  {
    title: "У меня уже есть рукопись",
    description:
      "Посмотрю, как связаны главы, где читателю не хватает объяснения, а где лучше оставить текст как есть. Дальше договоримся, нужна ли работа над всей рукописью или прежде стоит разобрать несколько глав.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line/70 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl text-ink md:text-4xl">
          С чем можно прийти
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {situations.map(({ title, description }) => (
            <li key={title} className="rounded-2xl border border-line bg-paper-soft/45 p-6">
              <h3 className="font-display text-xl leading-tight text-ink">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
