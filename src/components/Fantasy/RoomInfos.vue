<template>
  <div class="d-flex justify-space-between">
    <v-card
      color="#1e1e1e"
      class="rounded-pill pa-4 d-flex justify-center align-center"
      ><div class="text-h3">OPEN LEAGUE MYROOM</div>
    </v-card>
    <BettiesSold />
  </div>
</template>

<script>
import BettiesSold from '@/components/BettiesSold';
export default {
  components: {
    BettiesSold
  }
};
</script>

<style></style>
