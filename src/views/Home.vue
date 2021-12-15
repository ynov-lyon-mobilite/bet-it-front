<template>
  <div>
    <v-row id="title" class="flex-row justify-end pa-4">
    </v-row>
    <MatchList @clicked="sendToCard"></MatchList>
    <Card />
  </div>
</template>

<script>
import MatchList from "@/components/Home/MatchList";
import Card from "@/views/Card";
import BtnCard from "@/views/BtnCard";

export default {
  data() {
    return {
      match,
    }
  },
  name: "Home",
  methods: {
    sendToCard(match) {
      console.log(match);
    },
  },
  addToCard() {
    
  },
  components: {
    MatchList,
    Card,
    BtnCard,
  },
};
</script>

<style>
#title {
  position: relative;
  z-index: 1;
}
.rounded-60 {
  border-radius: 60px !important;
}
</style>
