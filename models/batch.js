const mongoose = require('../config/database')
const { Schema } = mongoose 
const studentschema = require('./student').schema


const batchSchema = new Schema({
  batchNum: { type: Number },
  startsAt: { type: Date },
  endsAt: { type: Date },
  students: [studentschema],
});


module.exports = mongoose.model('batches', batchSchema)
