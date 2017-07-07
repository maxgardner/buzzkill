module.exports = (mongoose) => {

  let HabitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

  let Habit = mongoose.model('Habit', HabitSchema);
  return Habit;
}
