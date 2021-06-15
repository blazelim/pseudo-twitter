const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment's _id field
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: "You need body text for your reaction",
        maxLength: 280
      },
      username: {
        type: String,
        required: "Tell us who is the creator of this wonderful reaction!"
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "Tell us what is your thought!"
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: "Tell us who is the creator of this wonderful thought!"
        },
        // use reaction schema to validate data for a reactopm
        reactions: [ReactionSchema]
    },
    {
        toJson: {
            virtuals: true,
            getters: true
        },
        id:false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;