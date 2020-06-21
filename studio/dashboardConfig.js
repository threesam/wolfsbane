export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5eeea7888ae8d0c915e3c3b7',
                  title: 'Sanity Studio',
                  name: 'wolfsbane-studio',
                  apiId: 'f62e7dd6-43b1-4eaf-9353-57fc4890f459'
                },
                {
                  buildHookId: '5eeea7882e59e4bb37cfffb5',
                  title: 'Blog Website',
                  name: 'wolfsbane',
                  apiId: '9a851f6e-8d22-45df-b94f-7b6ba3e45787'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salvatoredangelo/wolfsbane',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://wolfsbane.netlify.app', category: 'apps'}
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
