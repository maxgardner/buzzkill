module.exports = (router) => {
  router.get("/", (req, res) => {
    res.send("index.html");
  });

  return router;
}
