const mongoose = require('../config/database')
const { Schema } = mongoose

// Have to check how to link ratings and comments to the current date
const ratingsSchema = new Schema({
  studentRatings: [Number],
  comments: [String],
  ratedAt: [Date]
});

const studentSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  name: { type: String },
  picture: { type: String },
  ratings: [ratingsSchema]
});

const classSchema = new Schema({
  students: [studentSchema],
  numberOfStudents: [Number],
  batchNum: { type: Number },
  startsAt: { type: Date},
  endsAt: { type: Date }
});


module.exports = mongoose.model('classes', classSchema)
