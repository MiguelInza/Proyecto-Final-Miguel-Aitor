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
    async signUp(emailup, passwordup) {
      const { data, error } = await supabase.auth.signUp({
        email: emailup,
        password: passwordup,
      });
      if (error) throw error;
      this.$router.push("/signIn");
    },

      /*
      - otra forma del async de arriba -
      const response = await supabase.auth.signUp({
        email: emailup,
        password: passwordup,
      })
      const data = response.data
      const error = response.error
      */

    async signIn(emailin, passwordin) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailin,
        password: passwordin,
      });
      /*if (error) throw error;*/
      if (error) {
        alert("Email o Password incorrecto. Asegúrese de estar registrado.")
      }
      if (data.user) {
        this.user = data.user;
        this.$router.push("/Dashboard");
      }
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.$router.push("/");
    },
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
