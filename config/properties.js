module.exports = {
  DB_URL: process.env.DB_URL || "mongodb://localhost:27017/faibler-backend",
  JWT_SECRET: process.env.JWT_SECRET || "YOURSECRET",
  PORT: process.env.PORT || 8080,
};
