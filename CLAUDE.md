# CLAUDE.md

Гид по проекту для Claude Code. Сайт приюта для бездомных собак **«Счастливый питомец»** (Алматы) — лендинг с упором на пожертвования и пристройство животных.

## Команды

```bash
npm run dev       # dev-сервер Vite на :5173 (--host)
npm run build     # tsc -b && vite build  → dist/
npm run preview   # предпросмотр собранного билда
npm run lint      # eslint
```

Отдельный конфиг превью на :5199 есть в `.claude/launch.json` (чтобы не конфликтовать с рабочим dev на :5173).

## Стек

- **Vite 7** + **React 19** + **TypeScript**, плагин `@vitejs/plugin-react-swc`.
- **react-router-dom v7** — клиентский роутинг (SPA).
- **react-slick** + `slick-carousel` — карусель фото.
- **SCSS** (пакет `sass`) — стили покомпонентно.
- `@mui/material` и `@mui/icons-material` установлены, но **в коде не используются** — можно удалить из зависимостей.

Язык интерфейса — **русский**. Валюта — **тенге (₸)**. Регион — Алматы, Казахстан.

## Архитектура

SPA. Точка входа `src/main.tsx` → `BrowserRouter` → `src/App.tsx`.

`App.tsx` оборачивает всё в `DonateProvider`, рендерит `PawCursor`, `ScrollToTop`, `Navbar`, `<Routes>`, `Footer`, `DonateModal`.

## Структура
src/
├── components/     — переиспользуемые UI-компоненты
├── data/           — захардкоженные данные для отображения (вместо backend)
├── pages/          — компоненты страниц/роутов
├── hooks/          — кастомные хуки
├── store/          — глобальный стейт
├── types/          — общие TS-типы
├── utils/          — чистые хелперы
├── styles/         — общие стили

### Стили — три уровня

1. `src/index.css` — глобальный ресет, **CSS-переменные палитры** (`:root`, напр. `--amber`, `--coral`, `--slate`), все `@keyframes`, градиенты `.dog-illo-*`, класс `.reveal`, курсор-лапка. Меняете тему — здесь.
2. `src/styles/shared.scss` — переиспользуемые классы `.btn-primary`, `.btn-secondary`, `.section`, `.section-h2` и т.п. Импортируется **один раз** в `App.tsx`.
3. `src/styles/_variables.scss` — SCSS-переменные (брейкпоинты `$bp-mobile: 768px`, `$bp-tablet: 960px`, шрифты). Компонентные `.scss` подключают их: `@use "..../styles/variables" as *;`.

Каждый компонент имеет свой `.scss` рядом с `.tsx`.

## Контент — data-driven (главное!)

Весь контент (животные, истории, фото, суммы, тексты) вынесен в `src/data/` и `src/config/`. **Чтобы обновить контент — правьте эти файлы, вёрстку трогать не нужно.**

- `src/config/site.ts` — контакты, ссылки, домен и статистика:
  - `SITE` — имя, телефон, `whatsapp`, `instagram`, `kaspi` (ссылка оплаты), `url` (домен для SEO).
  - `STATS` — цифры счётчиков в герое (актуальны по профилю Instagram).
  - `openKaspi()`, `openWhatsApp(text)` — хелперы.
- `src/data/dogs.ts` — каталог подопечных (`dogsData`). Питает `/dogs` **и** мини-карточки в герое. Реальные животные с фото.
- `src/data/stories.ts` — истории спасения (`storiesData`) с фото.
- `src/data/gallery.ts` — фото для карусели на главной.
- `src/data/donations.ts` — суммы (`donationTiers`), блок «куда идут деньги» (`impactItems`), `formatTenge()`.
- `src/data/donateCopy.ts` — пулы «жалостливых» текстов доната (`modalVariants`, `noteVariants`), показываются случайно через `pickRandom()`.

Фото животных лежат в `src/assets/gallery/` (импортируются в data-файлы, попадают в билд с хэшем). **Контент реальный — из Instagram приюта [@happy_pet_almaty](https://www.instagram.com/happy_pet_almaty).** Не выдумывать животных/истории — это настоящий благотворительный сайт.

## Донат-флоу (тонкость)

Все кнопки «Пожертвовать» открывают **`DonateModal`** через контекст `useDonate().openDonate(amount?)`:
1. Модалка с анимацией «лапа добра» и случайным текстом из `donateCopy`.
2. Клик «Перейти к оплате» → открывает `public/donate-redirect.html` в **новом окне** (`window.open`) и закрывает модалку.
3. Прокладка `donate-redirect.html` — статическая HTML-страница с анимацией «дай пять» (лапа шлёпает в экран + большой след) и через ~5 сек `location.replace` на Kaspi.

Важно:
- `window.open` вызывается **синхронно в обработчике клика** — иначе браузер блокирует попап.
- Ссылка Kaspi (`pay.kaspi.kz/pay/hn36faf2`) **фиксированная**: передать сумму в неё нельзя (ограничение Kaspi — плательщик вводит сумму сам). Не пытаться «прикрутить» сумму в URL.
- Кнопка Kaspi/суммы в `donate-redirect.html` должна оставаться в синхроне с `SITE.kaspi`.

Контакт по животным (`DogCard`) — клик по карточке открывает **WhatsApp** (`openWhatsApp`) с предзаполненным текстом.

## Особенности реализации

- **PhotoCarousel** (`pages/HomePage/components/PhotoCarousel`): число видимых слайдов считается **вручную** через `window.innerWidth` (≤768→1, ≤1024→2, иначе 3). Встроенный `responsive` у react-slick на узких экранах работал нестабильно (схлопывал слайды) — не возвращать его.
- **PawCursor** — кастомный курсор-лапка на JS: следует за мышью, «тапает» на кликабельных, прячет нативный курсор. Только для `pointer: fine` (не для тача). Есть и запасной CSS-курсор в `index.css`.
- **Анимации при скролле** — компонент `Reveal` + хук `useInView` (IntersectionObserver).
- **Счётчики** — `useCountUp` (в `HeroSection`), форматирование `toLocaleString("ru-RU")`.
- Заглушки-иллюстрации собак — `DogIllustration` (inline SVG), показываются если у животного нет `photo`.

## SEO и деплой

Хостинг — **IIS** (Windows Server), домен **https://happy-pet-almaty.kz** (HTTPS есть).

- `index.html` — мета, Open Graph, Twitter Card, гео-теги, **JSON-LD** (`AnimalShelter`/`NGO`).
- Уникальные `title`/`description`/`canonical` на каждой странице — хук **`useDocumentMeta`** (вызывается вверху каждой page-компоненты).
- `public/robots.txt`, `public/sitemap.xml`, `public/og-image.jpg`.
- `public/web.config` — **SPA-фолбэк для IIS** (нужен установленный модуль **URL Rewrite**). Внутри закомментировано правило HTTP→HTTPS.
- `public/_redirects` (Netlify/Cloudflare) и `vercel.json` — фолбэк для других хостингов.

Домен зашит в нескольких местах: `src/config/site.ts` (`SITE.url`), `index.html` (canonical, og, JSON-LD), `public/robots.txt`, `public/sitemap.xml`. При смене домена — заменить во всех.

Деплой: `npm run build` → содержимое `dist/` в корень IIS-сайта «Shelter».

## Конвенции

- Комментарии и UI-тексты — на русском.
- Новые страницы: добавить в `ROUTES`, в `<Routes>` в `App.tsx`, вызвать `useDocumentMeta` для SEO.
- Не хардкодить контакты/суммы/тексты в компонентах — всё через `config`/`data`.
- Проверять сборкой: `npm run build` (включает `tsc`) и линтером `npm run lint`.
- Функциональные компоненты + хуки, классовых нет. Экспорт **именованный** (`export const ComponentName`), без `default`.
- Каждый компонент — своя папка с `.tsx` и `.scss` рядом: `StoryCard/StoryCard.tsx` + `StoryCard.scss`. **Без `index.ts` и без CSS-modules** — в проекте их нет. Корневой `className` = kebab-case имени; SCSS подключает переменные через `@use ".../styles/variables" as *;`.
- Пропсы типизируются интерфейсом `ComponentNameProps`.
- Никакой бизнес-логики в JSX — выносить в хуки.
- Скаффолдить новый компонент по этим правилам: скилл **`/new-component <Имя>`** (`.claude/skills/new-component/`, образец — `StoryCard`).
