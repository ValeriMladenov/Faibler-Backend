const { INVALID_REGEX } = require("../../const/regex");

module.exports = req => {
  for (const k in req.body.variables) {
    req.body.variables[k].replace(INVALID_REGEX, '');
  }

  return req
};
