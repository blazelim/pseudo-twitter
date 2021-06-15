const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "You need to provide a username name",
            trim: true

        },
        email: {
            type: String,
            required: "You need to provide a valid email address!",
            unique: true,
            validate: {
                validator: function(v) {
                  return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                }
            },
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },    
        {
            toJSON: {
                virtuals: true,
                // getters: true
            },
            id: false
        }
);

UserSchema.virtual('friendCount').get(function() {

    return this.friends.length,

});

const User = model ('User', UserSchema)

module.exports = User;