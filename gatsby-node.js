const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'mj-design/lib': path.resolve(__dirname, '../components/'),
        'mj-design/esm': path.resolve(__dirname, '../components/'),
        'mj-design': path.resolve(__dirname, '../components/'),
      },
    },
  });
};