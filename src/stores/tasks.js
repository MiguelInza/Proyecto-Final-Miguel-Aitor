// /store/task.js
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: [],
      user_id: "",
      title: "",
      title2: "",
      title3: "",
      status: null,
    };
  },
  getters: {
    doingTasks() {
      return this.tasks.filter(function (task) {
        return task.status === 1;
       });
    },
    pendingTasks() {
      return this.tasks.filter(function (task) {
        return task.status === 2;
       });
    },
    doneTasks() {
      return this.tasks.filter(function (task) {
        return task.status === 3;
       });
    },
  },
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
    async createTask(user_id, title, status) {
      const { error } = await supabase
        .from('tasks')
        .insert({ 
          user_id: user_id, 
          title: title,
          status: status,
        })
        this.fetchTasks()
    },
    async deleteTask(taskId) {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId)
        this.fetchTasks()
    },
    async updateTask(taskId, title) {
      const { error } = await supabase
        .from('tasks')
        .update({ title: title, })
        .eq('id', taskId)
        this.fetchTasks()
    },
    async Empezando(taskId, status) {
      status=1
      const { error } = await supabase
        .from('tasks')
        .update({ status: status, })
        .eq('id', taskId)
        this.fetchTasks()
    },
    async Trabajando(taskId, status) {
      status=2
      const { error } = await supabase
        .from('tasks')
        .update({ status: status, })
        .eq('id', taskId)
        this.fetchTasks()
    },
    async Terminado(taskId, status) {
      status=3
      const { error } = await supabase
        .from('tasks')
        .update({ status: status, })
        .eq('id', taskId)
        this.fetchTasks()
    },
  },
});
