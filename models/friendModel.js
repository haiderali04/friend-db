const mongoose = require('mongoose');


const mySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Friend must have a title'],
        trim: true,
      },
})

const Friend = mongoose.model("Friend", mySchema);
module.exports = Friend ;


