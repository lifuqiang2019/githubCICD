module.exports = {
  apps: [
    {
      name: 'github-webhook',
      script: '/srv/vite-app/scripts/webhook-server.cjs',
      exec_mode: 'fork',
      instances: 1,
      env: {
        PORT: '9000',
        HOST: '0.0.0.0',
        WEBHOOK_SECRET: '替换为你的Secret',
        DEPLOY_DIR: '/srv/vite-app',
        DIST_DIR: '/var/www/vite-app',
      },
    },
  ],
}
