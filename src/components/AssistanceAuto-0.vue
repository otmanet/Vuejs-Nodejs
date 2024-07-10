<template>
  <div class="container">
    <div class="row w-100">
      <div class="col-md-12">
        <div class="card-style mt-5 mb-2">
          <div class="w-100" v-if="currentStepIndex == 0">
            <div
              class="w-100 d-flex justify-content-center align-content-center p-4"
            >
              <span
                v-html="description"
                class="text-wrap text-center apply-regular-font"
              ></span>
            </div>
            <div
              class="w-100 d-flex justify-content-center align-content-center"
            >
              <video
                autoplay
                class="video"
                src="../assets/Video/camion_1.mp4"
                alt=""
              ></video>
            </div>
          </div>
          <div class="w-100" v-if="currentStepIndex > 0">
            <component
              :is="currentStep"
              :sharedData="sharedData"
              :clickSuivant="clickSuivant"
              :errorsFormOne="errorsFormOne"
              :errorsFormTwo="errorsFormTwo"
              @update-shared-data="updateSharedData"
            >
            </component>
          </div>
          <div
            class="card-button w-100 d-flex justify-content-center align-items-center p-4"
          >
            <button
              class="button-precedent me-3"
              @click="Precedent()"
              v-if="currentStepIndex > 0"
            >
              <span class="span-button"> Précédent </span>
            </button>
            <button
              class="button-suivant"
              @click="Suivant()"
              v-if="!disableButtonEnvoyer"
            >
              <span class="span-button">Suivant</span>
            </button>
            <button
              class="button-suivant"
              @click="Envoyer()"
              v-if="disableButtonEnvoyer"
            >
              <span class="span-button">Envoyer</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100">
      <div class="col-md-12">
        <div class="info">
          <div class="text">
            <span
              v-html="information"
              class="text-wrap apply-regular-light"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AssistanceAuto1 from "./AssistanceAuto-1.vue";
import AssistanceAuto2 from "./AssistanceAuto-2.vue";
import AssistanceAuto3 from "./AssistanceAuto-3.vue";
import AssistanceAutoServices from "../services/AssistanceAutoSevices";
export default {
  name: "AssistanceAuto0",
  components: {
    AssistanceAuto1,
    AssistanceAuto2,
    AssistanceAuto3,
  },

  data() {
    return {
      steps: [
        "AssistanceAuto0",
        "AssistanceAuto1",
        "AssistanceAuto2",
        "AssistanceAuto3",
      ],
      currentStepIndex: 0,
      // increment this object for send in request :
      sharedData: {
        nom: "",
        pernom: "",
        date_naissance: "",
        lieu_naissance: "",
        email: "",
        tel: "",
        code_postal: "",
        ville: "",
        situations_familiales: "",
        profession: "",
        date_mise_circulation: "",
        modele: "",
        marque: "",
        immatriculation: "",
      },
      description: `
        Bienvenue. <br>
        Notre  <span style="font-family: 'Gilmer Bold','Gilmer Regular',sans-serif;">assistance auto</span> est conçu pour vous offrir une tranquillité <br> d’esprit totale lors de vos déplacements. Nous sommes disponibles
        <span style="font-family: 'Gilmer Bold','Gilmer Regular',sans-serif;">24 <br> heures sur 24, 7 jours sur 7, où que vous soyez, mettant</span> ainsi votre<br> sécurité au cœur de notre engagement.
        `,
      information: `
        TUTASSUR GRENOBLE SAS au capital de 3000€ - RCS GRENOBLE 919 676 817 – SIRET 919 676 817 00019 – APE <br>
        6622Z Siège social : 4 Boulevard Gambetta – 38000 Grenoble – Tél. + 33 (0)4.65.84.25.34 - TVA <br>
        Intracommunautaire FR02919676817 Cabinet de courtage en assurance immatriculé à l’ORIAS (www.orias.fr) sous <br>
         le numéro 22005579 Sous le contrôle de l’Autorité de Contrôle Prudentiel et de Résolution (ACPR) – 4 place de<br>
          Budapest 75009 PARIS.
        `,
      // use this boolean for check user have access to get second form
      clickSuivant: true,
      errorsFormOne: {
        nom: false,
        pernom: false,
        date_naissance: false,
        email: false,
        tel: false,
        code_postal: false,
        ville: false,
        situations_familiales: false,
      },
      errorsFormTwo: {
        date_mise_circulation: false,
        modele: false,
        marque: false,
        immatriculation: false,
      },
    };
  },
  computed: {
    //  this function for return nameSpace component by index
    currentStep() {
      return this.steps[this.currentStepIndex];
    },
    // this function return true when get last Step for display button "envoyer"
    disableButtonEnvoyer() {
      return this.currentStepIndex == this.steps.length - 1;
    },
  },
  methods: {
    // function for switch to second step
    //  clickSuivant for check form validation return true for get second form
    Suivant() {
      this.checkValidationFormOne();
      if (this.clickSuivant) {
        this.currentStepIndex += 1;
      }
    },
    // function for switch to previous step
    Precedent() {
      if (this.currentStepIndex == 0) {
        this.currentStepIndex = 0;
      } else {
        this.currentStepIndex -= 1;
        if (this.currentStepIndex === 1) {
          (this.errorsFormOne = {
            nom: false,
            pernom: false,
            date_naissance: false,
            email: false,
            tel: false,
            code_postal: false,
            ville: false,
            situations_familiales: false,
          }),
            Object.assign(this.sharedData, {
              nom: "",
              pernom: "",
              date_naissance: "",
              lieu_naissance: "",
              email: "",
              tel: "",
              code_postal: "",
              ville: "",
              situations_familiales: "",
              profession: "",
            });
        }
        if (this.currentStepIndex === 2) {
          this.errorsFormTwo = {
            date_mise_circulation: false,
            modele: false,
            marque: false,
            immatriculation: false,
          };
          Object.assign(this.sharedData, {
            date_mise_circulation: "",
            modele: "",
            marque: "",
            immatriculation: "",
          });
        }
      }
    },
    updateSharedData(event) {
      if (this.currentStepIndex == 2) {
        this.errorsFormOne = event.errors;
      }
      if (this.currentStepIndex == 3) {
        this.errorsFormTwo = event.errors;
      }
      this.sharedData = event.data;
      if (this.clickSuivant == false && this.currentStepIndex == 2) {
        this.checkValidationFormOne();
      }
      if (this.clickSuivant == false && this.currentStepIndex == 3) {
        this.checkValidationFormTwo();
      }
    },
    checkValidationFormOne() {
      this.clickSuivant = true;
      for (const key in this.errorsFormOne) {
        if (this.sharedData[key] == "" && this.currentStepIndex >= 2) {
          this.clickSuivant = false;
          this.errorsFormOne[key] = true;
        }
      }
    },
    checkValidationFormTwo() {
      this.clickSuivant = true;
      for (const key in this.errorsFormTwo) {
        if (this.sharedData[key] == "" && this.currentStepIndex >= 2) {
          this.clickSuivant = false;
          this.errorsFormTwo[key] = true;
        }
      }
    },

    Envoyer() {
      this.checkValidationFormTwo();
      if (this.clickSuivant == false) {
        return;
      }
      AssistanceAutoServices.postInformation(this.sharedData)
        .then((response) => {
          if (response.data.success) {
            this.errorsFormOne = {
              nom: false,
              pernom: false,
              date_naissance: false,
              email: false,
              tel: false,
              code_postal: false,
              ville: false,
              situations_familiales: false,
            };
            this.errorsFormTwo = {
              date_mise_circulation: false,
              modele: false,
              marque: false,
              immatriculation: false,
            };
            (this.sharedData = {
              nom: "",
              pernom: "",
              date_naissance: "",
              lieu_naissance: "",
              email: "",
              tel: "",
              code_postal: "",
              ville: "",
              situations_familiales: "",
              profession: "",
              date_mise_circulation: "",
              modele: "",
              marque: "",
              immatriculation: "",
            }),
              (this.clickSuivant = true);
            this.currentStepIndex = 0;
            alert(response.data.message);
          }
        })
        .catch((e) => {
          alert("Quelque chose s'est mal passé, veuillez réessayer plus tard.");
          console.log(e);
        });
    },
  },
};
</script>
<style>
.container {
  width: 100%;
  min-height: 100vh;
}
.card-style {
  width: 1267px;
  height: auto;
  background-color: #fff;
  border-radius: 15px;
}

.video {
  width: 77%;
  height: 382px;
}

.card-button .button-suivant {
  background: #6d4ae7 0% 0% no-repeat padding-box;
  border-radius: 29px;
  opacity: 1;
  width: 179px;
  height: 58px;
  color: #fff;
  border: none;
}
.card-button .button-precedent {
  width: 179px;
  height: 58px;
  /* UI Properties */
  background: #b7b7b7 0% 0% no-repeat padding-box;
  border-radius: 29px;
  opacity: 1;
  color: #fff;
  border: none;
}
.info {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info text {
  width: 1070px;
  height: 136px;
}
.apply-regular-font {
  font-family: "Gilmer Regular", sans-serif;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
.apply-regular-light {
  text-align: left;
  font-family: "Gilmer Light", "Gilmer Regular", sans-serif;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}

.span-button {
  text-align: center;
  font-family: "Gilmer Regular", sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.span-error {
  text-align: center;
  color: red;
  font-family: "Gilmer Bold", "Gilmer Regular", sans-serif;
}
.input-error {
  border: 2px solid red;
}
@media (max-width: 768px) {
  .card-style {
    width: 100%;
    height: auto;
  }
  .card-header {
    width: 80%;
  }
  .card-video {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .card-video video {
    width: 80%;
  }
  .info text {
    width: 762px;
  }
  .img-etape {
    width: 80%;
  }
}
</style>
