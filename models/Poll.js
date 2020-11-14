import mongoose from 'mongoose';

const PollSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
        },
    option1: {
        type: String,
        default: "1"
    },
    option2: {
        type: String,
        default: "2"
    },
    
    users: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Poll = mongoose.model('Poll', PollSchema);

export default Poll;
