let bcrypt = require('bcrypt');

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
    }
  });

  UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
  };

  function saveHook() {
    const user = this;

    return bcrypt.genSalt((saltError, salt) => {
      if (saltError) {
        return saltError;
      }

      return bcrypt.hash(user.password, salt, (hashError, hash) => {
        if (hashError) {
          return hashError;
        }

        // Store the hash string in the database
        user.password = hash;
        return;
      });
    });
  }

  UserSchema.pre('save', saveHook);

  let User = mongoose.model('User', UserSchema);
  return User;
}
