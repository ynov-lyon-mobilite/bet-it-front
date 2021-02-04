<template>
  <div class="container">
    <v-card>
      <v-card-title class="card-title"
        >Classement des utilisateurs</v-card-title
      >
      <v-simple-table fixed-header class="overflow-y-auto">
        <thead>
          <tr>
            <th class="text-left">
              Pseudo
            </th>
            <th class="text-left">
              Nombre de betties
            </th>
            <th class="text-left">
              Nombre de paris remportés
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, idx) in sortedUsers" :key="idx">
            <td class="text-left">
              {{ user.username }}
            </td>
            <td class="text-left">{{ user.betties }}</td>
            <td class="text-left">{{ user.wonBets }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
const users = [
  {
    username: "Shellyou",
    wonBets: 11,
    betties: 995,
  },
  {
    username: "EmmanuelMarcon",
    wonBets: 10,
    betties: 1089,
  },
  {
    username: "Yuukei",
    wonBets: 7,
    betties: 850,
  },
  {
    username: "14YearsOldGirl",
    wonBets: 6,
    betties: 789,
  },
  {
    username: "NydexHD",
    wonBets: 6,
    betties: 723,
  },
];
export default {
  data: () => ({
    users,
  }),
  computed: {
    sortedUsers() {
      return [...this.users].sort((a, b) => b.betties - a.betties);
    },
  },
};
</script>

<style scoped lang="scss">
.card-title {
  background: linear-gradient(
    0.25turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}

</style>
