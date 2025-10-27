# hodwini.net

> Личный технодом Hodwini: фронтенд на React 19 + Vite 7 + Tailwind 4, готовый к масштабированию по всем канонам feature‑sliced architecture.

## TL;DR

- **Ядро:** React 19 (SPA) + react-router-dom 7 + react-helmet-async для SEO.
- **Сборка:** Vite 7, alias `@` → `src`, TypeScript strict build через project references.
- **Стиль:** Tailwind CSS 4 (новый однофайловый импорт) + лёгкие утилитарные классы.
- **Качество:** ESLint 9 (tseslint + react hooks/refresh), `tests/` зарезервирован под Vitest/Playwright.
- **Devflow:** `bun install` (рекомендовано) или `npm install`, скрипты `dev | build | lint | preview`.

## Архитектура

```
src/
├─ app/          # Входная точка приложения (App.tsx, bootstrap)
├─ pages/        # Маршруты уровня страниц (Home, Profile TODO)
├─ features/     # Бизнес-фичи (пока заглушка)
├─ entities/     # Доменные сущности (пока заглушка)
├─ shared/
│   ├─ hooks/    # Общие хуки
│   └─ ui/       # Базовые UI-атомы
└─ assets/       # SVG/статические ассеты
```

- Стиль придерживается **Feature-Sliced Design**: верхний слой `app` подключает роуты, `pages` собирают фичи, слой `features/entities` масштабируется по мере роста домена, `shared` хранит переиспользуемые атомы.
- Аллиас `@` указывает на `src`, поэтому импорт `@/pages/Home` упрощает навигацию.
- Роутинг строится в `src/app/App.tsx` на базе `<BrowserRouter>`, мета-теги управляются `react-helmet-async`.

## Технологический стек

| Категория        | Техно | Заметки |
|------------------|-------|---------|
| View             | `react`, `react-dom` 19 | Поддержка concurrent rendering по умолчанию |
| Роутинг          | `react-router-dom` 7   | Готов к data-router, пока SPA |
| SEO/meta         | `react-helmet-async`   | SSR-friendly, даже без SSR |
| Стили            | `tailwindcss` 4 + `@tailwindcss/vite` | Новый однофайловый импорт `@import "tailwindcss";` |
| Сборка           | `vite` 7 + `@vitejs/plugin-react` | Fast Refresh, env из `.env.*` |
| Линтинг          | `eslint` 9 + `typescript-eslint` | Конфиг в `eslint.config.js`, игнорирует `dist/` |
| Язык             | `typescript` 5.9      | Общий `tsconfig.json`, саб-конфиги `tsconfig.app.json`, `tsconfig.node.json` |

## Скрипты

| Команда            | Описание |
|--------------------|----------|
| `bun install` / `npm install` | Установка зависимостей. `bun.lock` уже лежит в репо. |
| `bun run dev`      | Dev-сервер Vite с HMR (по умолчанию `http://localhost:5173`). |
| `bun run build`    | `tsc -b` для типизации + `vite build` → `dist/`. |
| `bun run preview`  | Локальный предпросмотр собранного билда. |
| `bun run lint`     | ESLint по `ts/tsx` с TS и React правилами. |

> Используешь `npm`/`pnpm` — просто замени префикс, скрипты те же.

## Старт разработки

```bash
git clone git@github.com:hodwini/hodwini.net.git
cd hodwini.net
bun install        # либо npm install
bun run dev
```

Открывай `http://localhost:5173`. Tailwind 4 грузится автоматически через Vite-плагин, отдельная конфигурация пока не нужна.

## SEO и контент

- `src/pages/Home/index.tsx` — эталон: `<Helmet>` задаёт `title`, `description`, OG- и Twitter-теги.
- Изображения для `og:image` кладём в `public/` (по умолчанию `public/og-image.png`).
- Каждая страница обязана описывать себя через Helmet, чтобы SEO не страдал при дальнейшем росте маршрутов.

## Тесты

- Каталог `tests/` зарезервирован. План: Vitest (unit) + Playwright (e2e) или Cypress.
- Пока тестов нет — не забудь добавить smoke-тесты, когда появятся первые компоненты/фичи.

## Infra / Docker

- `Dockerfile`, `docker-compose.yml` пока пустые. Как только определимся с целевой средой (static hosting, edge, кастом Nginx), заполним.
- Vite билд — статический, поэтому можно деплоить на любой CDN (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront).

## Дорожная карта

1. **Profile page** (`src/pages/Profile`) — страница профиля/портфолио.
2. **Features layer** — выделить первые фичи (например, `feature/hero`, `feature/contact-form`).
3. **UI Kit** — оформить `shared/ui` (кнопки, типографика, layout helpers).
4. **Design tokens** — Tailwind config с кастомной палитрой и типографикой.
5. **Testing setup** — Vitest + React Testing Library, интеграция в CI.
6. **CI/CD** — GitHub Actions: lint + test + build + deploy.

## Контакт

Проект ведёт Hodwini. Issues/PRs приветствуются — придерживаемся гиковского, но аккуратного стиля кода: читаемость > магия, архитектурная дисциплина > костыли.
