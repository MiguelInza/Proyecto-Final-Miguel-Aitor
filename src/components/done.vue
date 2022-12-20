<template>

</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";

export default {
  data() {
    return {
      title: "",
      title2: "",
      title3: "",
      editTitle: "",
      todos: [],
      status: 3,
      boton: false,
    };
  },
  methods: {
    newTask3() {
      this.status = 3;
      this.tasksStore.createTask(
        this.userStore.user.id,
        this.title3,
        this.status
      );
      this.title3 = "";
    },
    removeTask(taskId) {
      this.tasksStore.deleteTask(taskId);
    },
    editTask3(taskId, title) {
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
</style>
