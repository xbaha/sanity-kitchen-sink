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
                  buildHookId: '60759d2f6c0ccce5442df8a7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ehvb62zi',
                  apiId: '4722011b-8963-4c1b-b723-c82f430cfa32'
                },
                {
                  buildHookId: '60759d2f103f9fd5f7ac6219',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6bnsoayb',
                  apiId: '077b244f-a3c1-499e-8cc6-f2193ae4d932'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xbaha/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6bnsoayb.netlify.app', category: 'apps'}
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
