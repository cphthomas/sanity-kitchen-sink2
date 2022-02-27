export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '621bff950e28d0763ae9daca',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-u5kk9jci',
                  apiId: 'f40c92ba-48fd-436c-9c23-2646cd32a982'
                },
                {
                  buildHookId: '621bff95a0e0756671525849',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-gjfofd6p',
                  apiId: 'c7d969eb-b70c-4042-9b3f-896c7905b5c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cphthomas/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-gjfofd6p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
