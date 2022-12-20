<template>
  <form @submit.prevent="newTask">
    <button class="btn-nueva-tarea">Nueva tarea</button>
    <input v-model="title" placeholder="añadir" />
  </form>
  <ul class="marg-list-1" v-if="this.estado==1">
    <li class="listado-tareas-1" v-for="task in tasksStore.doingTasks">
      {{ task.title }} 
      <div class="allButtons">
        <to_do_list_Edit :item="task"></to_do_list_Edit>
        <button class="btn-1" @click="removeTask(task.id)">Borrar</button>
        <button class="btn-2" @click="Trabajando(task.id, task.status)">Trabajando</button>
        <button class="btn-3" @click="Terminado(task.id, task.status)">Terminado</button>
      </div>
    </li>
  </ul>
  <ul class="marg-list-2" v-else-if="this.estado==2">
    <li class="listado-tareas-2" v-for="task in tasksStore.pendingTasks">
      {{ task.title }} 
      <div class="allButtons">
        <to_do_list_Edit :item="task"></to_do_list_Edit>
        <button class="btn-1" @click="removeTask(task.id)">Borrar</button>
        <button class="btn-2" @click="Empezando(task.id, task.status)">Iniciar</button>
        <button class="btn-3" @click="Terminado(task.id, task.status)">Terminado</button>
      </div>
    </li>
  </ul>
  <ul class="marg-list-3" v-else-if="this.estado==3">
    <li class="listado-tareas-3" v-for="task in tasksStore.doneTasks">
      {{ task.title }} 
      <div class="allButtons">
        <to_do_list_Edit :item="task"></to_do_list_Edit>
        <button class="btn-1" @click="removeTask(task.id)">Borrar</button>
        <button class="btn-2" @click="Empezando(task.id, task.status)">Iniciar</button>
        <button class="btn-3" @click="Trabajando(task.id, task.status)">Trabajando</button>
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
    Empezando(taskId, status) {
      this.tasksStore.Empezando(taskId, status);
    },
    Trabajando(taskId, status) {
      this.tasksStore.Trabajando(taskId, status);
    },
    Terminado(taskId, status) {
      this.tasksStore.Terminado(taskId, status);
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

.marg-list-1 {
  margin-left: -17px;
  margin-right: 9px;
 
}
.marg-list-2 {
  margin-left: -17px;
  margin-right: 9px;
}
.marg-list-3 {
  margin-left: -17px;
  margin-right: 9px;
}

.btn-nueva-tarea {
  margin-left: 8px;
  margin-right: 8px;
  background-color: rgb(56, 64, 163);
  color: white;
  padding: 5px 10px;
  border-radius: 14px;
  font-weight: bolder;
  cursor: pointer;
}
.listado-tareas-1 {

  word-wrap: break-word;
  background-color: rgb(87, 195, 195);
  margin: 6px 0px;
  border-radius: 12px;
  list-style: none;
  padding: 10px;
  border-width: 1px;
   border-style: solid;
   box-shadow: 3px 3px 1px;
}
.listado-tareas-2 {

word-wrap: break-word;
background-color: rgb(87, 195, 195);
margin: 6px 0px;
border-radius: 12px;
list-style: none;
padding: 10px;
border-width: 1px;
   border-style: solid;
   box-shadow: 3px 3px 1px;
}
.listado-tareas-3 {

word-wrap: break-word;
background-color: rgb(87, 195, 195);
margin: 6px 0px;
border-radius: 12px;
list-style: none;
padding: 10px;
border-width: 1px;
   border-style: solid;
   box-shadow: 3px 3px 1px;
}
.allButtons {
  display: flex;
  justify-content: space-around;
  padding: 8px;

}

.btn-1 {
  margin-left: 4px;
  margin-right: 4px;
  background-color: rgb(216, 66, 6);
  color: white;
  padding: 5px 10px;
  border-radius: 14px;
  font-size: 12px;
  cursor: pointer;
}
.btn-2 {
  margin-left: 4px;
  margin-right: 4px;
  background-color: rgb(138, 92, 143);
  color: white;
  padding: 5px 10px;
  border-radius: 14px;
  font-size: 12px;
  cursor: pointer;
}
.btn-3 {
  margin-left: 4px;
  margin-right: 4px;
  background-color: rgb(138, 92, 143);
  color: white;
  padding: 5px 10px;
  border-radius: 14px;
    font-size: 12px;
    cursor: pointer;
}
</style>
