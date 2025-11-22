module.exports = {
  lintOnSave: false,
  parallel: false,
  chainWebpack: config => {
    config.plugins.delete('fork-ts-checker');
  },
  devServer: {
    host: 'localhost'
  }
};
