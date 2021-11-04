<template>
  <div>
    <h1 class="text-center mt-10 mb-10">Connexion</h1>
    <v-row align="center" justify="center">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        style="min-width: 300px; width: 40vw"
      >
        <v-text-field
          v-model="user.email"
          :rules="[rules.required, rules.email]"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Mot de passe"
          hint="Au moins 8 caractères"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>

        <div class="d-flex justify-center">
          <v-btn
            style="color: white; width: 140px"
            large
            class="ma-9"
            elevation="2"
            :disabled="!valid"
            @click.prevent="getAuth()"
            >Se connecter</v-btn
          >
        </div>
        <div v-if="success">
          <v-alert type="success" elevation="10"
            >Vous allez être rediriger sur votre profil</v-alert
          >
          <v-progress-linear indeterminate color="cyan"></v-progress-linear>*
          {{ redirectToProfil() }}
        </div>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  store: store,
  name: "Connection",
  data() {
    return {
      valid: false,
      show1: false,
      password: "password",
      rules: {
        required: value => !!value || "Requis",
        email: value => {
          const pattern = /.+@.+\..+/;
          return pattern.test(value) || "E-mail invalide";
        }
      },
      select: null,
      user: {
        email: "",
        password: ""
      },
      error: [],
      success: false
    };
  },

  computed: {
    getuser() {
      return this.$store.state.user;
    },
    getToken() {
      return this.$store.state.token;
    }
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
    getAuth() {
      store
        .dispatch("getAuth", this.user)
        .then(() => (this.success = true))
        .catch(error => {
          this.error = error.response;
        });
    },

    redirectToProfil() {
      this.$router.push({ name: "Profile" });
    }
  }
};
</script>
