const jwt = require("jsonwebtoken");
const secretToken = process.env.RANDOM_TOKEN_SECRET;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretToken);
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    if (req.body.userId && req.body.userId != userId) {
      throw "Unauthorized ID";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error });
  }
};
