const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createPool({
  connectionLimit: 100, // 100 tane bağlantı oluşturabilir
  host: process.env.DB_HOST,
  user: "admin",
  password: process.env.DB_PASSWORD,
  database:"lab_db"
});

module.exports = connection;