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
              name="nom"
              placeholder="  Nom :"
              class="mb-3 input-form-card"
              v-model="data.nom"
              @input="updateParent"
              :class="{ 'input-error': errors.nom }"
              @blur="handleInputBlur('nom')"
            />

            <span v-if="errors.nom" class="w-100 text-center span-error ms-4"
              >Le nom est requis</span
            >

            <input
              type="text"
              placeholder="  Prénom : "
              v-model="data.pernom"
              @input="updateParent"
              class="input-form-card"
              :class="{ 'input-error': errors.pernom }"
              @blur="handleInputBlur('pernom')"
            />

            <span v-if="errors.pernom" class="w-100 ms-4 text-center span-error"
              >Le prénom est requis</span
            >
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
              v-model="data.date_naissance"
              @input="updateParent"
              :class="{ 'input-error': errors.date_naissance }"
              @blur="handleInputBlur('date_naissance')"
            />
            <span
              v-if="errors.date_naissance"
              class="w-100 ms-4 text-center span-error"
              >La date naissance est requise</span
            >
            <input
              type="text"
              placeholder="  Lieu de naissance :"
              v-model="data.lieu_naissance"
              @input="updateParent"
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
              v-model="data.email"
              :class="{ 'input-error': errors.email }"
              @blur="handleInputBlur('email')"
            />
            <span v-if="errors.email" class="w-100 text-center span-error ms-4"
              >L'adresse mail est requise</span
            >
            <input
              type="text"
              placeholder="  Téléphone : "
              v-model="data.tel"
              @input="updateParent"
              class="input-form-card"
              :class="{ 'input-error': errors.tel }"
              @blur="handleInputBlur('tel')"
            />
            <span v-if="errors.tel" class="w-100 text-center span-error ms-4"
              >Le numéro de téléphone est requis</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-100 d-flex justify-content-center">
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
          <div class="w-100">
            <input
              type="text"
              placeholder="  Code Postal :"
              class="mb-3 input-form-card"
              v-model="data.code_postal"
              @input="updateParent"
              :class="{ 'input-error': errors.code_postal }"
              @blur="handleInputBlur('code_postal')"
            />
            <span
              v-if="errors.code_postal"
              class="w-100 text-center span-error ms-4"
              >Le code postal est requis</span
            >
            <select
              class="input-form-card"
              v-model="data.ville"
              @select="updateParent"
              :class="{ 'input-error': errors.ville }"
              @blur="handleInputBlur('ville')"
            >
              <option value="" disabled selected>Ville :</option>
              <option
                v-for="item in listVille"
                :key="item.id"
                :value="item.ville"
              >
                {{ item.viewValue }}
              </option>
            </select>
            <span v-if="errors.ville" class="w-100 text-center span-error ms-4"
              >La ville est requise</span
            >
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
          <div class="w-100">
            <input
              type="text"
              placeholder="  Profession :"
              class="mb-3 input-form-card"
              v-model="data.profession"
              @input="updateParent"
            />
            <select
              class="input-form-card"
              v-model="data.situations_familiales"
              @select="updateParent"
              :class="{ 'input-error': errors.situations_familiales }"
              @blur="handleInputBlur('situations_familiales')"
            >
              <option value="" disabled selected>Situation familiale :</option>
              <option
                v-for="situation in situationsFamiliales"
                :key="situation.id"
                :value="situation.situation_familiale"
              >
                {{ situation.viewValue }}
              </option>
            </select>
            <span
              v-if="errors.situations_familiales"
              class="w-100 text-center span-error ms-4"
              >situations familiales est requise</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AssistanceAuto2",
  props: {
    sharedData: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    errorsFormOne: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      data: { ...this.sharedData },
      description1: `
      Pour souscrire à notre <span style="color:#6D4AE7 ; font-family: 'Gilmer Bold','Gilmer Regular',sans-serif;">Assistance Auto</span>, nous vous demandons de remplir <br>
       certains <span style="font-family: 'Gilmer Bold','Gilmer Regular',sans-serif;">champs obligatoires.</span> Ces informations sont essentielles pour <br>
        personnaliser nos services en fonction de vos besoins spécifiques.
        `,
      description2: `
        Soyez assuré que nous traitons vos données avec la plus grande confidentialité et dans le respect des réglementations en vigueur <br>
        concernant la protection des données personnelles.
        `,
      situationsFamiliales: [
        {
          id: "Célibataire",
          situation_familiale: "Célibataire",
          viewValue: "Célibataire",
        },
        {
          id: "Marié(e)",
          situation_familiale: "Marié(e)",
          viewValue: "Marié(e)",
        },
        {
          id: "Divorcé(e)",
          situation_familiale: "Divorcé(e)",
          viewValue: "Divorcé(e)",
        },
        {
          id: "Veuf/Veuve",
          situation_familiale: "Veuf/Veuve",
          viewValue: "Veuf/Veuve",
        },
        {
          id: "Pacsé(e)",
          situation_familiale: "Pacsé(e)",
          viewValue: "Pacsé(e)",
        },
        {
          id: "Séparé(e)",
          situation_familiale: "Séparé(e)",
          viewValue: "Séparé(e)",
        },
        {
          id: "Concubinage",
          situation_familiale: "Concubinage",
          viewValue: "Concubinage",
        },
        {
          id: "Autre",
          situation_familiale: "Autre",
          viewValue: "Autre",
        },
      ],
      listVille: [
        { id: "Casablanca", ville: "Casablanca", viewValue: "Casablanca" },
        { id: "Rabat", ville: "Rabat", viewValue: "Rabat" },
        { id: "Marrakech", ville: "Marrakech", viewValue: "Marrakech" },
        { id: "Fes", ville: "Fes", viewValue: "Fes" },
        { id: "Tangier", ville: "Tangier", viewValue: "Tangier" },
        // Add more cities as needed
      ],
      errors: this.errorsFormOne,
    };
  },
  watch: {
    "data.nom": {
      handler() {
        this.checkValidationForm("nom");
      },

      deep: true,
    },
    "data.pernom": {
      handler() {
        this.checkValidationForm("pernom");
      },
      deep: true,
    },
    "data.date_naissance": {
      handler() {
        this.checkValidationForm("date_naissance");
      },
      deep: true,
    },
    "data.email": {
      handler() {
        this.checkValidationForm("email");
      },
      deep: true,
    },
    "data.tel": {
      handler() {
        this.checkValidationForm("tel");
      },
      deep: true,
    },
    "data.code_postal": {
      handler() {
        this.checkValidationForm("code_postal");
      },
      deep: true,
    },
    "data.ville": {
      handler() {
        this.checkValidationForm("ville");
      },
      deep: true,
    },
    "data.situations_familiales": {
      handler() {
        this.checkValidationForm("situations_familiales");
      },
      deep: true,
    },
  },
  methods: {
    updateParent() {
      this.$emit("update-shared-data", {
        data: this.data,
        errors: this.errors,
      });
    },
    checkValidationForm(nameField) {
      this.errors[nameField] = this.data[nameField] == "" ? true : false;
    },

    handleInputBlur(nameField) {
      this.errors[nameField] = this.data[nameField] == "" ? true : false;
    },
  },
};
</script>
<style>
.form-card1 {
  width: 390.5px;
  min-height: 241px;
  background: #f7f5f5 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 13px;
}
.form-card2 {
  width: 591px;
  min-height: 241px;
  background: #f7f5f5 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 13px;
}
.input-form-card {
  min-height: 58px;
  width: 95%;
  position: relative;
  background: #e3e3e3 0% 0% no-repeat padding-box;
  border-radius: 29px;
  opacity: 1;
  border: none;
  padding: 20px;
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
