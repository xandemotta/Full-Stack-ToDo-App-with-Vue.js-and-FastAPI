<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="task.title"
        label="Title"
        maxlength="20"
        required
      ></v-text-field>
      <v-textarea
        v-model="task.description"
        label="Description"
        maxlength="100"
        required
      ></v-textarea>
      <v-btn type="submit">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapActions("tasks", ["createTask", "updateTask"]),
    submitForm() {
      if (this.task.id) {
        this.updateTask(this.task);
      } else {
        this.createTask(this.task);
      }
      this.$router.push("/tasks");
    },
  },
};
</script>
