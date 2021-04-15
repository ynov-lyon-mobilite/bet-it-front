<template>
  <div>
<!--    <v-row align="center">-->
<!--        <div class="col-9"> <v-app-bar class="rounded-60"></v-app-bar></div>-->
<!--        <div class="col-3">-->
          <BettiesSold></BettiesSold>
<!--        </div>-->
<!--    </v-row>-->
    <MatchList></MatchList>
  </div>
</template>

<script>
// @ is an alias to /src
import MatchList from "@/components/Home/MatchList";
import BettiesSold from "@/components/BettiesSold";

export default {
  name: "Home",
  components: {
    BettiesSold,
    MatchList
  },
};
</script>

<style>

.rounded-60{
  border-radius: 60px !important;
}

</style>
