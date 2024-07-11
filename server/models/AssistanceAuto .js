// models/AssistanceAuto.js
class AssistanceAuto {
  constructor(db) {
    this.db = db;
  }

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

    const sql = `INSERT INTO TableAssistance (
        nom, prenom, date_naissance, lieu_naissance, email, tel,
        code_postal, ville, situations_familiales, profession,
        date_mise_circulation, modele, marque, immatriculation
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    this.db.run(
      sql,
      [
        nom,
        prenom,
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
        matriculation,
      ],
      function (err) {
        if (err) {
          console.error("Error inserting data:", err.message);
        } else {
          return {
            success: true,
            message: "Ajouté avec succès",
          };
        }
      }
    );
  }
}

module.exports = { AssistanceAuto };
