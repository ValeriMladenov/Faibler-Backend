const { INVALID_REGEX } = require("../../const/regex");

module.exports = req => {
  if (!req.body.variables) return req;

  Object.keys(req.body.variables).forEach(k => {
    req.body.variables[k].replace(INVALID_REGEX, "");
  });

  return req;
};
