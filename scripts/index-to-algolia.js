import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import algoliasearch from 'algoliasearch';

const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME);

const contentDirs = [
    path.join(process.cwd(), 'content/pages'),
    path.join(process.cwd(), 'content/pages/blog'),
    path.join(process.cwd(), 'content/pages/guides')
];

function collectMarkdownFiles(dirs) {
    const files = [];
    for (const dir of dirs) {
        if (!fs.existsSync(dir)) continue;
        for (const file of fs.readdirSync(dir)) {
            if (file.endsWith('.md')) {
                files.push(path.join(dir, file));
            }
        }
    }
    return files;
}

async function run() {
    const files = collectMarkdownFiles(contentDirs);
    const records = [];

    for (const filePath of files) {
        console.log('📄 Обрабатывается файл:', filePath);

        const raw = fs.readFileSync(filePath, 'utf-8');

        let data, content;
        try {
            const parsed = matter(raw);
            data = parsed.data;
            content = parsed.content;
        } catch (error) {
            console.warn(`⚠️ Ошибка парсинга frontmatter в файле ${filePath}:`, error.message);
            continue;
        }

        const slug = data.slug || path.basename(filePath).replace(/\.md$/, '');
        const title = data.title || 'Без названия';

        records.push({
            objectID: slug,
            title,
            content,
            slug,
            author: data.author || null,
            tags: data.tags || [],
            date: data.date || null
        });
    }

    try {
        await index.saveObjects(records);
        console.log(`✅ Загружено ${records.length} записей в Algolia`);
    } catch (error) {
        console.error('❌ Ошибка при загрузке в Algolia:', error);
    }
}

run();
