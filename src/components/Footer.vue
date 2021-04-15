<template>
  <v-footer absolute>
    <v-row justify="space-around" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="lighten-2 py-4 text-center white--text"
        cols="12"
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
        ' ',
        'Mentions légales',
        'Conditions générales d\'utilisation',
        'Équipe',
        'Contactez-nous',
      ],
    }),
  }
</script>
