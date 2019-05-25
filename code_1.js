const cluster = require('cluster');
const numCores = require('os').cpus().length;

module.exports.create = () => {

  if (cluster.isMaster) {
    // fork child process for notif/sms/email worker
    global.smsWorker    = require('child_process').fork('./smsWorker');
    global.emailWorker  = require('child_process').fork('./emailWorker');
    global.imageWorker = require('child_process').fork('./imageWorker');

    // fork application workers
    for (var i = 0; i < numCores; i++) {
      var worker = cluster.fork().process;
      console.log('worker started. process id %s', worker.pid);
    }
  } else {
    return cluster;
  }
};