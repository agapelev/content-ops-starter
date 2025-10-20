# Рекомендации по настройке VS Code для проекта

Короткая инструкция для контрибьюторов: как быстро настроить VS Code для комфортной работы с этим проектом (Astro, Tailwind, MDX и деплой).

1. Установите команду `code` в PATH (если ещё не установлена) через Command Palette в VS Code: "Shell Command: Install 'code' command in PATH".
1. Запустите скрипт установки расширений (fish):

```fish
chmod +x scripts/vscode-extensions-gist/install-vscode-extensions.fish
./scripts/vscode-extensions-gist/install-vscode-extensions.fish
```

1. Скопируйте содержимое `scripts/vscode-extensions-gist/extensions.json` в `.vscode/extensions.json` и `scripts/vscode-extensions-gist/settings.json` в `.vscode/settings.json` для применения рекомендаций в рабочей области.

1. При использовании Vercel/Netlify/Cloudflare: подставьте API-токены в расширениях (см. настройки расширений).

Если нужна помощь — могу запустить установку расширений за вас или настроить альтернативные правила форматирования.
