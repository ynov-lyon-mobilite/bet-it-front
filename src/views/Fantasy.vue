<template>
  <div>
    <RoomInfos />
    <v-card color="#1e1e1e" class="my-8">
      <v-card-title class="card-title">Je constitue mon équipe</v-card-title>
      <div class="d-flex flex-column my-team pa-8">
        <div
          v-for="lane in team"
          :key="lane.name"
          class="d-flex justify-center align-center my-2"
        >
          <img
            :class="`lane-logo pa-2 mx-2 ${!lane.player && 'clickable'}`"
            :src="lane.logo"
            :alt="lane.name"
            @click="!lane.player && selectLane(lane.name)"
          />
          <div
            v-if="lane.player"
            class="team-logo-wrapper d-flex justify-center pa-2 ml-2 mr-6"
          >
            <img class="team-logo " :src="lane.player.teamLogo" />
          </div>
          <img
            class="mx-6 player-picture"
            v-if="lane.player"
            :src="lane.player.picture"
          />
          <h4 v-if="lane.player" class="text-center text-uppercase">
            {{ lane.player.name }}
          </h4>
          <v-icon
            x-large
            v-if="lane.player"
            class="mx-6"
            @click="removePlayer(lane)"
            >fa-times-circle</v-icon
          >
        </div>
      </div>
      <div class="text-center py-2 mx-6">
        Valeur actuelle de l'équipe : {{ teamValue }}/100
      </div>
    </v-card>
    <div class="d-flex flex-column align-center">
      <v-btn
        :disabled="!canParticipate"
        :class="
          `btn rounded-pill pa-5 mb-2 text-h4 participate ${!canParticipate &&
            'disabled'}`
        "
        >Je participe !
        <div class="circle d-flex justify-center align-center">
          1€
        </div></v-btn
      >
      <div v-if="!canParticipate">Votre équipe n'est pas complète</div>
    </div>
    <div class="d-flex justify-center my-8">
      <div class="text-h4 text-center">
        Temps restant avant participation : 2 jours
      </div>
    </div>
    <v-card class="my-4">
      <v-card-title>Matchs concernés</v-card-title>
    </v-card>
    <v-card class="my-8">
      <v-card-title class="card-title">Joueurs du salon</v-card-title>
      <v-simple-table fixed-header height="200px">
        <thead>
          <tr>
            <th class="text-center">
              Rang
            </th>
            <th class="text-center">
              Pseudo
            </th>
            <th class="text-center">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </v-simple-table>
    </v-card>
    <v-dialog v-model="isSelectingPlayer">
      <v-card>
        <v-card-title
          class="d-flex justify-space-between align-center card-title"
          ><h2>Je choisis mon {{ selectedLane }}</h2>
          <v-icon @click="closeDialog">fas fa-times</v-icon></v-card-title
        >
        <div class="pa-4">
          <div class="d-flex justify-space-between">
            <div>Points restant : {{ 100 - teamValue }}</div>
            <h4>Valeur actuelle de l'équipe : {{ teamValue }}/100</h4>
          </div>
          <div class="d-flex flex-wrap justify-center overflow-y-auto">
            <div
              v-for="player in selectablePlayers"
              :class="`player ma-8 ${player === selectedPlayer && 'selected'}`"
              :key="player.id"
              @click="selectPlayer(player)"
            >
              <h4 class="text-center text-uppercase">{{ player.name }}</h4>
              <v-img width="250" :src="player.picture"></v-img>
              <v-chip class="player-value px-4 pt-4 pb-2"
                ><h4>
                  {{ player.value }}<span class="subtext">/100</span>
                </h4></v-chip
              >
              <div class="team-logo pa-3 d-flex justify-center align-center">
                <v-img width="50" :src="player.teamLogo"></v-img>
              </div>
            </div>
          </div>
          <div class="d-flex justify-center my-4">
            <v-btn class="rounded-pill mx-4" @click="closeDialog"
              >Annuler</v-btn
            >
            <v-btn class="btn rounded-pill mx-4" @click="validatePlayer"
              >Valider</v-btn
            >
          </div>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="pointsError">
      <v-card class="d-flex flex-column align-center pa-8 points-error">
        <v-card-text class="text-center"
          >Vous n'avez pas assez de points pour sélectionner ce
          joueur.</v-card-text
        >
        <v-card-actions
          ><v-btn color="secondary darken-1" text @click="pointsError = false">
            OK
          </v-btn></v-card-actions
        >
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import RoomInfos from '@/components/Fantasy/RoomInfos';
export default {
  name: 'Fantasy',
  components: {
    RoomInfos
  },
  data: () => ({
    isSelectingPlayer: false,
    selectedLane: null,
    selectedPlayer: null,
    pointsError: false,
    players: [
      {
        id: 1,
        name: 'Rekkles',
        position: 'adc',
        teamLogo:
          'https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591295307_FnaticFNC-01-FullonDark.png',
        picture: require('../assets/players/rekkles.png'),
        value: 40
      },
      {
        id: 2,
        name: 'Hans Sama',
        position: 'adc',
        teamLogo:
          'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Rogue_logo.svg/220px-Rogue_logo.svg.png',
        picture: require('../assets/players/hans_sama.png'),
        value: 30
      },
      {
        id: 3,
        name: 'Adam',
        position: 'top',
        teamLogo: require('../assets/teams/karmine_corp.png'),
        picture: require('../assets/players/adam.png'),
        value: 15
      },
      {
        id: 4,
        name: 'Saken',
        position: 'mid',
        teamLogo: require('../assets/teams/karmine_corp.png'),
        picture: require('../assets/players/saken.png'),
        value: 15
      },
      {
        id: 5,
        name: 'Targamas',
        position: 'support',
        teamLogo: require('../assets/teams/karmine_corp.png'),
        picture: require('../assets/players/targamas.png'),
        value: 10
      },
      {
        id: 6,
        name: 'Cinkrof',
        position: 'jungler',
        teamLogo: require('../assets/teams/karmine_corp.png'),
        picture: require('../assets/players/cinkrof.png'),
        value: 10
      },
      {
        id: 7,
        name: 'xMatty',
        position: 'adc',
        teamLogo: require('../assets/teams/karmine_corp.png'),
        picture: require('../assets/players/xmatty.png'),
        value: 15
      },
      {
        id: 8,
        name: 'Faker',
        position: 'mid',
        teamLogo: require('../assets/teams/t1.png'),
        picture: require('../assets/players/faker.png'),
        value: 99
      },
      {
        id: 9,
        name: 'Kryze',
        position: 'top',
        teamLogo: require('../assets/teams/excel.png'),
        picture: require('../assets/players/kryze.png'),
        value: 10
      },
      {
        id: 10,
        name: 'Jactroll',
        position: 'support',
        teamLogo: require('../assets/teams/misfits_premier.png'),
        picture: require('../assets/players/jactroll.png'),
        value: 10
      },
      {
        id: 11,
        name: 'toucouille',
        position: 'mid',
        teamLogo: require('../assets/teams/gameward.png'),
        picture: require('../assets/players/toucouille.png'),
        value: 10
      }
    ],
    team: [
      {
        name: 'top',
        logo: require('../assets/fantasy/top.png'),
        player: null
      },
      {
        name: 'jungler',
        logo: require('../assets/fantasy/jungle.png'),
        player: null
      },
      {
        name: 'mid',
        logo: require('../assets/fantasy/mid.png'),
        player: null
      },
      {
        name: 'adc',
        logo: require('../assets/fantasy/adc.png'),
        player: null
      },
      {
        name: 'support',
        logo: require('../assets/fantasy/support.png'),
        player: null
      }
    ]
  }),
  computed: {
    betties() {
      return this.$store.state.betties;
    },
    teamValue() {
      let sum = 0;
      for (let i = 0; i < this.team.length; i++) {
        const player = this.team[i].player;
        sum += player ? player.value : 0;
      }
      return sum;
    },
    selectablePlayers() {
      return this.players.filter(
        player => player.position === this.selectedLane
      );
    },
    canParticipate() {
      let isTeamComplete = true;
      for (let i = 0; i < this.team.length; i++) {
        const player = this.team[i].player;
        if (!player) isTeamComplete = false;
      }
      return isTeamComplete;
    }
  },
  methods: {
    removePlayer(lane) {
      lane.player = null;
    },
    closeDialog() {
      this.selectedPlayer = null;
      this.isSelectingPlayer = false;
    },
    selectLane(lane) {
      this.selectedLane = lane;
      this.isSelectingPlayer = true;
      this.selectedPlayer = this.team.find(
        lane => lane.name === this.selectedLane
      ).player;
    },
    selectPlayer(player) {
      this.selectedPlayer = player;
    },
    validatePlayer() {
      if (this.selectedPlayer.value + this.teamValue > 100)
        this.pointsError = true;
      else {
        this.team.find(
          lane => lane.name === this.selectedLane
        ).player = this.selectedPlayer;
        this.closeDialog();
      }
    }
  }
};
</script>

<style scoped lang="scss">
.subtext {
  font-size: 15px;
}

.player {
  border: 1px solid var(--v-secondary-base);
  position: relative;
  cursor: pointer;
  &:hover {
    background: silver;
  }

  &.selected {
    outline: 4px solid var(--v-secondary-base);
  }

  .player-value {
    position: absolute;
    bottom: -15px;
    left: 35%;
    background: linear-gradient(
      0.25turn,
      var(--v-darkPurple-base),
      var(--v-info-base),
      var(--v-secondary-base)
    ) !important;
    cursor: pointer;
  }

  .team-logo {
    border-radius: 50%;
    background: white;
    position: absolute;
    right: -38px;
    bottom: 20%;
    height: 60px;
  }
}

.disabled {
  background: rgb(66, 62, 62) !important;
}

.card-title,
.btn {
  background: linear-gradient(
    0.25turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}

.participate {
  height: 60px !important;
}

.circle {
  position: absolute;
  top: 20px;
  left: 230px;
  width: 75px;
  height: 75px;
  background: var(--v-darkPurple-base);
  border-radius: 50%;
  color: #fff;
}

.my-team {
  .player-picture {
    width: 100px !important;
  }
  .team-logo-wrapper {
    width: 80px;
    background-color: white;
    border-radius: 50%;

    .team-logo {
      width: 50px !important;
    }
  }

  .lane-logo {
    border-radius: 50%;
    &.clickable {
      cursor: pointer;
      &:hover {
        background: silver;
      }
    }
  }
}
</style>
