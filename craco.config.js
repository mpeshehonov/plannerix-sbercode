const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#6c0fd9',
              '@link-color': '#6c0fd9',
              '@border-radius-base': '8px',
              '@border-color-base': '#6c0fd9',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
