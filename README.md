# Check balance

## Описание

Простое веб-приложение, которое позволяет пользователям:

- добавлять адрес приватного ключа для валюты;
- просматривать балансы;
- редактировать список валют;

Frontend: NextJS, Backend: KoaJS



 ## Запуск

 ### dev

```bash
cp .env.example .env # не обязательно
npm install -g pnpm@9.3.0
pnpm i —frozen-lockfile
pnpm dev
```

#### http://localhost:3000/

 ## Дерево проекта

```text
|─frontend
|   └─ Frontend компоненты проекта
|
└─backend
   └─ src
        ├─ database
        |   └─ методы для ORM sequelize
        ├─ interfaces
        |   └─ типы и интерфейсы
        ├─ services
        |   └─ методы эндпоинтов
        └─ validation
            └─ Zod-схемы
```