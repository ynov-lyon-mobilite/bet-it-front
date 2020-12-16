<template>
  <v-navigation-drawer>
    <v-toolbar flat extended height="250" class="pa-3">
      <v-container fluid>
        <v-row justify="space-around">
          <v-row style="margin: 0 0 2vw 1px;">
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                UserName
              </v-list-item-title>
              <v-list-item-subtitle>
                @subtext
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-row>
          <v-img
            width="100"
            style="flex: none;"
            src="../assets/logo-couleur.svg"
          ></v-img>
        </v-row>
      </v-container>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list class="pa-3">
      <v-subheader>Menu</v-subheader>
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
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    selectedItem: 1,
    pages: [
     { text: 'Accueil', icon: 'fas fa-home', route:'/home' },
      { text: 'Calendrier', icon: 'fas fa-calendar-alt', route:'/calandare'  },
      { text: 'Compte', icon: 'fas fa-users', route:'/profil' },
      { text: 'Succès', icon: 'fas fa-trophy', route:'/succes'  },
      { text: 'Jeux', icon: 'fas fa-gamepad', route:'/games'  },
    ],
    right: null
  })
};
</script>

<style scoped lang="scss">
.v-item--active:link {
  background: linear-gradient(
    90deg,
    var(--v-secondary-base),
    var(--v-info-base),
    var(--v-darkPurple-base)
  );
  transition: 0.4s ease-in-out;
  color: white;
}
.v-list-item__title {
  color: white;
}
</style>
