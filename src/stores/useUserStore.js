import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: null, // User email
  }),
  actions: {
    setEmail(newEmail) {
      //   this.$patch({ email: newEmail })
      this.email = newEmail
    },
    setName(newName) {
      this.name = newName
    },
    clearUser() {
      this.email = null
      this.name = null
    },
  },
  persist: true, // Keeps data even after refresh (optional)
})
