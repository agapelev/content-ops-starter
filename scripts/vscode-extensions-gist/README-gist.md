# Настройка VS Code для Astro / Next.js / Tailwind / MDX и платформ деплоя

Эта папка содержит небольшой скрипт установки расширений и примеры настроек рабочей области, рекомендованные для разработки с использованием Astro, Next.js, Tailwind, Markdown/MDX и при деплое на Vercel, Netlify или Cloudflare.

## Содержимое

- `install-vscode-extensions.fish` — скрипт (fish shell) для установки рекомендуемых расширений через `code --install-extension`.
- `extensions.json` — набор рекомендаций (копируй в `.vscode/extensions.json`, чтобы VS Code предлагал коллегам установить те же расширения).
- `settings.json` — пример настроек рабочей области, оптимизированных под Astro/Tailwind/MDX (форматирование при сохранении, дефолтный форматтер, поддержка Tailwind в .astro и т.д.).

## Как использовать

1. Убедитесь, что команда `code` доступна в PATH. В VS Code: Command Palette -> "Shell Command: Install 'code' command in PATH" (если нужно).
1. Сделайте скрипт исполняемым и запустите его (fish):

```fish
chmod +x scripts/vscode-extensions-gist/install-vscode-extensions.fish
./scripts/vscode-extensions-gist/install-vscode-extensions.fish
```

1. Чтобы рекомендовать расширения другим участникам проекта, скопируйте `scripts/vscode-extensions-gist/extensions.json` в корень репозитория в папку `.vscode/extensions.json`.
1. Чтобы применить настройки рабочей области, скопируйте `scripts/vscode-extensions-gist/settings.json` в `.vscode/settings.json`.

## Почему эти расширения

- Astro: генераторы и подсветка синтаксиса ускоряют создание компонентов и страниц.
- Next.js: сниппеты и навигация по маршрутам упрощают разработку страниц и API.
- Tailwind: IntelliSense и подсказки классов уменьшают опечатки и помогают выбирать утилитарные классы.
- Markdown/MDX: линтер, автоматическое создание оглавления и расширенный предпросмотр (диаграммы, формулы).
- Prettier + ESLint: поддержание единого стиля и автоматическое исправление кода.
- Vercel/Netlify/Cloudflare: просмотр статусов деплоев, туннели и инструменты для Workers.
- GitLens: удобный просмотр истории изменений и аннотация строк.

## Примечания и рекомендации

- Скрипт использует `code --install-extension`. Для VS Code Insiders замените на `code-insiders`.
- Некоторые плагины (Vercel/Netlify/Cloudflare) запросят API-токены — следуйте инструкциям расширения для авторизации.
- Если Tailwind настроен нестандартно, укажите путь к `tailwind.config.js` через `tailwindCSS.tailwindConfig` в рабочем `settings.json`.
- При конфликтах форматирования (ESLint vs Prettier) настройте правило в проекте: либо используйте Prettier как основной форматтер, либо ESLint с плагином форматирования (`eslint --fix`).

### Что могу сделать дальше

- Запустить установщик в терминале прямо сейчас.
- Добавить файл `README-vscode-setup-ru.md` в корень репозитория с короткой инструкцией на русском для контрибьюторов.
- Подготовить альтернативный `settings.json` (например: ESLint как основной форматтер).
