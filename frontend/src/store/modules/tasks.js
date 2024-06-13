import axios from "axios";

const state = {
  tasks: [],
};

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  ADD_TASK(state, task) {
    state.tasks.push(task);
  },
  UPDATE_TASK(state, updatedTask) {
    const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
    }
  },
  REMOVE_TASK(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
  },
};

const actions = {
  async fetchTasks({ commit }) {
    const response = await axios.get("/api/tasks/");
    commit("SET_TASKS", response.data);
  },
  async createTask({ commit }, task) {
    const response = await axios.post("/api/tasks/", task);
    commit("ADD_TASK", response.data);
  },
  async updateTask({ commit }, task) {
    const response = await axios.put(`/api/tasks/${task.id}`, task);
    commit("UPDATE_TASK", response.data);
  },
  async deleteTask({ commit }, taskId) {
    await axios.delete(`/api/tasks/${taskId}`);
    commit("REMOVE_TASK", taskId);
  },
};

const getters = {
  tasks: (state) => state.tasks,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
