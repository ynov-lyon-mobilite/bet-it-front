<template>
  <v-container>
    <v-row class="d-flex justify-space-between">
      <Top></Top>
      <Betties></Betties>
    </v-row>

    <v-row class="d-flex flex-wrap justify-space-between">
      <TournamentTree></TournamentTree>
      <Teams></Teams>
    </v-row>
  </v-container>
</template>

<script>
import Top from "@/components/AddTournaments/Top.vue";
import Betties from "@/components/AddTournaments/Betties.vue";
import TournamentTree from "@/components/AddTournaments/TournamentTree.vue";
import Teams from "@/components/AddTournaments/Teams.vue";

export default {
  components: { Top, Betties, TournamentTree,Teams },

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


