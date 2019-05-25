const cluster = require('cluster');
const numCores = require('os').cpus().length;

module.exports.create = () => {

  // if (cluster.isMaster) {
  //   // fork child process for image/sms/email worker
  //   global.smsWorker    = require('child_process').fork('./smsWorker');
  //   global.emailWorker  = require('child_process').fork('./emailWorker');
  //   global.imageWorker = require('child_process').fork('./imageWorker');

  //   // fork application workers
  //   for (var i = 0; i < numCores - 3; i++) {
  //     var worker = cluster.fork().process;
  //     console.log('worker started. process id %s', worker.pid);
  //   }

  //   // if application worker gets disconnected, start new one.
  //   cluster.on('disconnect', (worker) => {
  //     console.error('Worker disconnect: ' + worker.id);
  //     var newWorker = cluster.fork().process;
  //     console.log('Worker started. Process id %s', newWorker.pid);
  //   });

  //   cluster.on('online', (worker) => {
  //     console.log('New worker is online. worker: ' + worker.id);
  //     // master receive messages and then forward it to worker based on type.
  //     worker.on('message', (message) => {
  //       switch (message.type) {
  //         case 'sms':
  //           global.smsWorker.send(message);
  //           break;
  //         case 'email':
  //           global.emailWorker.send(message);
  //           break;
  //         case 'image':
  //           global.imageWorker.send(message);
  //           break;
  //       }
  //     });
  //   });
  // } else {
    global.sms = {
      send: (message) => {
        message.type = 'sms';
        process.send(message); // send message to master
        console.log('sms Message sent from worker.');
      }
    };
    global.email = {
      send: (message) => {
        message.type = 'email';
        process.send(message); // send message to master
        console.log('email Message sent from worker.');
      }
    };
    global.image = {
      send: (message) => {
        message.type = 'image';
        process.send(message); // send message to master
        console.log('image Message sent from worker.');
      }
    };
  //   return cluster;
  // }
};