<template>
  <div>
    <!-- <v-row id="title" class="flex-row justify-end pa-4">
      <BettiesSold></BettiesSold>
    </v-row> -->
    <MatchList @clicked="sendToCard"></MatchList>
    <!-- <BtnCard></BtnCard> -->
  </div>
</template>

<script>
import MatchList from "@/components/Home/MatchList";
import BettiesSold from "@/components/BettiesSold";
import BtnCard from "@/views/BtnCard";
export default {
  data() {
    return {};
  },
  name: "Home",
  methods: {
    sendToCard(match) {
      console.log(match);
    }
  },
  addToCard() {},
  components: {
    BettiesSold,
    MatchList,
    BtnCard
  }
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
