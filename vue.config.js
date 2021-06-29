module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup',
    },
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js',
        },
      },
      manifestTransformer: (manifest) => {
        return manifest;
      },
    },
  },
  configureWebpack: {
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: 'js/[name].js',
    },
  },
};
