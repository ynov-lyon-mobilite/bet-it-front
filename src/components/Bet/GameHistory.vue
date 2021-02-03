<template>
  <div class="d-flex">
    <div class="d-flex flex-column align-center ma-5">
      <div class="d-flex justify-center">
        <img :src="event.team1.logo" />
      </div>
      <div class="d-flex">
        <div
          v-for="(game, idx) in event.team1.history"
          :key="idx"
          :class="`circle ma-2  ${game.result === 'W' ? 'win' : 'lose'}`"
        ></div>
      </div>
    </div>
    <div class="d-flex flex-column align-center ma-5">
      <div class="d-flex justify-center">
        <img :src="event.team2.logo" />
      </div>
      <div class="d-flex">
        <div
          v-for="(game, idx) in event.team2.history"
          :key="idx"
          :class="`circle ma-2  ${game.result === 'W' ? 'win' : 'lose'}`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>

<style scoped>
img {
  height: 80px;
}

.circle {
  border-radius: 50%;
  border: 1px solid white;
  width: 20px;
  height: 20px;
}

.win {
  background: green;
}

.lose {
  background: red;
}
</style>
