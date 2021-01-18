const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'mj-ui/lib': path.resolve(__dirname, '../components/'),
        'mj-ui/esm': path.resolve(__dirname, '../components/'),
        'mj-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};