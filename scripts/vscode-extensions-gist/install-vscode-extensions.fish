#!/usr/bin/env fish
# Install recommended VS Code extensions (fish-compatible)

# List of extensions to install
set extensions \
    imgildev.vscode-astro-generator \
    nextjs.vscode-nextjs-extension \
    christian-kohler.path-intellisense \
    bradlc.vscode-tailwindcss \
    esbenp.prettier-vscode \
    dbaeumer.vscode-eslint \
    DavidAnson.vscode-markdownlint \
    yzhang.markdown-all-in-one \
    awxxxxxx.vscode-mdx-checker \
    shd101wyy.markdown-preview-enhanced \
    aarondill.vercel-project-manager-vscode \
    shailen.netlify \
    ivanarjona.cloudflaretunnel \
    alessandrobenassi.cloudflare-devtools \
    cloudflare.cloudflare-workers-bindings-extension \
    eamodio.gitlens

echo "Установка расширений VS Code..."
for ext in $extensions
    echo "-> $ext"
    code --install-extension $ext ^ /dev/null
    or echo "Не удалось установить $ext — запустите 'code --install-extension $ext' вручную"
end

echo "Готово. Перезапустите VS Code, если он запущен."
