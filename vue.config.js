// Enable filesystem polling only when running on Windows or when the project is on a
// Windows mount (WSL). Native Linux systems (like a Raspberry Pi) use inotify and
// don't need polling, which avoids extra CPU usage.
const isWindowsLike = process.platform === 'win32' || Boolean(process.env.WSL_DISTRO_NAME) || process.cwd().startsWith('/mnt/');

module.exports = {
  lintOnSave: false,
  parallel: false,
  chainWebpack: config => {
    config.plugins.delete('fork-ts-checker');
  },
  devServer: {
    host: 'localhost',
    // Conditionally add watchOptions only on Windows/WSL
    ...(isWindowsLike ? {
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    } : {})
  },
  publicPath: process.env.PUBLIC_PATH || '/',
};
