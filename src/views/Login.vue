<template>
  <div>
    <h1 class="text-center mt-10 mb-10">Connexion</h1>
    <v-row align="center" justify="center">
      <v-form ref="form" style="width: 300px" v-model="valid" lazy-validation>
        <v-text-field
          v-model="user.email"
          :rules="rules.email"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          :rules="rules.password"
          label="Mot de passe"
          type="password"
          counter
        ></v-text-field>
        <div class="d-flex justify-center">
          <v-btn
            style="color: white; width: 140px"
            large
            class="ma-9"
            elevation="2"
            :disabled="!valid"
            type="submit"
            @click.prevent="validate"
            >Se connecter</v-btn
          >
        </div>
        <div v-if="success">
          <v-alert type="success" elevation="10">Connexion réussie</v-alert>
          <v-progress-linear indeterminate color="green"></v-progress-linear>
        </div>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  validateEmail,
  validateMandatoryField,
  validateMinLength
} from "../forms/rules";

export default {
  name: "Login",
  data() {
    return {
      valid: false,
      password: "password",
      rules: {
        email: [validateMandatoryField, validateEmail],
        password: [validateMandatoryField, validateMinLength(5)]
      },
      user: {
        email: "",
        password: ""
      },
      success: false
    };
  },
  computed: {
    allFieldsAreFilled() {
      return !Object.values(this.user).some(value => !value);
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.valid && this.allFieldsAreFilled) {
        this.login();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then(({ user }) => {
          this.success = true;
          this.$store.dispatch({
            type: "user/fetchUser",
            userInfo: {
              id: user.uid,
              email: user.email
            }
          });
          setTimeout(() => {
            this.$router.push({ name: "Home" });
          }, 3000);
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
