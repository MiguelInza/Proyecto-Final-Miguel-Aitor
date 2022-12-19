<template>
  <form @submit.prevent="newTask">
    <button>Add New Task</button>
    <input v-model="title" placeholder="write here!" />
  </form>
  <ul v-if="this.estado==1">
    <li class="listado-tareas" v-for="task in tasksStore.doingTasks">
      {{ task.title }} {{ task.status }}
      <div class="allButtons">
        <to_do_list_Edit :item="task"></to_do_list_Edit>
        <button @click="removeTask(task.id)">Remove</button>
        <button @click="">In Process</button>
        <button @click="">Done</button>
      </div>
    </li>
  </ul>
  <ul v-else-if="this.estado==2">
    <li class="listado-tareas" v-for="task in tasksStore.pendingTasks">
      {{ task.title }} {{ task.status }}
      <div class="allButtons">
        <to_do_list_Edit :item="task"></to_do_list_Edit>
        <button @click="removeTask(task.id)">Remove</button>
        <button @click="">In Process</button>
        <button @click="">Done</button>
      </div>
    </li>
  </ul>
  <ul v-else-if="this.estado==3">
    <li class="listado-tareas" v-for="task in tasksStore.doneTasks">
      {{ task.title }} {{ task.status }}
      <div class="allButtons">
        <to_do_list_Edit :item="task"></to_do_list_Edit>
        <button @click="removeTask(task.id)">Remove</button>
        <button @click="">In Process</button>
        <button @click="">Done</button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";
import to_do_list_Edit from "../components/to_do_list_Edit.vue";

export default {
  props: {
    estado: {
        type: Number,
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
      status: null,
      boton: false,
    };
  },
  components: {
    to_do_list_Edit,
  },
  methods: {
    newTask() {
      this.status = this.estado;
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
</style>
