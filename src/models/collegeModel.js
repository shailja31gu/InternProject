const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: "name is require",
        trim: true
    },

    fullName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    logoLink: {
        type: String,
        url: "https://functionup.s3.ap-south-1.amazonaws.com/colleges/svnit.jpg"
        }, 
    isDeleted: {
        type: Boolean,
        default: false
}
},{timestamps: true})


module.exports = mongoose.model('College', collegeSchema)
