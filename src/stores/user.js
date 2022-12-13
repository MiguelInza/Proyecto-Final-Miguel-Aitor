// /store/user.js



import { defineStore } from "pinia";

import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();

      this.user = user;
    },

    async signUp(email, password) {
      const { data, error } = await supabase.auth.signUp({
        email: email,

        password: password,
      });

      if (error) throw error;

      if (data.user) this.user = data.user;
    },
/*
 - otra forma del async de arriba -
const response = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})

const data = response.data
const error = response.error
*/
    
    async  signInWithEmail(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'example@email.com',
        password: 'example-password',
      })
    }

    
  
  },
  persist: {
    enabled: true,

    strategies: [
      {
        key: "user",

        storage: localStorage,
      },
    ],
  },
});
