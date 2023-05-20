const mongoose = require('mongoose');

async function Database(){
    await mongoose.connect(`mongodb://localhost:27017/goldusers`)
    .then(()=>{
     console.log('Database connected')
    }).catch(err => console.log(err));
 }
 
 module.exports = Database;