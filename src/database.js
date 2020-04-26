
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://eduard:eduard@cluster0-c4ek3.mongodb.net/test?retryWrites=true&w=majority', {

useNewUrlParser : true,
useUnifiedTopology : true 
})
.then(() =>   console.log('DB connected Successful'))
.catch(e => console.log(e));