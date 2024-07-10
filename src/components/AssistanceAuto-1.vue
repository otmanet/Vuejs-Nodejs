<template>
  <div class="w-100 d-flex justify-content-center p-2">
    <img src="../assets/Images/Titre.png" alt="" class="img-header" />
  </div>
  <div class="w-100 d-flex justify-content-center">
    <span
      v-html="description1"
      class="text-wrap text-center apply-regular-font"
    ></span>
  </div>
  <div class="w-100 d-flex justify-content-center">
    <img
      src="../assets/Images/Personnage_reflexion.png"
      alt=""
      class="img-person"
    />
  </div>
  <div class="w-100 d-flex justify-content-center">
    <span
      v-html="description2"
      class="text-wrap text-center apply-regular-font"
    ></span>
  </div>
  <div class="w-100 d-flex justify-content-center mt-2">
    <img src="../assets/Images/Presentation_etape.png" alt="" />
  </div>
</template>
<script>
export default {
  created() {},
  name: "AssistanceAuto1",
 
  data() {
    return {
      description1: `
        Chez <span style="color:#6D4AE7 ; font-family: 'Gilmer Bold','Gilmer Regular',sans-serif;">Tutassur</span>, rien de plus simple pour vous assurer. Il vous suffit de nous <br>
       <span style="font-family: 'Gilmer Bold','Gilmer Regular',sans-serif;">envoyer ces quelques informations</span> et nous nous chargeons du reste !
        `,
      description2: `
        Ne vous inquiétez pas, le processus est simple et se déroulera en deux <br> étapes rapides.
        `,
    };
  },
  methods: {},
};
</script>
<style>
@media (max-width: 768px) {
  .img-header {
    width: 80%;
    height: auto;
  }
  .img-person {
    width: 80%;
  }
}
</style>
