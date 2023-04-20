const home = (req, res) => {
  try {
    return res.render("index");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  home,
};
