module.exports = (mongoose) => {
  mongoose.connect(require('../config/keys').db);
  const db = mongoose.connection;

  // Show any mongoose errors
  db.on("error", (error) => {
    console.log("Mongoose Error: ", error);
  });

  // Once logged in to the db through mongoose, log a success message
  db.once("open", () => {
    console.log("Mongoose connection successful.");
  });
}
