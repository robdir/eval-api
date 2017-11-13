const mongoose = require('../config/database')
const { Schema } = mongoose

const classSchema = new Schema({
  students: [studentSchema],
  numberOfStudents: [type: Number],
  batchNum: { type: Number },
  startsAt: { type: Date},
  endsAt: { type: Date }
});

const studentSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  name: { type: String },
  picture: { type: String },  // link to profile URL?
  ratings: [ratingsSchema]
});

const ratingsSchema = new Schema({
  studentRatings: [type: Number],
  comments: [type: String],
  ratedAt: [type: Date, default: Date.now]
});

module.exports = mongoose.model('classes', classSchema)
