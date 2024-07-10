<template>
  <div class="w-100 d-flex justify-content-center p-2">
    <img src="../assets/Images/Titre.png" alt="" class="img-header" />
  </div>
  <div class="w-100 d-flex justify-content-center mt-2">
    <img src="../assets/Images/Etape2.png" alt="" class="img-etape" />
  </div>
  <div class="w-100 d-flex justify-content-center mt-2">
    <span
      v-html="description1"
      class="text-wrap text-center apply-regular-font"
    ></span>
  </div>
  <div class="row w-100 d-flex justify-content-center mt-2 mb-2">
    <div class="col-md-6 d-flex justify-content-center">
      <img src="../assets/Images/Voiture.png" alt="" class="img-voiture" />
    </div>
    <div class="col-md-6 d-flex justify-content-center align-items-center">
      <div class="form-card3 w-100 ms-4">
        <div class="w-100 d-flex justify-content-center mt-4">
          <input
            type="date"
            placeholder="  Date de mise en circulation :"
            class="input-form-envoyer"
            v-model="data.date_mise_circulation"
            @input="updateParent"
            :class="{ 'input-error': errors.date_mise_circulation }"
            @blur="handleInputBlur('date_mise_circulation')"
          />
        </div>
        <span
          v-if="errors.date_mise_circulation"
          class="w-100 d-flex justify-content-center text-center span-error"
          >Date de mise en circulation est requis</span
        >
        <div class="w-100 d-flex justify-content-center mt-4">
          <input
            type="text"
            placeholder="  Modèle :"
            class="input-form-envoyer"
            v-model="data.modele"
            @input="updateParent"
            :class="{ 'input-error': errors.modele }"
            @blur="handleInputBlur('modele')"
          />
        </div>
        <span
          v-if="errors.modele"
          class="w-100 d-flex justify-content-center text-center span-error"
          >modele est requis</span
        >
        <div class="w-100 d-flex justify-content-center mt-4">
          <input
            type="text"
            placeholder="  Marque :"
            class="input-form-envoyer"
            v-model="data.marque"
            @input="updateParent"
            :class="{ 'input-error': errors.marque }"
            @blur="handleInputBlur('marque')"
          />
        </div>
        <span
          v-if="errors.marque"
          class="w-100 d-flex justify-content-center text-center span-error"
          >marque est requis</span
        >
        <div class="w-100 d-flex justify-content-center mt-4">
          <input
            type="text"
            placeholder="  Immatriculation :"
            class="input-form-envoyer"
            v-model="data.immatriculation"
            @input="updateParent"
            :class="{ 'input-error': errors.immatriculation }"
            @blur="handleInputBlur('immatriculation')"
          />
        </div>
        <span
          v-if="errors.immatriculation"
          class="w-100 d-flex justify-content-center text-center span-error"
          >immatriculation est requis</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AssistanceAuto3",
  props: {
    sharedData: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    errorsFormTwo: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      data: { ...this.sharedData },
      errors: this.errorsFormTwo,
      description1: `
       Lors de cette souscription, nous aurons également besoin d’informations  <br>
        essentielles concernant votre véhicule. Cela nous permettra de <br>
        personnaliser nos services en fonction de vos besoins spécifiques et de <br>
        vous offrir une expérience sur mesure.
        `,
    };
  },
  watch: {
    "data.date_mise_circulation": {
      handler() {
        this.checkValidationForm("date_mise_circulation");
      },
      deep: true,
    },
    "data.modele": {
      handler() {
        this.checkValidationForm("modele");
      },
      deep: true,
    },
    "data.marque": {
      handler() {
        this.checkValidationForm("marque");
      },
      deep: true,
    },
    "data.immatriculation": {
      handler() {
        this.checkValidationForm("immatriculation");
      },
      deep: true,
    },
  },
  methods: {
    updateParent() {
      this.$emit("update-shared-data", this.data);
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
.form-card3 {
  width: 581px;
  min-height: 416px;
  /* UI Properties */
  background: #f7f5f5 0% 0% no-repeat padding-box;
  border-radius: 13px;
  opacity: 1;
}

.img-voiture {
  width: 77%;
  height: 382px;
}
.input-form-envoyer {
  height: 58px;
  width: 80%;
  position: relative;
  background: #e3e3e3 0% 0% no-repeat padding-box;
  border-radius: 29px;
  opacity: 1;
  border: none;
  padding: 20px;
}
@media (max-width: 768px) {
  .img-voiture {
    width: 80%;
  }
  .form-card3 {
    position: relative;
    width: 95%;
    margin-left: 5px;
  }
}
</style>
