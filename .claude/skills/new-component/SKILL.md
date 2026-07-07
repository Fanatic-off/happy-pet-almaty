---
name: new-component
description: Создать новый React-компонент по конвенциям проекта (папка + .tsx + .scss), взяв за образец StoryCard. Использовать, когда просят "создать компонент", "new component", "сделай компонент X".
---

# new-component

Скаффолдит новый компонент в стиле проекта. Эталон — `src/components/StoryCard/`.

## Что спросить/определить

1. **Имя** компонента в **PascalCase** (напр. `DogBadge`). Из него:
   - `kebab` — kebab-case для корневого класса (`DogBadge` → `dog-badge`).
2. **Куда положить**:
   - переиспользуемый UI → `src/components/<Name>/` (по умолчанию);
   - секция конкретной страницы → `src/pages/<Page>/components/<Name>/`.
   Если из запроса неясно — по умолчанию `src/components/`.

## Шаги

1. Создать папку `<target>/<Name>/`.
2. Создать `<Name>.tsx` и `<Name>.scss` по шаблонам ниже.
3. **Важно — путь до variables в `.scss`.** `@use` должен дотянуться до `src/styles/variables`:
   - `src/components/<Name>/` → `@use "../../styles/variables" as *;`
   - `src/pages/<Page>/components/<Name>/` → `@use "../../../../styles/variables" as *;`
   Посчитайте `../` по фактической глубине.
4. Собрать: `npm run build` (включает `tsc`) — убедиться, что типы и SCSS в порядке.

## Шаблон `<Name>.tsx`

```tsx
import "./<Name>.scss";

interface <Name>Props {
  // TODO: пропсы компонента
}

export const <Name> = ({}: <Name>Props) => {
  return (
    <div className="<kebab>">
      {/* TODO: разметка */}
    </div>
  );
};
```

## Шаблон `<Name>.scss`

```scss
@use "<путь>/styles/variables" as *;

.<kebab> {
  // TODO: стили. Палитра — через CSS-переменные:
  // var(--amber) var(--coral) var(--slate) var(--cream) var(--text-mid) ...
  // Шрифты: $font-display (заголовки), $font-body. Брейкпоинты: $bp-mobile, $bp-tablet.
}
```

## Конвенции проекта (соблюдать)

- **Функциональный компонент**, экспорт **именованный** (`export const <Name>`), без `default`.
- Пропсы — через **`interface <Name>Props`**.
- Корневой `className` = **kebab-case** имени; вложенные классы — внутри него в `.scss` (BEM-подобно, как в StoryCard).
- Каждый компонент — **своя папка** с `.tsx` и `.scss` рядом. **Без `index.ts` и без CSS-modules** — в проекте их нет.
- Стили — только **компонентный `.scss`** + переменные из `_variables.scss` и CSS-переменные палитры из `src/index.css`. Общие кнопки/секции (`.btn-primary`, `.section`, `.section-h2`) уже глобальны — переиспользовать, не дублировать.
- Комментарии и UI-тексты — **на русском**.
- **Никакой бизнес-логики в JSX** — выносить в хуки (`src/hooks/`).
- Контент (тексты/суммы/животные/контакты) **не хардкодить** — брать из `src/data/` и `src/config/site.ts`.
- Плавное появление при скролле — обернуть в `<Reveal>` (`src/components/Reveal`).

## Эталон для сверки

`src/components/StoryCard/StoryCard.tsx` и `StoryCard.scss` — держать новый компонент в том же стиле (структура, `interface *Props`, `@use variables`, вложенные классы, `&:hover`, `object-fit: cover` для фото).
