module.exports = {
  
    devServer: {
      watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
      },
    },

    publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
  };