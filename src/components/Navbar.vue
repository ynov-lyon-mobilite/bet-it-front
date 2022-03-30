<template>
  <div>
    <v-toolbar class="navbar">
      <router-link class="logo-link ml-4" to="/home">
        <img src="../assets/logo/logoSimple.svg" class="logo pa-2" alt="logo" />
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down mr-5">
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
      </v-toolbar-items>
      <v-btn icon @click="openDialog" class="hidden-md-and-up mr-2">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>
      <v-dialog
        v-model="showDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        class="menu-dialog"
      >
        <v-card>
          <v-btn icon @click="closeDialog" class="close-dialog-btn">
            <v-icon>
              fas fa-times
            </v-icon>
          </v-btn>

          <router-link v-for="(page, i) in pages" :to="page.route" :key="i">
            <div
              class="route-link d-flex align-center pa-5"
              @click="closeDialog"
            >
              <v-icon v-text="page.icon" class="mr-4"></v-icon>
              <div class="route-link-text">{{ page.text }}</div>
            </div>
          </router-link>
          <div
            v-if="user.isAuthentified"
            class="route-link d-flex align-center pa-5"
            @click="logout"
          >
            <v-icon class="mr-4">fas fa-sign-out-alt</v-icon>
            <div class="route-link-text">Déconnexion</div>
          </div>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import store from "../store";

export default {
  store: store,
  name: "Navbar",
  data: () => ({
    showDialog: false
  }),
  computed: {
    user() {
      return store.state.user.userInfo;
    },
    isMdUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    pages() {
      return [
        { text: "Accueil", icon: "fas fa-home", route: "/home" },
        // { text: "Calendrier", icon: "fas fa-calendar-alt", route: "/calendar" },
        // { text: "Tournois", icon: "fas fa-sitemap", route: "/add-tournament" },
        // { text: "Jeux", icon: "fas fa-gamepad", route: "/games" },
        // { text: "Classement", icon: "fas fa-medal", route: "/ladder" },
        ...(this.user.isAuthentified
          ? [
              // { text: "Succès", icon: "fas fa-trophy", route: "/success" },
              // { text: "Mes salons", icon: "fab fa-foursquare", route: "/room" },
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
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
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
.menu-dialog {
  position: relative;
}

.close-dialog-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.toggle-menu-icon {
  height: 30px;
  width: 30px;
}

.navbar {
  position: fixed;
  top: 0;
  z-index: 100;
  height: 64px;
  background-color: #272727;
  width: 100%;
}
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
  width: 24px;
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
</style>
