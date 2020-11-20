<template>
  <v-card class="profile-card mx-5">
    <v-card-title class="card-title">Compte</v-card-title>
    <v-row class="my-5" justify="space-around">
      <div class="my-5 mx-5 text-center">
        <v-avatar size="200" class="mb-5">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-btn block class="btn">Editer ma photo</v-btn>
      </div>
      <div class="my-5 mx-5 text-center">
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

<style lang="scss"></style>
