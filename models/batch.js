const mongoose = require('../config/database')
const { Schema } = mongoose

const ratingsSchema = new Schema({
  colour: { type: Number, min: 0, max: 2 },
  comments: { type: String },
  ratedAt: { type: Date, default: Date.now },
});

const studentSchema = new Schema({
  name: { type: String },
  picture: { type: String },
  ratings: [ratingsSchema],
});

const batchSchema = new Schema({
  batchNum: { type: Number },
  startsAt: { type: Date },
  endsAt: { type: Date },
  students: [studentSchema],
});


module.exports = mongoose.model('batches', batchSchema)
