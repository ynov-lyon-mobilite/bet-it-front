<template>
  <div class="bet-type d-flex justify-space-around align-center">
    <div class="bet-label text-h5 text-center">{{ bet.label }}</div>
    <v-text-field
      @keypress="isNumber($event)"
      v-model="amount"
      outlined
      class="px-4 px-md-12 mt-8"
      label="Mise"
      color="black"
      clearable
      dense
    ></v-text-field>
    <div class="d-flex flex-column align-center">
      <v-img :src="bet.team.logo" width="60"></v-img>
      <div class="text-h6">{{ bet.odd }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bet: Object
  },
  data: () => ({
    amount: null
  }),
  methods: {
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.bet-label {
  width: 150px;
  /* font-size: 30px; */
}

.bet-type {
  border-bottom: 1px solid silver;
}

.bet-types {
  flex-grow: 1;
}

.v-input {
  color: white !important;
}
</style>
