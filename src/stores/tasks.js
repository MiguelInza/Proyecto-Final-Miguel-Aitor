// /store/task.js
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: null,
      user_id: "",
      title: "",
      status: 1,
    };
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
    async updateTask(taskId) {
      const { error } = await supabase
        .from('tasks')
        .update({ title: title, })
        .eq('id', taskId)
        //this.fetchTasks()
    }
  },
});
