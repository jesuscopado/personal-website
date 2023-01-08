module.exports = {
    siteMetadata: {
      description: "Personal page of Jesús Copado",
      locale: "en",
      title: "Jesús Copado",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: false,
          theme: "bright-orange",
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          icon: `content/images/JC_favicon.png`,
        },
      },
    ],
  }
