const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/CrudDB', (err) => {
if(!err)
    console.log("Connected to MongoDB");
else
    console.log('Error in db connection :' + JSON.stringify(err, undefined, 2));
});
module.exports = mongoose;