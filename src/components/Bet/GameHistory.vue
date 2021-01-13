<template>
  <div class="mx-4 d-flex flex-column align-center">
    <div class="d-flex justify-center">
      <img :src="team.logo" />
    </div>
    <div class="d-flex">
      <div
        v-for="(game, idx) in team.history"
        :key="idx"
        :class="`circle ma-2  ${game.result === 'W' ? 'win' : 'lose'}`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    team: Object
  }
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
