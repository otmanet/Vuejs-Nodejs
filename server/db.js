const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const connectDB = async () => {
  const db = new sqlite3.Database(process.env.DATABASE, (err) => {
    if (err) {
      console.error("Database connection error:", err.message);
    } else {
      console.log("Connected to the SQLite database.");
    }
  });
  db.run(`CREATE TABLE IF NOT EXISTS assistanceAutos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    date_naissance DATE NOT NULL,
    email TEXT UNIQUE,
    tel VARCHAR(250),
    code_postal VARCHAR(250),
    ville VARCHAR(250) NOT NULL,
    situations_familiales VARCHAR(250) NOT NULL,
    date_mise_circulation DATE NOT NULL,
    modele TEXT NOT NULL,
    marque TEXT NOT NULL,
    immatriculation TEXT NOT NULL
  )`);
};

module.exports = connectDB;
