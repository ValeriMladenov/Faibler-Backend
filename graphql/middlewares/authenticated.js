const jwt = require("jsonwebtoken");

module.exports = context => {
  const authHeader = context.req.headers.authorization;
  let user = null;
  let token = null;
  if (authHeader) {
    /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
    token = authHeader.split("JWT ")[1];
    if (token) {
      user = jwt.verify(token, process.env.JWT_SECRET);
    }
  }

  return {
    token,
    user,
  };
};
