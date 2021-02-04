<template>
  <v-footer color="#272727" class="mt-6">
    <v-row justify="space-around" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="lighten-2 py-4 text-center white--text"
        cols="12"
        color="#121212"
      >
        {{ new Date().getFullYear() }} — <strong>Bet-it</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Mentions légales',
        'Conditions générales d\'utilisation',
        'Équipe',
        'Contactez-nous',
      ],
    }),
  }
</script>