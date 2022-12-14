<template>

    <!--
    <div class="signup">
    <form @submit.prevent="signUp">
    <input type="text" v-model="emailup" placeholder="Email">
    <input type="text" v-model="passwordup" placeholder="Password">
    <button class="button-sign-up"   type="submit">Sign Up!</button>    
    </form>
</div>

<div class="signin">
    <form @submit.prevent="signIn">
    <input type="text" v-model="emailin" placeholder="Email">
    <input type="text" v-model="passwordin" placeholder="Password">
    <button class="button-sign-in" type="submit">Sign In!</button>    
    </form>
</div>
-->


    <header>
    <h1>Our tasks</h1>
  </header>
  <div id="div1">
    <section id="sec1" :style="{ height: 170 + columnHeightFactor + 'px' }">
      <h2>TO-DO list</h2>
      <form v-on:submit.prevent="addNewTodo">
        <label class="add-task"  for="new-todo">New task</label>
        <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="write here!"
        />
        <button>Add</button>
      </form>
      <ul>

        <li class="listado-tareas"
          v-for="(todo, index) in todos"
          :key="todo.id"
          :title="todo.title">
          {{ todo.title }}
          <button @click="todos.splice(index, 1)">Remove</button>
          <button @click="">In Proc.</button>
          <button @click="">Done</button>
        
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


import { mapStores } from 'pinia'
import userStore from '../stores/user'

  export default {
   
    data() {
      return {
        newTodoText: '',
        todos: [
        
        ],
        nextTodoId: 1
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
        ...mapStores (userStore),
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

.listado-tareas {
    background-color: rgb(87, 195, 195);
    margin: 4px;
    border-radius: 7px;
    list-style: none;
    padding-left: 7px;
}

/*
.signin {
    display: flex;
   
    justify-content: right;
    margin-top: 20px;
    padding-right: 30px;
}
.signup {
    display: flex;
   
    justify-content: right;
    margin-top: 20px;
 padding-right: 30px;
}
.button-sign-in {
    margin: 0 10px;
    padding: 0 9px;
}
.button-sign-up {
margin: 0 10px;
}
*/

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