<template>
        <v-card class="card">
            <v-fab-transition>
              <v-btn
                v-show="!hidden"
                color="blue"
                dark
                absolute
                bottom
                right
                fab
                fixed
              >
              <v-icon>mdi-plus</v-icon>

              </v-btn>
            </v-fab-transition>
        </v-card>
</template>

<script>
  export default {
    data: () => ({
      //Set false to show button
      hidden: true,
    }),
  }
</script>

<style>
.card .v-btn {
  
    bottom: 20px!important;
    right: 20px;
  
}

</style>