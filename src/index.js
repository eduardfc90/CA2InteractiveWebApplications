//verification if my website is in the right port
const app = require('./app');

require('./database');
// port 3000 is my server
app.listen(3000);
console.log('Server Available');