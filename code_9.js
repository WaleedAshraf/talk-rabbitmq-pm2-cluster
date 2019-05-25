// exports RabbitMQ connection
const MQ = require('./rabbitmq-config');

MQ.on('sms', (data) => {
  await sendSMS(data); // use twilio or something to send sms
});