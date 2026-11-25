# Смысловая мастерская

Сайт Елены Бродской, книжного редактора и наставника. Сопровождение авторов, редактура рукописей и написание книг по интервью и голосовым сообщениям.

## Стек

- React + TypeScript + Vite
- Tailwind CSS v4
- UI-компоненты в стиле shadcn/ui (Radix primitives + class-variance-authority)

## Разработка

```bash
npm install
npm run dev      # локальный сервер
npm run build    # прод-сборка
```

## Структура

- `src/components/ui` — базовые UI-примитивы (Button, Card, Badge, Accordion)
- `src/components/site` — секции сайта (Header, Hero, About, Services, HowToOrder, Footer)
- `src/data/services.ts` — контент по форматам услуг и ценам
