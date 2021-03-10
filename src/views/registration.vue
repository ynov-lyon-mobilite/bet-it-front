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

        <center>
          <v-btn
            style="color: white; width: 140px"
            large
            class="ma-9"
            elevation="2"
            :disabled="!valid"
            @click.prevent="createUser()"
            >S'enregistrer</v-btn
          >
        </center>
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
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTUzNjQ5NzcsImV4cCI6MTYxNTM2ODU3Nywicm9sZXMiOlsic3RyaW5nIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdEBhemRoLmNvbSJ9.Gdf4VWYy2byU_kUF7T3WMsJak-zE_HNag-8_iTYZ0iHbX9EgmwCvT_-GnshABQQbqlSgdU1GpJ-fjyMNsX2DprAZC9goXrr6TQpz86kmndMO2DT79gSRDbCWbfOc7ZsWGljARskSttekP7V0q_J8tYIYssyj_Lm2vGFXzFJrYOVkzFLTS2_sZbzGXMw97iSDmk_oeMtCa8EjXU5v1Lx2JlD8-kz4whaeuljmuAObs2WLXdJmJdlh8XJRKrqlhPfoccNvZ5V2Yf3rOdsFFbYcOqYZ5HbB0SI0VKrzcYL5aXj6Xc_8THSHq8rkSXVNC9KXY0sgh8YlRtC8HP5gktg0jmyWo-8IGKBXil6nu1k4hoh8bjQRFZAbQORkSe2PbkS2-D1fSwx7cANAs1RIlvOjl0EvmVeCBiBB_xOEohCucsyXqD72Hw7DKdoNlWDZhynAM7owz-LhjB930s0q2yIZQ_cSPpqzpne7gozmI29VNqqirh-jeLgKEOob28o4IIwmRXrVaaUog993f9inhBv4vTj-OmMqrg5VN1U4MDcT_cb4sCvcJJjLsa4hMPy-r9GLVftVNM-KEaqHSKcjtfmD2bT_gFJxPKImjVm9WF26LTvOQyT6ViwYpzx7fQrl4iOJXMq9A34FNZSiuSaTZYl_4Bx-QFNJsPwB1XpgLHxFfpY";
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