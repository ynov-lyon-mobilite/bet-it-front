<template>
  <main>
    <h1 class="text-center mt-5">Gagnez des betties</h1>
    <div class="mt-16 mb-16 d-flex justify-space-around flex-wrap">
      <v-card class="mx-auto" width="350">
        <div class="d-flex justify-center mt-2">
          <v-img
            contain
            max-height="160"
            max-width="240"
            src="../assets/poro1.png"
          ></v-img>
        </div>

        <h3 class="text-center mt-2">Poro charmant</h3>
        <div class="mt-5 d-flex justify-center">
          <div class="line"></div>
        </div>
        <div class="d-flex justify-space-around mt-16">
          <p>{{ value1 }}/100</p>
          <v-progress-linear
            v-model="value1"
            color="green"
            height="15"
            rounded
          ></v-progress-linear>
        </div>

        <v-card-actions class="mt-5 mb-5 d-flex justify-space-around">
          <v-btn class="btn"> Attaquer </v-btn>
          <v-btn class="btn"> Soigner </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" width="350">
        <div class="d-flex justify-center mt-2">
          <v-img
           contain
            max-height="160"
            max-width="240"
            src="../assets/poro2.png"
          ></v-img>
        </div>
        <h3 class="text-center mt-2">Poro insolent</h3>
        <div class="mt-5 d-flex justify-center">
          <div class="line"></div>
        </div>
        <div class="d-flex justify-space-around mt-16">
          <p>{{ value2 }}/100</p>
          <v-progress-linear
            v-model="value2"
            color="green"
            height="15"
            rounded
          ></v-progress-linear>
        </div>

        <v-card-actions class="mt-5 mb-5 d-flex justify-space-around">
          <v-btn class="btn"> Attaquer </v-btn>
          <v-btn class="btn"> Soigner </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      value1: 50,
      value2:60
    };
  },
};
</script>

<style>
.btn {
  background: linear-gradient(
    90deg,
    var(--v-secondary-base),
    var(--v-info-base),
    var(--v-darkPurple-base)
  );
}
.line {
  border: 1px solid;
  width: 20vw;
}
.v-progress-linear {
  width: 15vw;
}
</style>