<template>
  <v-card>
    <v-card-title class="card-title">Compte</v-card-title>
    <v-row class="my-5 pa-10" justify="space-around">
      <div
        class="my-6 text-center d-flex flex-column align-center justify-space-between"
      >
        <div class="diamond mx-8 mb-12 d-flex align-center justify-center">
          <v-avatar size="150">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </div>
        <v-btn class="btn">Editer ma photo</v-btn>
      </div>
      <div class="my-6 mx-8 text-center">
        <AccountInfoTextField
          fieldName="firstName"
          @value="getUser.firstName = $event"
          :fieldValue="getUser.firstName"
        />
        <AccountInfoTextField
          fieldName="username"
          @value="getUser.pseudo = $event"
          :fieldValue="getUser.pseudo"
        />
        <AccountInfoTextField
          fieldName="email"
          @value="getUser.email = $event"
          :fieldValue="getUser.email"
        />
        <AccountInfoTextField
          fieldName="phoneNumber"
          @value="getUser.PhoneNumber = $event"
          :fieldValue="getUser.PhoneNumber"
        />
        <v-btn block class="btn">Changer de mot de passe</v-btn>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import AccountInfoTextField from "@/components/Profile/AccountInfoTextField";

export default {
  name: "AccountInfos",
  components: {
    AccountInfoTextField,
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss">
.diamond {
  width: 175px;
  height: 175px;
  position: relative;
  display: block;

  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 175px;
    height: 175px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border: 1px solid var(--v-secondary-base);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
