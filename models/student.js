

const ratingsSchema = new Schema({
    colour: { type: Number, min: 0, max: 2 },
    comments: { type: String },
    ratedAt: { type: Date, default: Date.now },
});

const studentSchema = new Schema({
    batchId: { type: Schema.Types.ObjectId, ref: 'batches' },
    name: { type: String },
    picture: { type: String },
    ratings: [ratingsSchema],
});