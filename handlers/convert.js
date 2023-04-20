const { converter } = require("./apis/converter");

const convert = async (req, res) => {
  try {
    if (!req.body.videoLink || req.body.videoLink === "")
      return res.render("index", {
        success: false,
        errMessage: "Please enter video link",
      });
    //
    const splitLink = req.body.videoLink.split("=");
    const furtherSplit = splitLink[1].split("&");
    const id = furtherSplit[0];
    // console.log(id);
    // console.log(await converter(id));
    //
    const response = await converter(id);
    if (response.status === "ok")
      return res.render("index", {
        success: true,
        songTitle: response.title,
        songLink: response.link,
      });
    return res.render("indedx", { success: false, message: response.msg });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  convert,
};
