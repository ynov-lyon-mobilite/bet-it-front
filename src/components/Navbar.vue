<template>
  <v-navigation-drawer>
    <v-toolbar flat
               extended
               extension-height="100"
               class="pa-3"
    >
      <v-avatar>
        <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
        >
      </v-avatar>
      <v-list-item-content>

        <v-list-item-title class="title">
          UserName
        </v-list-item-title>
        <v-list-item-subtitle>
          @subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list class="pa-3">
      <v-subheader>Menu</v-subheader>
      <v-list-item-group
          v-model="selectedItem"
          color="primary"
      >
        <v-list-item
            v-for="(page, i) in pages"
            :key="i"
            :to="page.route"
        >
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
      { text: 'Accueil', icon: 'fas fa-heart', route:'/home' },
      { text: 'Calandrier', icon: 'fas fa-heart', route:'/calandare'  },
      { text: 'Compte', icon: 'fas fa-heart', route:'/profile' },
      { text: 'Succès', icon: 'fas fa-heart', route:'/success'  },
      { text: 'Jeux', icon: 'fas fa-heart', route:'/games'  },
    ],
    right: null,
  }),
}
</script>

<style scoped>

</style>
