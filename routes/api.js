module.exports = (router, User, Habit, Session) => {
  router.get("/api/habits/:userid", (req, res) => {

    res.send("index.html");
  });

  return router;
}
