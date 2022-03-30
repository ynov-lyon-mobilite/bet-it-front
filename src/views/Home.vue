<template>
  <div class="pa-10">
    <MatchList @clicked="sendToCard" />
  </div>
</template>

<script>
import MatchList from "@/components/Home/MatchList";

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
    MatchList
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
