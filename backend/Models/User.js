const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user' // Default role is 'user', can be set to 'admin' during signup or when updating a user
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
