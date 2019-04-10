const path = require('path')
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')
const postcsssimplevars = require('postcss-simple-vars')
const postcssPlugins = [
  postcsssimplevars, tailwind('./tailwind.js')
 
]

//if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())


module.exports = {
  siteName: 'Philosophy',
  titleTemplate: `%s - Gridsome`,
 css: {
    loaderOptions: {
      postcss: {
        // options here will be passed to postcss-loader
       
          plugins: postcssPlugins,
      },
    }
  },



  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    }
  ]
}
