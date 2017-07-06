module.exports = (mongoose) => {

  let UserSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
      type: String,
      required: true
    },
    habit: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit"
    }]
  });

  let User = mongoose.model('User', UserSchema);
  return User;
}
