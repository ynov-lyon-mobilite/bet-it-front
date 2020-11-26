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
          fieldName="alias"
          @value="user.alias = $event"
          :fieldValue="user.alias"
        />
        <AccountInfoTextField
          fieldName="username"
          @value="user.username = $event"
          :fieldValue="user.username"
        />
        <AccountInfoTextField
          fieldName="email"
          @value="user.email = $event"
          :fieldValue="user.email"
        />
        <AccountInfoTextField
          fieldName="phoneNumber"
          @value="user.phoneNumber = $event"
          :fieldValue="user.phoneNumber"
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
    AccountInfoTextField
  },
  data: () => ({
    user: {
      alias: "alias",
      username: "username",
      email: "email@mail.com",
      phoneNumber: "0606059875"
    }
  })
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
    border: 1px solid #0ce1c4;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
