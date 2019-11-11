const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    organization:{
        type: String,
        required: true
    },
    lastLogin:{
        type: Date,
        default: Date.now
    },
    avatarUrl:{
        type: String,
        default: 'user avatar'
    },
    followers:{
        type: Number,
        default: 0
    },
    following:{
        type: Number,
        default: 0
    }
})

module.exports = Member = mongoose.model("member", MemberSchema);