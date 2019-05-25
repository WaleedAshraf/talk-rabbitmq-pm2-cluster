const pm2Config = {
  "apps": [
    {
      name: 'app',
      script: 'app.js',
      exec_mode: 'cluster_mode',
      instances: '-3' // max - 3
    },
    {
      name: 'smsWorker',
      script: 'smsWorker.js',
      instances: 1
    },
    {
      name: 'emailWorker',
      script: 'emailWorker.js',
      instances: 1
    },
    {
      name: 'imageWorker',
      script: 'imageWorker.js',
      instances: 1
    }
  ]
};

module.exports = pm2Config;