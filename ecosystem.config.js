module.exports = {
  apps: [{
    name: "app",
    script: "./app.js",
    instances: 'max'
  }, {
    name: "api-app",
    script: "./smsWorker.js",
    instances: 1
  }]
}