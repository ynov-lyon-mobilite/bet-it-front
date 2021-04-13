<template>
  <v-card class="pa-5 ma-5" elevation="10" width="250">
    <center>
      <v-btn width="150" class="degrader mb-5"> + Equipe </v-btn>
    </center>
    <v-text-field label="recherche" outlined></v-text-field>
    <v-row class="d-flex justify-space-around">
      <v-chip
        large
        class="ma-4 teamsName"
        v-for="Team in Teams"
        v-bind:key="Team"
        >{{ Team.name }}</v-chip
      >
    </v-row>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      Teams: [
        {
          name: "test1",
        },
        {
          name: "test2",
        },
        {
          name: "test3",
        },
        {
          name: "test4",
        },
        {
          name: "test1",
        },
        {
          name: "test2",
        },
        {
          name: "test3",
        },
        {
          name: "test4",
        },
        {
          name: "test1",
        },
        {
          name: "test2",
        },
        {
          name: "test3",
        },
        {
          name: "test4",
        },
        {
          name: "test1",
        },
        {
          name: "test2",
        },
        {
          name: "test3",
        },
        {
          name: "test4",
        },
      ],
    };
  },
};
</script>
<style scoped>
.degrader {
  background: linear-gradient(
    90deg,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  ) !important;
}
.teamsName {
  font-size: 20px;
}
</style>

