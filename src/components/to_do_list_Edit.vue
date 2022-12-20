<template>
  <form @submit.prevent="editTask(item.id, item.title)">
    <button class="btn-edit" @click="boton = !boton">Editar</button>
    <input v-if="boton" v-model="item.title" />
  </form>
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";

export default {
  props: {
    item: {
        type: Object,
        required: false
    },
  },
  data() {
    return {
      title: "",
      title2: "",
      title3: "",
      editTitle: "",
      todos: [],
      status: 1,
      boton: false,
    };
  },
  methods: {
    newTask() {
      this.status = 1;
      this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        this.status
      );
      this.title = "";
    },
    removeTask(taskId) {
      this.tasksStore.deleteTask(taskId);
    },
    editTask(taskId, title) {
      this.tasksStore.updateTask(taskId, title);
    },
  },
  computed: {
    ...mapStores(userStore),
    ...mapStores(tasksStore),
  },
  mounted() {
    this.tasksStore.fetchTasks();
  },
};
</script>

<style scoped>
.listado-tareas {
  word-wrap: break-word;
  background-color: rgb(87, 195, 195);
  margin: 4px;
  border-radius: 7px;
  list-style: none;
  padding: 10px;
}
.allButtons {
  display: flex;
  justify-content: space-around;
  padding: 8px;
}

.btn-edit {
  margin-left: 4px;
  margin-right: 4px;
  background-color: rgb(32, 100, 100);
  color: white;
  padding: 5px 10px;
  border-radius: 14px;
  font-size: 12px;
}
</style>
