const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment:{
        type: String,
        required: true
    },
    organization:{
        type: String,
        required: true
    },
    dateCommented:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        default: 'active'
    }
})

module.exports = Comment = mongoose.model("comment", CommentSchema);