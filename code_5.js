process.on('message', async (data) => {
  await sendSMS(data); // use twilio or something to send sms
});