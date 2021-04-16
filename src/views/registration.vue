<template>
  <div>
    <h1 class="text-center">Inscription</h1>

    <v-row align="center" justify="center">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        style="min-width: 300px; width: 40vw"
      >
        <v-text-field
          v-model="user.firstName"
          :rules="[rules.required]"
          label="prénom"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.lastName"
          :rules="[rules.required]"
          label="nom"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.pseudo"
          :rules="[rules.required]"
          label="pseudo"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.email"
          :rules="[rules.required, rules.email]"
          label="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.PhoneNumber"
          :counter="8"
          :error-messages="errors"
          label="Phone Number"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.plainPassword"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Mot de passe"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-select
          v-model="user.sexe"
          :items="items"
          :rules="[rules.required]"
          label="Sexe"
          required
        ></v-select>
        <h2 class="text-center ma-5">Date de naissance</h2>

        <v-row justify="center">
          <v-date-picker v-model="user.birthday"></v-date-picker>
        </v-row>

        <div class="d-flex justify-center">
          <v-btn
            style="color: white; width: 140px"
            large
            class="ma-9"
            elevation="2"
            :disabled="!valid"
            @click.prevent="createUser()"
            >S'enregistrer</v-btn
          >
        </div>
        <div v-if="success">
          <v-alert type="success" elevation="10"
            >Votre compte à bien été créer</v-alert
          >
          <v-progress-linear indeterminate color="green"></v-progress-linear>
        </div>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import store from "@/store/index.js";
import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTg2MDE4NjAsImV4cCI6MTYxODYwNTQ2MCwicm9sZXMiOlsic3RyaW5nIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdEBhemRoLmNvbSJ9.UMASIPyEX6uRSGijpr75BT-REGWs5IXXJuPLnaMoSCSJ3c8BIJbC5B_mdFpEUqBUuJ6WwpXkQGKev5k5ZbtA3ZtdgXPfniFE7e2VJI6PY3fKcycJ2ZFoeupBLsXKzlCDsAhZ1-FbutK41PQ3O64ycPbBaSt7SM7wYAZw2E0pYTP9x1xSR2Suww47rpPFd-8cE2CujEPamSbWKGSVhLGrHxRgNqXs9MqTkIS_F_p7GGFrI2POYELqCo68d3ecLiBr3yyj0VSvPVCX5UShbueMRXhVUt9zg3fFFNb7ElxrgIDH9Dup35L3qwy-qDg13DDt7DB4lIbiE13MweecUpSA4ABD4xlvseSFWit39MheIXFnQluCNXQAwITu3vDBGK92ayKbccvjf20--DD434c1Y3o-f3Sx6pm6pqt0E4WnfVvd5z5A3h0AJkjCygyoBrRAFgC8kMvQzDlsGy9GRvcUfvZkbvIwa_DWco5kYhZZaKAexnlDR1Ls-WWXTL6MFZuoVRVR0TAGLEeG-SMtlx0LvUK6EIHuBPfF-fTWSUfbb783m6tPURov3QYDMPXymPz9Bz23bz42HUvv5TYUF7RRarPDLW8dblACBAczuVWuoTg52m7aFIkAXduwKWBwGbfmZQv66ocU_6P2dnuLFolcrdLBoB5sw75Iqf7p_HJu-qc";
export default {
  store: store,
  data() {
    return {
      birthday: new Date().toISOString().substr(0, 10),
      valid: false,
      items: ["Homme", "Femme", "Autre"],
      checkbox: false,

      show1: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Requis",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      rules: {
        required: (value) => !!value || "Requis",
        email: (value) => {
          const pattern = /.+@.+\..+/;
          return pattern.test(value) || "Invalid e-mail";
        },
      },
      select: null,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        plainPassword: "",
        pseudo: "",
        PhoneNumber: "",
        sexe: "",
        birthday: "",
      },
      error: [],
      success: false,
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    createUser() {
      store
        .dispatch("addUser", this.user)
        .then(() => (this.success = true))
        .catch((error) => {
          this.error = error.response;
        });
      this.$router.push({ name: "Profile" });
    },
  },
  computed: {
    getuser() {
      return store.state.user;
    },
  },
};
</script>