<template>
  <header>
    <h1>Listado de tareas</h1>
  </header>

  <div id="div1">
    <section id="sec1">
      <h2>Iniciar</h2>
      <to_do_list :estado="1"> </to_do_list>
    </section>

    <section id="sec2">
      <h2>Trabajando</h2>
      <to_do_list :estado="2"> </to_do_list>
    </section>

    <section id="sec3">
      <h2>Terminado</h2>
      <to_do_list :estado="3"> </to_do_list>
    </section>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";
import to_do_list from "../components/to_do_list.vue";

export default {
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
    to_do_list,
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
    newTask2() {
      this.status = 2;
      this.tasksStore.createTask(
        this.userStore.user.id,
        this.title2,
        this.status
      );
      this.title2 = "";
    },
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
    editTask(taskId, title) {
      this.tasksStore.updateTask(taskId, title);
    },
    editTask2(taskId, title2) {
      this.tasksStore.updateTask(taskId, title2);
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
header {
  background-color: rgb(172, 172, 225);
  /*width: 90vw;*/
  margin-top: 110px;
  border-radius: 15px;
}

#div1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  vertical-align: middle;
  font-variant: small-caps;
  letter-spacing: 3px;
  text-shadow: 3px 2px 3px rgb(118, 118, 175);
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
  box-shadow: 3px 3px 1px;
  margin-bottom: 40px;
}

#sec2 {
  background-color: rgb(240, 240, 131);
  border-style: double;
  width: 350px;
  /*height: 170px;*/
  margin: 10px;
  border-radius: 20px;
  box-shadow: 3px 3px 1px;
  margin-bottom: 40px;
}

#sec3 {
  background-color: rgb(122, 223, 122);
  border-style: double;
  width: 350px;
  /*height: 170px;*/
  margin: 10px;
  border-radius: 20px;
  box-shadow: 3px 3px 1px;
  margin-bottom: 40px;
}

@media (max-width: 1000px) {
  header {
    margin-top: 70px;
  }
}
</style>
