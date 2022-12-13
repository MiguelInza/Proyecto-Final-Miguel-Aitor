<template>
    <div id="login">
    <form @submit.prevent="login">
    <input type="text" v-model="username" placeholder="Username">
    <input type="text" v-model="password" placeholder="Password">
    <button type="submit">Login!</button>    
    </form>
</div>

    <header>
    <h1>Our tasks</h1>
  </header>
  <div id="div1">
    <section id="sec1" :style="{ height: 170 + columnHeightFactor + 'px' }">
      <h2>TO-DO list</h2>
      <form v-on:submit.prevent="addNewTodo">
        <label class="add-task"  for="new-todo">Add task</label>
        <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="Add task!"
        />
        <button>Add</button>
      </form>
      <ul >
        <todo-item id="ul1"
          v-for="(todo, index) in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="todos.splice(index, 1)">
    </todo-item>
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

import TodoItem from '../components/TodoItem.vue'
  export default {
    components: { TodoItem },
    data() {
      return {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Task1'
          },
          {
            id: 2,
            title: 'Task2'
          },
          {
            id: 3,
            title: 'Task3'
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      addNewTodo() {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      },
    },
    computed: {
      columnHeightFactor() {
      return this.todos.length*21;
    },
    },
  }
</script>

<style scoped>
.add-task {
    background-color: rgb(118, 198, 118);
    margin-left: 10px;
    margin-right: 10px;
    padding: 8px 8px;
    border-radius: 5px;
}

#ul1 {
    background-color: rgb(87, 195, 195);
    margin: 4px;
    border-radius: 7px;
    list-style: none;
    padding-left: 15px;
}

#login {
    display: flex;
    justify-content: right;
    margin-top: 20px;
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
  background-color: rgb(225, 149, 162);
  border-style: double;
  width: 300px;
  /*height: 600px;*/
  margin: 10px;
border-radius: 20px;
}
#sec2 {
  border-style: double;
  /*background-color:red;*/
  width: 300px;
  height: 170px;
  margin: 10px;
}
#sec3 {
  border-style: double;
  /*background-color: green;*/
  width: 300px;
  height: 170px;
  margin: 10px;
}
</style>