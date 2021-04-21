<template>
  <v-container>
    <h1 class="text-center">Ajouter un salon</h1>
    <v-form v-model="valid">
      <div class="d-flex justify-center mt-5">
        <div class="d-flex flex-column">
          <v-text-field
            v-model="room.RoomName"
            label="Nom du salon"
            required
            solo
            :rules="rules"
          ></v-text-field>
          <v-autocomplete
            v-model="room.Competition"
            :items="items"
            dense
            filled
            :rules="rules"
            label="Compétition"
          ></v-autocomplete>
          <v-text-field
            @keypress="isNumber($event)"
            v-model="room.NumberOfPlayers"
            label="Nombre de joureur maximal"
            required
            :rules="rules"
            solo
          ></v-text-field>
          <h2 class="text-center ma-5">Date de fin de salon</h2>

          <v-row justify="center">
            <v-date-picker v-model="room.EndRoom"></v-date-picker>
          </v-row>
        </div>
      </div>
      <div class="d-flex justify-center">
        <v-btn
          large
          class="ma-9"
          elevation="2"
          :disabled="!valid"
          @click.prevent="createSalon()"
          >Créer le salon</v-btn
        >
      </div>
    </v-form>
  </v-container>
</template>

<script>
import store from "@/store/index.js";

var now = new Date();

export default {
  store: store,

  data: () => ({
    annee: now.getFullYear(),
    mois: now.getMonth() + 1,
    jour: now.getDate(),
    test: now.getFullYear() + "-0" + (now.getMonth() + 1) + "-" + now.getDate(),

    valid: false,
    room: {
      RoomName: "",
      NumberOfPlayers: null,
      EndRoom: new Date().toISOString().substr(0, 10),
      Competition: "",
      Propriétaire: true,
    },
    items: ["LEC", "LCK", "LPL", "LCS"],
    rules: [(value) => !!value || "Required."],
  }),
  methods: {
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    createSalon() {
      store.dispatch("addRoom", this.room);
      this.$router.push({ name: "Room" });
    },
  },
};
</script>

<style>
h1 {
  font-size: 40px;
}
</style>