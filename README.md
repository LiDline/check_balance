# Check balance

## Описание

Простое веб-приложение, которое позволяет пользователям:

- добавлять адрес приватного ключа для валюты;
- просматривать балансы;
- редактировать список доступных Вам валют;

Frontend: NextJS с daisyUI, Backend: KoaJS с zod, sequelize.

## Запуск

### dev

```bash
cp .env.example .env # не обязательно
npm install -g pnpm@9.3.0
pnpm i —frozen-lockfile
pnpm dev
```

### prod

```bash
cp .env.example .env # не обязательно
npm install -g pnpm@9.3.0
pnpm i —frozen-lockfile
pnpm build
pnpm start
```

#### http://localhost:3000/

## Дерево проекта

```text
|─frontend
|   └─ Frontend компоненты проекта
|
|─backend
|   └─ src
|        ├─ database
|        |   └─ методы для ORM sequelize
|        └─ services
|            └─ методы эндпоинтов
|
└─shared
    └─ Zod-схемы, типы и интерфейсы
```
