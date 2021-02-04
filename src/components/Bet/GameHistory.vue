<template>
  <div class="d-flex flex-column align-center ma-5">
    <div class="d-flex circle logo-wrapper justify-center align-center">
      <img :src="team.logo" />
    </div>
    <div class="d-flex">
      <div
        v-for="(game, idx) in team.history"
        :key="idx"
        :class="`circle result ma-2  ${game.result === 'W' ? 'win' : 'lose'}`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    team: Object,
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 80px;
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
