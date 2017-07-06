module.exports = (mongoose) => {

  let HabitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });

  let Habit = mongoose.model('Habit', HabitSchema);
  return Habit;
}
