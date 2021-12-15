<template>
  <div class="navbar d-flex align-center justify-space-between">
    <router-link class="logo-link ml-4" to="/home">
      <img src="../assets/logo/logoSimple.svg" class="logo pa-2" alt="logo" />
    </router-link>
    <div class="navbar-right d-flex align-center mr-4">
      <router-link v-for="(page, i) in pages" :to="page.route" :key="i">
        <div class="route-link d-flex align-center pa-2">
          <v-icon v-text="page.icon" class="mr-2"></v-icon>
          <div class="route-link-text">{{ page.text }}</div>
        </div>
      </router-link>
      <div
        v-if="user.isAuthentified"
        class="route-link d-flex align-center pa-2"
        @click="logout"
      >
        <v-icon class="mr-2">fas fa-sign-out-alt</v-icon>
        <div class="route-link-text">Déconnexion</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import store from "../store";

export default {
  store: store,
  name: "Navbar",
  computed: {
    user() {
      return store.state.user.userInfo;
    },
    pages() {
      return [
        { text: "Accueil", icon: "fas fa-home", route: "/home" },
        { text: "Calendrier", icon: "fas fa-calendar-alt", route: "/calendar" },
        // { text: "Tournois", icon: "fas fa-sitemap", route: "/addTournament" },
        // { text: "Jeux", icon: "fas fa-gamepad", route: "/games" },
        // { text: "Classement", icon: "fas fa-medal", route: "/ladder" },
        ...(this.user.isAuthentified
          ? [
              { text: "Succès", icon: "fas fa-trophy", route: "/success" },
              { text: "Mes salons", icon: "fab fa-foursquare", route: "/room" },
              { text: "Compte", icon: "fas fa-user", route: "/profile" }
            ]
          : [
              {
                text: "Connexion",
                icon: "fas fa-sign-in-alt",
                route: "/login"
              },
              {
                text: "Inscription",
                icon: "fas fa-clipboard",
                route: "/registration"
              }
            ])
      ];
    },
    isHome() {
      return this.$route.name === "Home";
    }
  },
  methods: {
    async logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$store.dispatch({
            type: "user/logout"
          });
          if (!this.isHome) {
            this.$router.push({ name: "Home" });
          }
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  z-index: 10;
  height: 64px;
  background-color: #272727;
  width: 100%;

  .navbar-right {
    height: 100%;
  }

  .logo-link {
    cursor: pointer;
    height: 100%;

    &.router-link-active {
      background: none;
    }
  }

  .logo {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  .v-icon {
    color: #b5b2b2;
  }

  .route-link {
    cursor: pointer;
    height: 100%;
    .route-link-text {
      color: #b5b2b2;
    }
    &:hover {
      color: #ffffff;
      .route-link-text,
      .v-icon {
        color: #ffffff;
      }
    }
  }

  .router-link-active {
    height: 100%;
    .route-link-text,
    .v-icon {
      background: -webkit-linear-gradient(
        90deg,
        var(--v-primary-base),
        var(--v-info-base),
        var(--v-secondary-base)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
