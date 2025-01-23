const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
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
        default: 'admin' // Default role is 'user', can be set to 'admin' during signup or when updating a user
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
