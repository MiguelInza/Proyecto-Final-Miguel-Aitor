<template>
  <header>
    <h1>Our tasks</h1>
  </header>
  <div id="div1">
    <section id="sec1">
      <h2>TO-DO list</h2>
      <form @submit.prevent="newTask">
        <button>Add New Task</button>
        <input v-model="title" placeholder="write here!" />
      </form>

      <ul>
        <li class="listado-tareas" v-for="task in tasksStore.tasks">
          {{ task.title }}
          <div class="allButtons">

           <!--
            <form @submit.prevent="editTask(task.id, task.title)">
              <button>Edit</button>
              <input v-if="false" v-model="task.title" placeholder="Edit here!"/> 
            </form>
            -->
            <form @submit.prevent="editTask(task.id, task.title)">
              <button @click="boton = !boton">Edit</button>
              <input v-if="boton" v-model="task.title" placeholder="Edit here!"/> 
            </form>
           

            <button @click="removeTask(task.id)">Remove</button>
            <button @click="">In Proc.</button>
            <button @click="">Done</button>
          </div>
        </li>
      </ul>
    </section>
    <section id="sec2">
      <h2>In process</h2>
    </section>
    <section id="sec3">
      <h2>Done</h2>
    </section>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";

export default {
  data() {
    return {
      title: "",
      editTitle: "",
      todos: [],
      status: 1,
      boton: false,
    };
  },
  methods: {
    newTask() {
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
.add-task {
  background-color: rgb(118, 198, 118);
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px 8px;
  border-radius: 5px;
}
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

header {
  background-color: rgb(172, 172, 225);
  /*width: 90vw;*/
  height: 70px;
  display: flex;
  justify-content: center;
  margin: 20px;
  border-radius: 15px;
}
#div1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
h2 {
  text-align: center;
}
#sec1 {
  background-color: rgb(207, 43, 70);
  border-style: double;
  width: 350px;
  /*height: 600px;*/
  margin: 10px;
  border-radius: 20px;
}
#sec2 {
  border-style: double;
  /*background-color:red;*/
  background-color: rgb(240, 240, 131);
  width: 350px;
  height: 170px;
  margin: 10px;
  border-radius: 15px;
}
#sec3 {
  border-style: double;
  /*background-color: green;*/
  background-color: rgb(122, 223, 122);
  width: 350px;
  height: 170px;
  margin: 10px;
  border-radius: 15px;
}
</style>
