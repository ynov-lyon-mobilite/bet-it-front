<template>
  <div>
    <v-row id="title" class="flex-row justify-end pa-4">
      <BettiesSold></BettiesSold>
    </v-row>
    <MatchList></MatchList>
    <Card></Card>
  </div>
</template>

<script>
import MatchList from '@/components/Home/MatchList';
import BettiesSold from '@/components/BettiesSold';
import Card from '@/views/Card';

export default {
  name: 'Home',
  components: {
    BettiesSold,
    MatchList,
    Card
  },
};
</script>

<style>
#title{
    position: relative;
    z-index: 1;
}
.rounded-60 {
  border-radius: 60px !important;
}
</style>
