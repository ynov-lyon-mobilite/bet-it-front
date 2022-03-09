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
          :rules="rules.firstName"
          label="Prénom"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.lastName"
          :rules="rules.lastName"
          label="Nom"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.userName"
          :rules="rules.userName"
          label="Nom d'utilisateur"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.email"
          :rules="rules.email"
          label="Adresse e-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.phoneNumber"
          counter
          label="Numéro de téléphone"
          :rules="rules.phoneNumber"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.plainPassword"
          :rules="rules.password"
          type="password"
          label="Mot de passe"
          counter
        ></v-text-field>
        <v-text-field
          v-model="user.confirmPassword"
          :rules="confirmPasswordRules"
          type="password"
          label="Confirmer le mot de passe"
          counter
        ></v-text-field>
        <v-select
          v-model="user.gender"
          :items="items"
          :rules="rules.gender"
          label="Sexe"
          required
        ></v-select>
        <div class="d-flex flex-column align-center">
          <v-text-field
            v-model="user.birthday"
            label="Date de naissance"
            disabled
            :rules="rules.birthday"
            required
          ></v-text-field>
          <v-date-picker v-model="user.birthday"></v-date-picker>
        </div>

        <div class="d-flex justify-center">
          <v-btn
            style="color: white; width: 140px"
            large
            class="ma-9"
            elevation="2"
            :disabled="!valid || !allFieldsAreFilled"
            @click.prevent="validate"
            >S'enregistrer</v-btn
          >
        </div>
        <div v-if="success">
          <v-alert type="success" elevation="10"
            >Votre compte a bien été créé</v-alert
          >
          <v-progress-linear indeterminate color="green"></v-progress-linear>
        </div>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  validateBirthdate,
  validateConfirmPassword,
  validateEmail,
  validateMandatoryField,
  validateMaxLength,
  validateMinLength,
  validatePhoneNumber
} from "../forms/rules";
//ntm
// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTg2MDE4NjAsImV4cCI6MTYxODYwNTQ2MCwicm9sZXMiOlsic3RyaW5nIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdEBhemRoLmNvbSJ9.UMASIPyEX6uRSGijpr75BT-REGWs5IXXJuPLnaMoSCSJ3c8BIJbC5B_mdFpEUqBUuJ6WwpXkQGKev5k5ZbtA3ZtdgXPfniFE7e2VJI6PY3fKcycJ2ZFoeupBLsXKzlCDsAhZ1-FbutK41PQ3O64ycPbBaSt7SM7wYAZw2E0pYTP9x1xSR2Suww47rpPFd-8cE2CujEPamSbWKGSVhLGrHxRgNqXs9MqTkIS_F_p7GGFrI2POYELqCo68d3ecLiBr3yyj0VSvPVCX5UShbueMRXhVUt9zg3fFFNb7ElxrgIDH9Dup35L3qwy-qDg13DDt7DB4lIbiE13MweecUpSA4ABD4xlvseSFWit39MheIXFnQluCNXQAwITu3vDBGK92ayKbccvjf20--DD434c1Y3o-f3Sx6pm6pqt0E4WnfVvd5z5A3h0AJkjCygyoBrRAFgC8kMvQzDlsGy9GRvcUfvZkbvIwa_DWco5kYhZZaKAexnlDR1Ls-WWXTL6MFZuoVRVR0TAGLEeG-SMtlx0LvUK6EIHuBPfF-fTWSUfbb783m6tPURov3QYDMPXymPz9Bz23bz42HUvv5TYUF7RRarPDLW8dblACBAczuVWuoTg52m7aFIkAXduwKWBwGbfmZQv66ocU_6P2dnuLFolcrdLBoB5sw75Iqf7p_HJu-qc";

export default {
  data() {
    return {
      valid: true,
      items: ["Homme", "Femme", "Autre"],
      rules: {
        firstName: [validateMandatoryField],
        lastName: [validateMandatoryField],
        userName: [
          validateMandatoryField,
          validateMaxLength(16),
          validateMinLength(5)
        ],
        email: [validateMandatoryField, validateEmail],
        phoneNumber: [validateMandatoryField, validatePhoneNumber],
        password: [validateMandatoryField, validateMinLength(5)],
        gender: [validateMandatoryField],
        birthday: [validateMandatoryField, validateBirthdate]
      },
      user: {
        firstName: "",
        lastName: "",
        email: "",
        plainPassword: "",
        userName: "",
        phoneNumber: "",
        gender: "",
        birthday: ""
      },
      success: false
    };
  },
  computed: {
    allFieldsAreFilled() {
      return !Object.values(this.user).some(value => !value);
    },
    confirmPasswordRules() {
      return [
        validateMandatoryField,
        validateMinLength(5),
        validateConfirmPassword(this.user.plainPassword)
      ];
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.valid && this.allFieldsAreFilled) {
        this.register();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.user.email,
        this.user.plainPassword
      )
        .then(({ user }) => {
          console.log("user", user);
          this.success = true;
          this.$store.dispatch({
            type: "user/fetchUser",
            userInfo: {
              id: user.uid,
              email: user.email
            }
          });
          localStorage.accessToken = user.accessToken;
          localStorage.refreshToken = user.refreshToken;
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
