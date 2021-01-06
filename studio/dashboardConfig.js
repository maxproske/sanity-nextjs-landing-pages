export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ff550d24534ce6e9b53f7c9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-66zbgb42',
                  apiId: 'b41b81d8-5331-40cf-a70a-796fb7f495a2'
                },
                {
                  buildHookId: '5ff550d21bec7973af4bed44',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p2q263py',
                  apiId: 'a8fef881-1466-4405-b65b-5afe54d09f40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxproske/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p2q263py.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
