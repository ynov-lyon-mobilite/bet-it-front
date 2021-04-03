<template>
  <div>
    <v-row id="title" class="flex-row justify-end pa-4">
      <BettiesSold></BettiesSold>
    </v-row>
    <MatchList></MatchList>
  </div>
</template>

<script>
import MatchList from '@/components/Home/MatchList';
import BettiesSold from '@/components/BettiesSold';

export default {
  name: 'Home',
  components: {
    BettiesSold,
    MatchList
  }
};
</script>

<style>
.rounded-60 {
  border-radius: 60px !important;
}
</style>
