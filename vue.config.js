const path = require('path');

const target = process.env.TARGET === 'mobile' ? 'mobile' : 'desktop';

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    config.resolve.alias.set('@base', path.resolve(__dirname, 'src/base'));
    config.resolve.alias.set('@desktop', path.resolve(__dirname, 'src/desktop'));
    config.resolve.alias.set('@mobile', path.resolve(__dirname, 'src/mobile'));
  },
  pages: {
    index: {
      entry: `src/${target}.js`,
      template: `public/index-${target}.html`
    }
  }
};
