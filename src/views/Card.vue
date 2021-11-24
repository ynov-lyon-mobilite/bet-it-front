<template>
  <v-card class="mx-auto panier" id="panier" max-width="344">
    <v-card-title class="title">
      Panier
    </v-card-title>

    <div class="line"></div>

    <v-card-subtitle class="team-bet" v-for="bet in cart" :key="bet">
      Team 1 : {{ bet.betTeam.name }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  computed: {
    cart() {
      console.log(this.$store.state.cart);
      // Cart is correctly added
      return this.$store.state.cart;
    },
  },
};


// $(function(){

  // jQuery methods go here...

// var card = $("#panier").offset();

//   $(window).scroll(function() {
//       if ($(window).scrollTop() > card.top) {
//           $("#panier")
//         .css("position", "fixed")
//         .css("top", "3%");
//     } else {
//         $("#panier").css("position", "absolute");
//     }
//   });
// });

</script>

<style lang="scss" scoped>
.panier {
  position: absolute;
  top: 414px;
  right: 3%;
  min-width: 20%;
  min-height: 600px;
  background-color: aliceblue;
  z-index: 10;

  .team-bet {
    color: black;
  }

  .title {
    justify-content: center;
    color: black;
  }
  .line {
    justify-content: center;
    height: 1px;
    background-color: black;
    width: 30%;
    margin: auto;
  }
}
</style>
