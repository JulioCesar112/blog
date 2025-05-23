const dotenv = require("dotenv")
dotenv.config()

const config = {
  port:process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV || "development",
  host: process.env.HOST || "Holalocalhost:9000",
  db: {
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "root",
    dbName: process.env.DB_NAME 

  },
  jwtsecret: process.env.JWT_SECRET
}


module.exports = config