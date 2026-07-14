# Смысловая мастерская

Сайт-визитка Елены Даниловой: помощь в сборке опыта, идей и историй в книгу, курс, сайт или текст.

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
