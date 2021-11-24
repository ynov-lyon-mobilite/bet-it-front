<template>

  <!-- Add Scrollable Prop -->
  <v-dialog scrollable :value="createToggle" @input="onCancel" persistent :fullscreen="$vuetify.breakpoint.xsOnly" :max-width="dialogWidth">

    <v-card>
      
      <v-card-title class="pa-0">
        <v-toolbar flat>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon class="heading grey--text text--darken-4">close</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card-title>

      ...

      <v-card-actions> 
        <v-btn>Cancel</v-btn> 
        <v-btn>Save</v-btn>           
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  props: {
    bet: Object,
  },
//   data() {
//     return {
//       user: {},
//       amount: null,
//       hasBet: false,
//       errors: {
//         betInput: false,
//         bettiesAmount: false,
//       },
//       total: {},
//     };
//   },
//   computed: {
//     getuser() {
//       return this.$store.state.user;
//     },
//     betHistory() {
//       return this.$store.state.betHistory;
//     },
//     hasAlreadyBet() {
//       return (
//         this.betHistory.find((bet) => bet.id === this.bet.id) !== undefined
//       );
//     },
//     hasBetOpponent() {
//       return this.betHistory.find(
//         (bet) =>
//           bet.game.id === this.bet.game.id &&
//           bet.type === this.bet.type &&
//           bet.team !== this.bet.team
//       );
//     },
//     canBet() {
//       return !this.hasAlreadyBet && !this.hasBetOpponent;
//     },
//   },
//   methods: {
//     getAmount() {
//       const bet = this.betHistory.find((bet) => bet.id === this.bet.id);
//       if (bet) this.amount = bet.amount;
//     },
//     isNumber(evt) {
//       evt = evt ? evt : window.event;
//       const charCode = evt.which ? evt.which : evt.keyCode;
//       if (
//         charCode > 31 &&
//         (charCode < 48 || charCode > 57) &&
//         charCode !== 46
//       ) {
//         evt.preventDefault();
//       } else {
//         return true;
//       }
//     },
//     wantToBet() {
//       if (!this.amount || parseFloat(this.amount) === 0)
//         this.errors.betInput = true;
//       else if (this.amount > this.getuser.betties)
//         this.errors.bettiesAmount = true;
//       else this.hasBet = true;
//     },
//     confirmBet() {
//       this.$store.dispatch({
//         type: "betAction",
//         bet: { ...this.bet, amount: parseFloat(this.amount), date: new Date() },
//       });
//       this.hasBet = false;
//       this.$store.state.betties = this.$store.state.betties- this.amount;
//       // this.$store.dispatch("PutBetties", {
//       //   betties: this.getuser.betties,
//       //   id: this.getuser.id,
//       // });
//     },
//   },
//   mounted() {
//     this.getAmount();
//   },
};
</script>