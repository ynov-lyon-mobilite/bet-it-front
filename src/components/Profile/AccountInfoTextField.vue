<template>
  <div class="d-flex align-center">
    <v-text-field
      v-model="inputValue"
      :label="label"
      :ref="fieldName"
      :disabled="!editMode"
      @blur="editMode = false"
      @keyup.enter="$event.target.blur()"
      @change="setValue"
    ></v-text-field>
    <v-icon class="icon ml-2" @click="edit">fas fa-edit</v-icon>
  </div>
</template>

<script>
export default {
  props: {
    fieldName: String,
    fieldValue: String
  },
  data: () => ({
    value: "",
    editMode: false,
    labels: {
      email: "Email",
      phoneNumber: "Numéro de téléphone",
      username: "Nom d'utilisateur",
      alias: "Alias"
    }
  }),
  methods: {
    edit() {
      if (!this.editMode) this.editMode = true;
      this.$nextTick(this.$refs[this.fieldName].focus);
    },
    setValue() {
      this.$emit("value", this.value);
    }
  },
  computed: {
    label() {
      return this.labels[this.fieldName];
    },
    inputValue: {
      get() {
        return this.fieldValue;
      },
      set(value) {
        this.value = value;
      }
    }
  }
};
</script>

<style></style>
