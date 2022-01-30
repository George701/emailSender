const sendmail = require('sendmail')();
 
const html = `
`;

sendmail({
    from: 'no-reply@yourdomain.com',
    to: '',
    subject: 'test sendmail',
    html: html,
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
