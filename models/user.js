// dependencies, namely mongoose for mongoDB connection
// passportLocalMongoose(whatever that is)

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})
