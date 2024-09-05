const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");
const UserModel = require("../models/UserModel");

async function userDetails(req, res) {
  try {
    const token = req.cookies.token || "";

    const user = await getUserDetailsFromToken(token);
    return res.status(200).json({
      message: "User details",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = userDetails;
