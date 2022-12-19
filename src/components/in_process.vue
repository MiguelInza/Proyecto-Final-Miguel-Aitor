<template>
        <li class="listado-tareas" v-for="task in tasksStore.pendingTasks">
          {{ task.title }}  {{ task.status }}
          <div class="allButtons" >
            <form @submit.prevent="editTask2(task.id, task.title2)">
              <button @click="boton = !boton">Edit</button>
              <input v-if="boton" v-model="task.title2"/> 
            </form>
            <button @click="removeTask(task.id)">Remove</button>
            <button @click="">In Process</button>
            <button @click="">Done</button>
          </div>
        </li>
  
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
      status: 2,
      boton: false,
    };
  },
  methods: {
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
</style>
