export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '60cba6227bf01e1b8dfbabae',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-loe-studio',
                  apiId: '9829744c-89eb-4cfc-b6a5-3ae8073e421d'
                },
                {
                  buildHookId: '60cba62313f45800a7434191',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-loe',
                  apiId: '2b70b7f1-59c5-471e-bdda-8b750bd53520'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/skstill/sanity-eleventy-loe',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-loe.netlify.app', category: 'apps'}
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
