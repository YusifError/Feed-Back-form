const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
      type: String,
      require: true,  
    },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;