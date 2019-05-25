const cluster = require('cluster');

module.exports.create = () => {

  if (cluster.isMaster) {
    // fork child process for notif/sms/email worker
    global.smsWorker    = require('child_process').fork('./smsWorker');
    global.emailWorker  = require('child_process').fork('./emailWorker');
    global.imageWorker = require('child_process').fork('./imageWorker');
  }
};