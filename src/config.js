module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  CLIENT_ORIGIN: "https://glampers.vercel.app",
  DATABASE_URL:
    process.env.DATABASE_URL || "postgresql://josephinehan@localhost/glampers",
  JWT_SECRET: process.env.JWT_SECRET || "glampers-jwt",
};
