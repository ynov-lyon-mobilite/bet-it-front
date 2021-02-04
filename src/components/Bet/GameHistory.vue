<template>
  <div class="d-flex">
    <div class="d-flex flex-column align-center ma-5">
      <div class="d-flex justify-center align-center circle logo-wrapper">
        <img :src="event.team1.logo" />
      </div>
      <div class="d-flex">
        <div
          v-for="(game, idx) in event.team1.history"
          :key="idx"
          :class="`circle result ma-2  ${game.result === 'W' ? 'win' : 'lose'}`"
        ></div>
      </div>
    </div>
    <div class="d-flex flex-column align-center ma-5">
      <div class="d-flex justify-center align-center circle logo-wrapper">
        <img :src="event.team2.logo" />
      </div>
      <div class="d-flex">
        <div
          v-for="(game, idx) in event.team2.history"
          :key="idx"
          :class="`circle result ma-2  ${game.result === 'W' ? 'win' : 'lose'}`"
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

<style lang="scss" scoped>
img {
  width: 80px;
}

.circle {
  border-radius: 50%;

  &.logo-wrapper {
    width: 120px;
    height: 120px;
    background: white;
  }

  &.result {
    width: 20px;
    height: 20px;
    border: 1px solid white;

    &.win {
      background: green;
    }

    &.lose {
      background: red;
    }
  }
}
</style>
