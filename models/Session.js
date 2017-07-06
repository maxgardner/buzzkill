module.exports = (mongoose) => {

  let SessionSchema = new mongoose.Schema({
    data: [],
    habit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit"
    }
  });

  let Session = mongoose.model('Session', SessionSchema);
  return Session;
}
