module.exports = {
  apps: [
    {
      name: 'dbs-web-3003',

      script: 'node_modules/next/dist/bin/next',

      args: 'start -p 3003',

      cwd: '/var/www/next/dbwebitor',

      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
