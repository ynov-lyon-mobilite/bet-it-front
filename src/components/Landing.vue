<template>
  <div>
    <video class="vw-100 vh-100" autoplay loop playsinline muted>
      <source src="../assets/video.webm" type="video/webm" />
      <source src="../assets/video.mp4" type="video/mp4" />
    </video>
    <div
      class="logo-wrapper text-center vh-100 d-flex align-center justify-center"
    >
      <div class="col-6">
        <v-img class="" src="../assets/logo.svg"></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
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
