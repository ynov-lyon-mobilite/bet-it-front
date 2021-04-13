<template>
  <div>
    <RoomInfos />
    <div class="d-flex flex-column align-center">
      <v-card color="#1e1e1e" class="my-8" width="700">
        <v-card-title class="card-title">Je constitue mon équipe</v-card-title>
        <div class="d-flex flex-column my-team pa-8">
          <div
            v-for="lane in team"
            :key="lane.name"
            class="d-flex justify-center flex-wrap align-center my-4 my-md-2"
          >
            <img
              :class="`lane-logo pa-2 mx-1 ${!lane.player && 'clickable'}`"
              :src="lane.logo"
              :alt="lane.name"
              @click="!lane.player && selectLane(lane.name)"
            />
            <div
              v-if="lane.player"
              class="team-logo-wrapper d-flex justify-center pa-2 mx-1"
            >
              <img class="team-logo " :src="lane.player.team.logo" />
            </div>
            <img
              class="player-picture mx-1"
              v-if="lane.player"
              :src="lane.player.picture"
            />
            <h4 v-if="lane.player" class="text-center text-uppercase mx-1">
              {{ lane.player.name }}
            </h4>
            <v-icon
              x-large
              v-if="lane.player && ((fantasyTeam && editMode) || !fantasyTeam)"
              class="mx-2 my-4 my-md-0"
              @click="removePlayer(lane)"
              >fa-times-circle</v-icon
            >
          </div>
        </div>
        <div class="text-center py-2 mx-6">
          Valeur actuelle de l'équipe : {{ teamValue }}/100
        </div>
        <div class="d-flex flex-column justify-center align-center my-3">
          <v-btn
            v-if="fantasyTeam && !editMode"
            @click="editTeam"
            class="btn rounded-pill pa-5 mb-2 text-h4"
            ><h2>Modifier</h2></v-btn
          >
          <v-btn
            v-if="fantasyTeam && editMode"
            @click="confirmTeamEdition"
            :class="
              `btn rounded-pill pa-5 mb-2 text-h4 ${!canParticipate &&
                'disabled'}`
            "
            :disabled="!canParticipate"
            ><h2>Valider les modifications</h2></v-btn
          >
          <v-btn
            v-if="fantasyTeam && editMode"
            @click="cancelTeamEdition"
            class="
            `pa-5 mb-2 text-h4
            "
            ><h2>Annuler les modifications</h2></v-btn
          >
        </div>
      </v-card>
    </div>
    <div class="d-flex flex-column align-center">
      <v-btn
        v-if="!fantasyTeam"
        :disabled="!canParticipate"
        :class="
          `btn rounded-pill pa-5 mb-2 text-h4 participate ${!canParticipate &&
            'disabled'}`
        "
        @click="validateTeam"
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
          <v-icon @click="closePlayerDialog">fas fa-times</v-icon></v-card-title
        >
        <div class="pa-4">
          <div class="d-flex justify-space-between">
            <div>Points restant : {{ 100 - teamValue }}</div>
            <h4>Valeur actuelle de l'équipe : {{ teamValue }}/100</h4>
          </div>
          <div class="d-flex flex-wrap justify-center overflow-y-auto">
            <div
              v-for="player in selectablePlayers"
              :class="
                `player d-flex flex-column ma-8 ${player === selectedPlayer &&
                  'selected'}`
              "
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
                <v-img width="50" :src="player.team.logo"></v-img>
              </div>
            </div>
          </div>
          <div class="d-flex justify-center my-4">
            <v-btn class="rounded-pill mx-4" @click="closePlayerDialog"
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
    <v-dialog v-model="isValidatingTeam">
      <v-card>
        <v-card-title class="card-title"
          ><h2>Je valide mon équipe et passe au paiement</h2></v-card-title
        >
        <v-card-text class="text-center pa-4 white--text text-h5"
          ><p>Vous êtes sur le point de valider votre équipe.</p>
          <p>
            Vous pouvez la modifier jusqu'au 23/04 dans l'onglet : Mes salons
          </p>
          <p>
            Pour participer, il ne vous reste plus qu'à payer l'inscription !
          </p></v-card-text
        >
        <v-card-actions class="flex-column align-center"
          ><v-btn
            class="
          btn rounded-pill pa-5 mb-8 text-h4 validate
        "
            @click="confirmTeamValidation"
            >Je paie ma participation !
            <div class="circle d-flex justify-center align-center">
              1€
            </div></v-btn
          >
          <v-btn
            class="rounded-pill pa-5 mb-4 text-h5 cancel"
            @click="leaveTeamValidation"
            >Annuler</v-btn
          ></v-card-actions
        >
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import RoomInfos from "@/components/Fantasy/RoomInfos";
import players from "@/assets/fixtures/players";

export default {
  name: "Fantasy",
  components: {
    RoomInfos
  },
  data: () => ({
    isSelectingPlayer: false,
    isValidatingTeam: false,
    selectedLane: null,
    selectedPlayer: null,
    pointsError: false,
    editMode: false,
    players,
    team: [
      {
        name: "top",
        logo: require("../assets/fantasy/top.png"),
        player: null
      },
      {
        name: "jungler",
        logo: require("../assets/fantasy/jungle.png"),
        player: null
      },
      {
        name: "mid",
        logo: require("../assets/fantasy/mid.png"),
        player: null
      },
      {
        name: "adc",
        logo: require("../assets/fantasy/adc.png"),
        player: null
      },
      {
        name: "support",
        logo: require("../assets/fantasy/support.png"),
        player: null
      },
      {
        name: "coach",
        logo: require("../assets/fantasy/coach.png"),
        player: null
      }
    ]
  }),
  computed: {
    betties() {
      return this.$store.state.betties;
    },
    fantasyTeam() {
      return this.$store.state.fantasyTeam;
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
    removePlayer(removedPlayerLane) {
      this.team.find(
        lane => lane.name === removedPlayerLane.name
      ).player = null;
    },
    closePlayerDialog() {
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
        this.closePlayerDialog();
      }
    },
    editTeam() {
      this.editMode = true;
    },
    leaveTeamEdition() {
      this.editMode = false;
    },
    validateTeam() {
      this.isValidatingTeam = true;
    },
    leaveTeamValidation() {
      this.isValidatingTeam = false;
    },
    registerTeam() {
      this.$store.dispatch({
        type: "validateTeam",
        team: [...this.team]
      });
    },
    confirmTeamValidation() {
      this.registerTeam();
      this.leaveTeamValidation();
    },
    confirmTeamEdition() {
      this.registerTeam();
      this.leaveTeamEdition();
    },
    cancelTeamEdition() {
      this.team = [...this.fantasyTeam];
      this.leaveTeamEdition();
    }
  },
  mounted() {
    this.team = [...this.fantasyTeam];
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

.participate,
.validate {
  height: 60px !important;
  position: relative;
}

.cancel {
  height: 60px !important;
}

.participate {
  .circle {
    top: 20px;
    left: 230px;
  }
}

.validate {
  .circle {
    top: 20px;
    right: -69px;
  }
}

.circle {
  position: absolute;
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
    width: 70px;
    height: 70px;
    &.clickable {
      cursor: pointer;
      &:hover {
        background: silver;
      }
    }
  }
}
</style>
