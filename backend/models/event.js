import mongoose, { Schema } from 'mongoose';

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  artCategory: {
    type: String,
  }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

export default Event;