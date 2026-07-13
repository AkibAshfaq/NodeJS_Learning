const mongoose = require('mongoose');

function Connectiontodatabase(url){
    mongoose.connect(url).then(
        console.log('Connected to mongoDB')
    ).catch((err)=>{ console.log('Connection error :', err) });

}

module.exports = {
    Connectiontodatabase,
}