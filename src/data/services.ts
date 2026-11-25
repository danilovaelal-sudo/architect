type BillingPeriod = "month" | "project";

interface WorkFormat {
  id: string;
  title: string;
  description: string;
  writer: string;
  result: string;
  billingPeriod: BillingPeriod;
  amount?: number;
  startsAt?: boolean;
  ctaLabel: string;
}

export const workFormats: WorkFormat[] = [
  {
    id: "format-03",
    title: "Пишем вместе",
    description:
      "Вы пишете или диктуете черновик главы. Я работаю прямо в тексте: помогаю выстроить главу, редактирую и оставляю вопросы там, где нужны ваши подробности. В начале месяца договариваемся, какие главы берём и что у вас будет на руках по итогам.",
    writer: "Вы пишете или диктуете, я редактирую.",
    result: "Отредактированные главы в согласованном объёме.",
    billingPeriod: "month",
    amount: 50_000,
    startsAt: true,
    ctaLabel: "Обсудить сопровождение",
  },
  {
    id: "priority-project",
    title: "Приоритетный проект",
    description:
      "Если у книги, курса или большого текста есть срок, в который важно уложиться, начинаем с того, что должно быть готово к этой дате. Я провожу интервью и беру в работу согласованную часть текста. Сразу фиксируем, что вы получите к каждой встрече или сдаче.",
    writer: "По договорённости: редактирую ваш черновик или пишу по материалам.",
    result: "Согласованная часть текста по контрольным датам.",
    billingPeriod: "month",
    amount: 100_000,
    ctaLabel: "Обсудить проект",
  },
  {
    id: "manuscript",
    title: "Рукопись по вашим материалам",
    description:
      "Вы рассказываете, присылаете записи или заметки. Я предлагаю оглавление, пишу пробный фрагмент, затем главы. По ходу работы вы читаете, уточняете факты и отмечаете места, где текст звучит не по-вашему. В конце собираю оговорённый объём в одну рукопись.",
    writer: "Я пишу по вашим рассказам и записям, вы читаете и уточняете.",
    result: "Оглавление, пробный фрагмент и рукопись согласованного объёма.",
    billingPeriod: "project",
    ctaLabel: "Обсудить проект",
  },
  {
    id: "author-project",
    title: "Большой авторский проект",
    description:
      "Если из вашего опыта может получиться, например, книга и программа обучения, я помогу решить, что должно остаться в книге, а что лучше объяснить в уроках и заданиях. Договоримся, какие материалы я готовлю и в какой последовательности.",
    writer: "Я готовлю согласованные материалы на основе вашего опыта.",
    result: "Согласованные тексты и материалы, например книга и учебная программа.",
    billingPeriod: "project",
    ctaLabel: "Обсудить проект",
  },
];

const currency = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

export function formatPrice({ billingPeriod, amount, startsAt }: WorkFormat) {
  if (amount === undefined) {
    return billingPeriod === "month"
      ? "За месяц"
      : "За проект · стоимость рассчитывается по объёму работы";
  }

  const period = billingPeriod === "month" ? "в месяц" : "за проект";
  return `${startsAt ? "от " : ""}${currency.format(amount)} ${period}`;
}
