module.exports = (mongoose) => {

  let SessionSchema = new mongoose.Schema({
    data: [],
    habit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit"
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

  let Session = mongoose.model('Session', SessionSchema);
  return Session;
}
