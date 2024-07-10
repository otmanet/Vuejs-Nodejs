<template>
  <div class="w-100 d-flex justify-content-center p-2">
    <img src="../assets/Images/Titre.png" alt="" class="img-header" />
  </div>
  <div class="w-100 d-flex justify-content-center mt-2">
    <img src="../assets/Images/Etape1.png" alt="" class="img-etape" />
  </div>
  <div class="w-100 d-flex justify-content-center mt-2">
    <span
      v-html="description1"
      class="text-wrap text-center apply-regular-font"
    ></span>
  </div>
  <div class="w-100 d-flex justify-content-center mt-3">
    <span
      v-html="description2"
      class="text-description2 text-wrap text-center"
    ></span>
  </div>
  <div class="w-100 d-flex justify-content-center mt-4">
    <div class="row w-100 flex-wrap d-flex justify-content-center">
      <div
        class="form-card1 flex-wrap d-flex justify-content-center col-md-4 me-2 mb-2"
      >
        <div class="col-md-2 d-flex justify-content-center align-items-center">
          <img src="../assets/Images/Carte_identite.png" alt="" class="ms-2" />
        </div>
        <div class="col-md-10 d-flex justify-content-center align-items-center">
          <div class="ms-3">
            <input
              type="text"
              placeholder="  Nom :"
              class="mb-3 input-form-card"
            />
            <input
              type="text"
              placeholder="  Prénom : "
              class="input-form-card"
            />
          </div>
        </div>
      </div>
      <div
        class="form-card1 flex-wrap d-flex justify-content-center col-md-4 me-2 mb-2"
      >
        <div class="col-md-2 d-flex justify-content-center align-items-center">
          <img src="../assets/Images/Gateau.png" alt="" class="ms-2" />
        </div>
        <div class="col-md-10 d-flex justify-content-center align-items-center">
          <div class="ms-3">
            <input
              type="date"
              placeholder="  Date de naissance :"
              class="mb-3 input-form-card"
            />
            <input
              type="text"
              placeholder="  Lieu de naissance :"
              class="input-form-card"
            />
          </div>
        </div>
      </div>
      <div
        class="form-card1 flex-wrap d-flex justify-content-center col-md-4 me-2 mb-2"
      >
        <div class="col-md-2 d-flex justify-content-center align-items-center">
          <img src="../assets/Images/Telephone.png" alt="" class="ms-2" />
        </div>
        <div class="col-md-10 d-flex justify-content-center align-items-center">
          <div class="ms-3">
            <input
              type="email"
              placeholder="  Adresse e-mail:"
              class="mb-3 input-form-card"
            />
            <input
              type="text"
              placeholder="  Téléphone : "
              class="input-form-card"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-100 d-flex justify-content-center mt-4">
    <div class="row w-100 flex-wrap d-flex justify-content-center">
      <div
        class="form-card2 flex-wrap d-flex justify-content-center col-md-6 me-2 mb-2"
      >
        <div class="col-md-2 d-flex justify-content-center align-items-center">
          <img
            src="../assets/Images/Personnage_telephone.png"
            alt=""
            class="ms-2"
          />
        </div>
        <div class="col-md-10 d-flex justify-content-center align-items-center">
          <div class="">
            <input
              type="text"
              placeholder="  Code Postal :"
              class="mb-3 input-form-card"
            />
            <input
              type="text"
              placeholder="  Ville : "
              class="input-form-card"
            />
          </div>
        </div>
      </div>
      <div class="form-card2 flex-wrap d-flex justify-content-center col-md-6">
        <div class="col-md-2 d-flex justify-content-center align-items-center">
          <img
            src="../assets/Images/Personne_chemise_rouge.png"
            alt=""
            class="ms-2"
          />
        </div>
        <div class="col-md-10 d-flex justify-content-center align-items-center">
          <div class="">
            <input
              type="text"
              placeholder="  Profession :"
              class="mb-3 input-form-card"
            />
            <input
              type="text"
              placeholder="  Situation familiale : "
              class="input-form-card"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AssistanceAuto2",
  data() {
    return {
      description1: `
      Pour souscrire à notre <span style="color:#6D4AE7 ; font-family: 'Gilmer Bold','Gilmer Regular',sans-serif;">Assistance Auto</span>, nous vous demandons de remplir <br>
       certains <span style="font-family: 'Gilmer Bold','Gilmer Regular',sans-serif;">champs obligatoires.</span> Ces informations sont essentielles pour <br>
        personnaliser nos services en fonction de vos besoins spécifiques.
        `,

      description2: `
        Soyez assuré que nous traitons vos données avec la plus grande confidentialité et dans le respect des réglementations en vigueur <br>
        concernant la protection des données personnelles.
        `,
    };
  },
  methods: {},
};
</script>
<style>
.form-card1 {
  width: 382px;
  height: 241px;
  background: #f7f5f5 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 13px;
}
.form-card2 {
  width: 591px;
  height: 241px;
  background: #f7f5f5 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 13px;
}
.input-form-card {
  height: 58px;
  width: 95%;
  position: relative;
  background: #e3e3e3 0% 0% no-repeat padding-box;
  border-radius: 29px;
  opacity: 1;
  border: none;
  padding: 8px;
}
.text-description2 {
  font-size: 13px;
  font-family: "Gilmer Light", "Gilmer Regular", sans-serif;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  border: none;
}

@media (max-width: 768px) {
  .form-card1,
  .form-card2 {
    position: relative;
    width: 95%;
  }
}
</style>
