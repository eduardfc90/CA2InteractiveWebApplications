//connceting with my mongodb
const MY_MONG = require('mongoose');

MY_MONG.connect('mongodb+srv://eduard:eduard@cluster0-c4ek3.mongodb.net/test?retryWrites=true&w=majority', {
    

useNewUrlParser : true,
useUnifiedTopology : true })
//Database is connecting right
.then(() =>   console.log('DB connected Successful'))

///it is not connecting
.catch(e => console.log(e));