<template>
  <v-container class="vh-100 py-10">
    <AccountInfos />
  </v-container>
</template>

<script>
import AccountInfos from "@/components/Profile/AccountInfos";
export default {
  name: "Profile",
  components: {
    AccountInfos
  }
};
</script>

<style lang="scss">
.profile-card {
  background: #303030;
}

.card-title,
.btn {
  background: linear-gradient(0.25turn, #0ce1c4, #5fb1e0, #7634c0);
  text-transform: none;
}

.icon {
  background-image: -webkit-linear-gradient(
    0.25turn,
    #0ce1c4,
    #5fb1e0,
    #7634c0
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
