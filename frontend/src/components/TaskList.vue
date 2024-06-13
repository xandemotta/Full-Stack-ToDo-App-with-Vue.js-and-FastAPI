<template>
  <v-container>
    <v-list>
      <v-list-item v-for="task in tasks" :key="task.id">
        <v-list-item-content>
          <v-list-item-title>{{ task.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="editTask(task)">Edit</v-btn>
          <v-btn @click="deleteTask(task.id)">Delete</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("tasks", ["tasks"]),
  },
  methods: {
    ...mapActions("tasks", ["fetchTasks", "editTask", "deleteTask"]),
  },
  mounted() {
    this.fetchTasks();
  },
};
</script>
