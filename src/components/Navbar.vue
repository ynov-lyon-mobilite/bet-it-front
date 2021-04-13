<template>
  <v-navigation-drawer fixed permanent left class="" style="width: 15vw">
    <v-toolbar flat extended height="250" class="pa-3">
      <v-row justify="space-around">
        <v-row class="ma-4">
          <v-row v-if="user.id != null">
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ user.firstName }}
              </v-list-item-title>
              <v-list-item-subtitle> @{{ user.pseudo }} </v-list-item-subtitle>
            </v-list-item-content>
          </v-row>
          <div v-else>
            <center>
              <v-btn class="notco ma-2" :to="{ name: 'Registration' }"
                >S'inscrire
              </v-btn>
              <v-btn class="notco ma-2" :to="{ name: 'Connection' }">
                Se connecter</v-btn
              >
            </center>
          </div>
        </v-row>
        <v-img
          width="100"
          style="flex: none"
          src="../assets/logo-couleur.svg"
        ></v-img>
      </v-row>
    </v-toolbar>
    <v-divider></v-divider>

    <v-list class="pt-10 pb-10">
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(page, i) in pages" :key="i" :to="page.route">
          <v-list-item-icon>
            <v-icon v-text="page.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="page.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <center>
      <p>FANTASY LEAGUE</p>
    </center>

    <v-list class="pt-2">
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(FantasyLeague, i) in FantasyLeagues"
          :key="i"
          :to="FantasyLeague.route"
        >
          <v-list-item-content>
            <center>
              <v-list-item-title
                v-text="FantasyLeague.text"
              ></v-list-item-title>
            </center>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import store from "@/store/index.js";

export default {
  store: store,
  name: "Navbar",
  data: () => ({
    selectedItem: 1,
    pages: [
      { text: "Accueil", icon: "fas fa-home", route: "/home" },
      { text: "Calendrier", icon: "fas fa-calendar-alt", route: "/calendar" },
      { text: "Compte", icon: "fas fa-users", route: "/profile/" },
      { text: "Succès", icon: "fas fa-trophy", route: "/success" },
      { text: "Classement", icon: "fas fa-medal", route: "/ladder" },
      { text: "Jeux", icon: "fas fa-gamepad", route: "/games" },
      { text: "BDE", icon: "fas fa-gamepad", route: "/addTournament" },
    ],
    FantasyLeagues: [
      { text: "Ajouter un salon", route: "/addRoom" },
      { text: "Mes salons", route: "/room" },
    ],
    right: null,
  }),

  computed: {
    user() {
      return store.state.user;
    },
  },
};
</script>

<style scoped lang="scss">
.v-item--active:link {
  background: linear-gradient(
    90deg,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
  transition: 0.4s ease-in-out;
  color: white;
}
.notco {
  background: linear-gradient(
    90deg,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}

.v-list-item__title {
  color: var(--v-info-lighten5);
}
.v-list-item--link:before {
  opacity: 0 !important;
}
</style>
