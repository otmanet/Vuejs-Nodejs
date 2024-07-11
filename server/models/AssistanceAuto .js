// models/AssistanceAuto.js
class AssistanceAuto {
  // constructor
  constructor(db) {
    this.db = db;
  }
  // function fo insert data in table
  async save(data) {
    const {
      nom,
      pernom,
      date_naissance,
      lieu_naissance,
      email,
      tel,
      code_postal,
      ville,
      situations_familiales,
      profession,
      date_mise_circulation,
      modele,
      marque,
      immatriculation,
    } = data;

    const sql = `INSERT INTO AssistanceTable (
        nom,
      pernom,
      date_naissance,
      lieu_naissance,
      email,
      tel,
      code_postal,
      ville,
      situations_familiales,
      profession,
      date_mise_circulation,
      modele,
      marque,
      immatriculation
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      this.db.run(
        sql,
        [
          nom,
          pernom,
          date_naissance,
          lieu_naissance,
          email,
          tel,
          code_postal,
          ville,
          situations_familiales,
          profession,
          date_mise_circulation,
          modele,
          marque,
          immatriculation,
        ],
        function (err) {
          if (err) {
            console.error("Error inserting data:", err.message);
            reject(false);
          } else {
            console.log("added successFully");
            resolve(true);
          }
        }
      );
    });
  }
}

module.exports = { AssistanceAuto };
