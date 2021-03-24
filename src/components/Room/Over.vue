<template>
  <div>
    <center>
      <h2>MES SALONS TERMINÉS</h2>
    </center>
    <v-data-table
      :headers="headers"
      :items="endroom"
      :items-per-page="5"
      class="elevation-1 ma-10"
    ></v-data-table>
    <v-row>
      <v-col cols="12" sm="12" md="6" offset-md="3"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Date", value: "date" },
        { text: "Nom", value: "nom" },
        { text: "League", value: "League" },
        { text: "Participant", value: "Participant" },
        { text: "Point gagné", value: "Point" },
      ],
      endroom: [
        {
          date: "30/05",
          nom: "test",
          League: "LEC",
          Participant: "250/300",
          Point: 400,
        },
        {
          date: "30/05",
          nom: "test",
          League: "LEC",
          Participant: "250/300",
          Point: 400,
        },
        {
          date: "30/05",
          nom: "test",
          League: "LEC",
          Participant: "250/300",
          Point: 400,
        },
        {
          date: "30/05",
          nom: "test",
          League: "LEC",
          Participant: "250/300",
          Point: 400,
        },
        {
          date: "30/05",
          nom: "test",
          League: "LEC",
          Participant: "250/300",
          Point: 400,
        },
        {
          date: "30/05",
          nom: "test",
          League: "LEC",
          Participant: "250/300",
          Point: 400,
        },
        {
          date: "30/05",
          nom: "test",
          League: "LEC",
          Participant: "250/300",
          Point: 400,
        },
        {
          date: "30/05",
          nom: "test",
          League: "LEC",
          Participant: "250/300",
          Point: 400,
        },
      ],
    };
  },
};
</script>
