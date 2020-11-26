<template>
  <v-container class="vh-100 pa-10">
    <v-row justify="space-between">
      <v-col cols="12" md="6">
        <BetHistory />
      </v-col>
      <v-col cols="12" md="6">
        <BettiesAmount />
      </v-col>
    </v-row>
    <v-row class="my-5" no-gutters>
      <v-col>
        <AccountInfos />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <AccountDeletion />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AccountInfos from "@/components/Profile/AccountInfos";
import AccountDeletion from "@/components/Profile/AccountDeletion";
import BetHistory from "@/components/Profile/BetHistory";
import BettiesAmount from "@/components/Profile/BettiesAmount";

export default {
  name: "Profile",
  components: {
    AccountInfos,
    AccountDeletion,
    BetHistory,
    BettiesAmount
  }
};
</script>

<style lang="scss">
.profile-card {
  background: #303030;
}

.card-title,
.btn {
  background: linear-gradient(0.25turn, #7634c0, #5fb1e0, #0ce1c4);
  text-transform: none;
}

.icon {
  background-image: -webkit-linear-gradient(
    0.25turn,
    #7634c0,
    #5fb1e0,
    #0ce1c4
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
