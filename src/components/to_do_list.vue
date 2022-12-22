<template>
  <form @submit.prevent="newTask">
    <button class="btn-nueva-tarea">Nueva tarea</button>
    <input v-model="title" placeholder="añadir" />
  </form>
  <ul class="marg-list-1" v-if="this.estado == 1" @drop="onDrop($event, 1)"   @dragover.prevent
  @dragenter.prevent>
    <li class="listado-tareas-1" v-for="task in tasksStore.doingTasks" draggable="true" @dragstart="startDrag($event, task)">
      {{ task.title }}
      <div class="allButtons">
        <to_do_list_Edit :item="task"></to_do_list_Edit>
        <button class="btn-1" @click="removeTask(task.id)">Borrar</button>
        <button class="btn-2" @click="Moviendo(task.id, 2)">
          Trabajando
        </button>
        <button class="btn-3" @click="Moviendo(task.id, 3)">
          Terminado
        </button>
      </div>
    </li>
  </ul>
  <ul class="marg-list-2" v-else-if="this.estado == 2" @drop="onDrop($event, 2)"   @dragover.prevent
  @dragenter.prevent>
    <li class="listado-tareas-2" v-for="task in tasksStore.pendingTasks" draggable="true" @dragstart="startDrag($event, task)">
      {{ task.title }}
      <div class="allButtons">
        <to_do_list_Edit :item="task"></to_do_list_Edit>
        <button class="btn-1" @click="removeTask(task.id)">Borrar</button>
        <button class="btn-2" @click="Moviendo(task.id, 1)">
          Iniciar
        </button>
        <button class="btn-3" @click="Moviendo(task.id, 3)">
          Terminado
        </button>
      </div>
    </li>
  </ul>
  <ul class="marg-list-3" v-else-if="this.estado == 3" @drop="onDrop($event, 3)"   @dragover.prevent
  @dragenter.prevent>
    <li class="listado-tareas-3" v-for="task in tasksStore.doneTasks" draggable="true" @dragstart="startDrag($event, task)">
      {{ task.title }}
      <div class="allButtons">
        <to_do_list_Edit :item="task"></to_do_list_Edit>
        <button class="btn-1" @click="removeTask(task.id)">Borrar</button>
        <button class="btn-2" @click="Moviendo(task.id, 1)">
          Iniciar
        </button>
        <button class="btn-3" @click="Moviendo(task.id, 2)">
          Trabajando
        </button>
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
      required: false,
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
    startDrag(evt, task) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('taskId', task.id)
    },
    onDrop(evt, status) {
      const taskId = evt.dataTransfer.getData('taskId')
      this.tasksStore.Moviendo(taskId, status);
      console.log("onDrop")
    },
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
    Moviendo(taskId, status) {
      this.tasksStore.Moviendo(taskId, status);
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
  min-height: 200px;
}
.marg-list-2 {
  margin-left: -17px;
  margin-right: 9px;
  min-height: 200px;
}
.marg-list-3 {
  margin-left: -17px;
  margin-right: 9px;
  min-height: 200px;
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
  padding: 5px;
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
  padding: 5px;
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
  padding: 5px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 3px 3px 1px;
}
.allButtons {
  display: flex;
  justify-content: space-around;
  padding: 0px;
  flex-wrap: wrap;
}
.btn-1 {
  margin: 4px;
  background-color: rgb(216, 66, 6);
  color: white;
  padding: 5px 5px;
  border-radius: 14px;
  font-size: 12px;
  cursor: pointer;
}
.btn-2 {
  margin: 4px;
  background-color: rgb(138, 92, 143);
  color: white;
  padding: 5px 5px;
  border-radius: 14px;
  font-size: 12px;
  cursor: pointer;
}
.btn-3 {
  margin: 4px;
  background-color: rgb(138, 92, 143);
  color: white;
  padding: 5px 5px;
  border-radius: 14px;
  font-size: 12px;
  cursor: pointer;
}
</style>
