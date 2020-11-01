<template>
  <div>
    <video
      class="vw-100 vh-100"
      src="../assets/video.webm"
      autoplay
      loop
      playsinline
      muted
    ></video>
    <div
      class="logo-wrapper text-center vh-100 d-flex align-center justify-center"
    >
      <div class="text-h3 text-sm-h1">
        Bet-It
        <span class="d-block text-h5 text-sm-h3">e-sport</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped>
video {
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
}

.logo-wrapper {
  position: relative;
  width: 50%;
  color: #31f4d9;
}
</style>
