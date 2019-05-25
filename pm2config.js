
var pm2Config = {
  "apps": [
    {
      "name": "app",
      "script": "app.js",
      "instances": "max"
    },
    {
      "name": "sms",
      "script": "smsWorker.js",
      "instances": 1
    },
  ]
};

module.exports = pm2Config;