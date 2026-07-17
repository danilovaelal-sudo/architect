export interface Testimonial {
  name: string;
  description: string;
  text: string;
}

/**
 * Отзывы (Этап 11).
 *
 * Массив намеренно пуст — публиковать вымышленные отзывы, имена или
 * цитаты нельзя. Секция «Отзывы» (см. Testimonials.tsx) не отображается
 * на сайте, пока этот массив пуст.
 *
 * TODO (данные от Елены): когда появятся настоящие отзывы, добавьте их
 * сюда объектами вида (пример структуры, не публиковать как есть):
 *
 * export const testimonials: Testimonial[] = [
 *   {
 *     name: "Имя Фамилия",
 *     description: "Автор книги / студентка курса / клиент",
 *     text: "Текст настоящего отзыва.",
 *   },
 * ];
 */
export const testimonials: Testimonial[] = [];
