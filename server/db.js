const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();
//  connect with database
const connectDB = new sqlite3.Database(process.env.DATABASE, (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});
// create table inside  database if it's not exist
connectDB.run(`CREATE TABLE IF NOT EXISTS AssistanceTable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
        pernom TEXT NOT NULL,
        date_naissance TEXT NOT NULL,
        lieu_naissance TEXT NOT NULL,
        email TEXT NOT NULL,
        tel TEXT NOT NULL,
        code_postal TEXT NOT NULL,
        ville TEXT NOT NULL,
        situations_familiales TEXT NOT NULL,
        profession TEXT NOT NULL,
        date_mise_circulation TEXT NOT NULL,
        modele TEXT NOT NULL,
        marque TEXT NOT NULL,
        immatriculation TEXT NOT NULL
  )`);

module.exports = connectDB;
