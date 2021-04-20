<template>
  <v-dialog v-model="error.value" width="400">
    <v-card class="d-flex flex-column align-center pa-8">
      <v-card-text class="text-center">{{ error.text }}</v-card-text>
      <v-card-actions
        ><v-btn color="secondary darken-1" text @click="error.value = false">
          OK
        </v-btn></v-card-actions
      >
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ErrorDialog",
  props: {
    error: Object
  }
};
</script>

<style></style>
