// stackbit.config.js

const { GitContentSource } = require('@stackbit/cms-git');

const gitSource = new GitContentSource({
    rootPath: __dirname,
    contentDirs: ['content/pages'],
    models: ['PageLayout'],
    contentSourceType: 'git'
});

module.exports = {
    stackbitVersion: '~0.7.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [gitSource],
    models: [
        {
            name: 'PageLayout',
            type: 'page',
            label: 'Page',
            fields: [
                { name: 'title', type: 'string' },
                { name: 'slug', type: 'string' },
                {
                    name: 'sections',
                    type: 'list',
                    items: { type: 'model', models: ['GenericSection'] }
                }
            ]
        },
        {
            name: 'GenericSection',
            type: 'object',
            label: 'Generic Section',
            fields: [
                { name: 'title', type: 'string' },
                { name: 'text', type: 'markdown', optional: true }
            ]
        }
    ]
};

