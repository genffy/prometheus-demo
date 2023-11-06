const { name } = require('./package.json')
module.exports = {
  apps: [
    {
      name,
      port: '3002',
      instances: 'max', // set 10 for testing
      script: './.output/server/index.mjs',
      autorestart: true,
      watch: true,
      exec_mode: 'cluster',
      max_memory_restart: '1G',
    }
  ]
}
