const mongoose = require('mongoose');

const connect = () => {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Connected to MongoDB")
        }).catch(err => {
            console.log(err)
        })
}

const close = () => {
    return mongoose.disconnect();
}

module.exports = {
    connect,
    close
}