<template>
  <v-card>
    <v-card-title class="card-title">Historique des paris</v-card-title>
    <v-simple-table fixed-header height="240px">
      <thead>
        <tr>
          <th class="text-center">
            Date
          </th>
          <th class="text-center">
            Ligue
          </th>
          <th class="text-center">
            Equipes
          </th>
          <th class="text-center">
            Match
          </th>
          <th class="text-center">
            Mise
          </th>
          <th class="text-center">
            Gains
          </th>
          <th class="text-center">
            Pari
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bet, idx) in betHistory" :key="idx">
          <td class="text-center">
            {{ bet.date.toLocaleDateString("fr-FR") }}
          </td>
          <td class="text-center">{{ bet.game.league }}</td>
          <td class="text-center">
            {{ `${bet.game.team1.name} vs ${bet.game.team2.name}` }}
          </td>
          <td class="text-center">{{ `Game ${bet.game.gameNumber}` }}</td>
          <td class="text-center">{{ bet.amount }}</td>
          <td class="text-center">{{ bet.amount * bet.odd }}</td>
          <td class="text-center">{{ `${bet.team.name} - ${bet.type}` }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  computed: {
    betHistory() {
      return this.$store.state.betHistory;
    },
  },
};
</script>

<style></style>
