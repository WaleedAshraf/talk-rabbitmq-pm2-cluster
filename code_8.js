// exports RabbitMQ connection
const MQ = require('./rabbitmq-config');

global.sms = {
  send: (message) => {
    return MQ.publish('sms', message); // publish message on sms queue
    console.log('sms message sent');
  }
};

global.email = {
  send: (message) => {
    return MQ.publish('email', message); // publish message on email queue
    console.log('email message sent');
  }
};

global.image = {
  send: (message) => {
    return MQ.publish('image', message); // publish message on image queue
    console.log('image message sent');
  }
};