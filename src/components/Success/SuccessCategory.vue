<template>
  <v-card class="my-3">
    <div class="card-title d-flex justify-space-between align-center">
      <v-card-title>{{ label }}</v-card-title>
      <v-icon class="mr-5" @click="isExpanded = !isExpanded">{{
        `fas fa-chevron-${isExpanded ? "up" : "down"}`
      }}</v-icon>
    </div>
    <v-slide-y-transition>
      <v-row v-if="isExpanded" class="pa-5">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="success in successList"
          :key="success.id"
        >
          <v-card
            :class="`success-card ${!success.isDone && 'disabled'}`"
            :disabled="!success.isDone"
          >
            <v-card-title class="card-title"></v-card-title>
            <v-progress-linear
              v-if="!success.isDone"
              color="#0CE1C4"
              :value="(progress / success.goal) * 100"
            ></v-progress-linear>
            <div class="text-h4 text-center py-5">
              {{ success.label }}
              <div v-if="!success.isDone" class="text-subtitle-1">
                Progression : {{ `${progress}/${success.goal}` }}
              </div>
              <div v-else class="text-subtitle-1">
                Succès validé le 25/11/2020
                <span class="success-mark">✔</span>
              </div>
              <div
                class="reward text-subtitle-1 d-inline text-no-wrap rounded-pill pa-2"
              >
                {{ success.reward }} Betties
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    label: String,
    successList: Array,
    progress: Number
  },
  data: () => ({
    isExpanded: false
  })
};
</script>

<style></style>
