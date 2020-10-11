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
          theme: {
            'back': '#edf0f3',
            'front': '#2b3137',
            'lead': '#3971bf',
            'lead-text': '#ffffff',
            'line': '#ced9e3',
            'skill-1': '#8b33ce',
            'skill-2': '#fc8732',
            'skill-3': '#2ebc50',
          },
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