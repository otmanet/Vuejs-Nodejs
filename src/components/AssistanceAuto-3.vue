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
      class="text-wrap text-center apply-regular-font "
    ></span>
  </div>
  <div class="row w-100 d-flex justify-content-center mt-2 mb-2">
    <div class="col-12 col-md-6 d-flex justify-content-center">
      <img src="../assets/Images/Voiture.png" alt="" class="img-voiture" />
    </div>
    <div
      class="col-12 col-md-6 d-flex justify-content-center align-items-center"
    >
      <div class="form-card3">
        <div class="w-100 d-flex justify-content-center mt-4">
          <input type="date" placeholder="  Date de mise en circulation :" class="input-form-envoyer" />
        </div>
        <div class="w-100 d-flex justify-content-center mt-4">
          <input type="text" placeholder="  Modèle :" class="input-form-envoyer" />
        </div>
        <div class="w-100 d-flex justify-content-center mt-4">
          <input type="text" placeholder="  Marque :" class="input-form-envoyer" />
        </div>
        <div class="w-100 d-flex justify-content-center mt-4">
          <input type="text" placeholder="  Immatriculation :" class="input-form-envoyer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AssistanceAuto3",
  data() {
    return {
      description1: `
Lors de cette souscription, nous aurons également besoin d’informations  <br>
essentielles concernant votre véhicule. Cela nous permettra de <br>
 personnaliser nos services en fonction de vos besoins spécifiques et de <br>
 vous offrir une expérience sur mesure.
        `,
    };
  },
};
</script>
<style>
.form-card3 {
  width: 581px;
  height: 416px;
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
  padding:8px;
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
