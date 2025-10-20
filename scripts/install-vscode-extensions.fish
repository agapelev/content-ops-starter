#!/usr/bin/env fish
# Install recommended VS Code extensions (fish-compatible)

# List of extensions to install
set extensions \
    imgildev.vscode-astro-generator \
    foxundermoon.next-js \
    nextjs.vscode-nextjs-extension \
    christian-kohler.path-intellisense \
    bradlc.vscode-tailwindcss \
    esbenp.prettier-vscode \
    dbaeumer.vscode-eslint \
    DavidAnson.vscode-markdownlint \
    yzhang.markdown-all-in-one \
    mdx-js.vscode-mdx \
    shd101wyy.markdown-preview-enhanced \
    frenco.vscode-vercel \
    shailen.netlify \
    ivanarjona.cloudflaretunnel \
    alessandrobenassi.cloudflare-devtools \
    cloudflare.cloudflare-workers-bindings-extension \
    eamodio.gitlens

echo "Installing VS Code extensions..."
for ext in $extensions
    echo "-> $ext"
    code --install-extension $ext ^ /dev/null
    or echo "Failed to install $ext — try 'code --install-extension $ext' manually"
end

echo "Done. Restart VS Code if it's running."
