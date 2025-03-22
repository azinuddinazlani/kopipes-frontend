import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    email: null,
    name: null,
    type: null, // User status (e.g., "Pending")
    location: null,
    about: {}, // Can be an object
    education: null,
    experience: null,
    position: null,
    skills: [],
    jobs: null,
    employer_jobs: [],
    skill_assess: [],
    resume: null, // URL or file reference
    resume_base64: null, // If storing as base64
  }),
  actions: {
    setEmail(newEmail) {
      //   this.$patch({ email: newEmail })
      this.email = newEmail
    },
    setName(newName) {
      this.name = newName
    },
    setUserType(newType) {
      this.type = newType
    },
    setUserDetails(userData) {
      this.id = userData.id
      this.email = userData.email
      this.name = userData.name
      this.type = userData.type
      this.location = userData.location
      this.about = userData.about
      this.education = userData.education
      this.experience = userData.experience
      this.position = userData.position
      this.skills = userData.skills || []
      this.jobs = userData.jobs
      this.employer_jobs = userData.employer_jobs || []
      this.skill_assess = userData.skill_assess || []
      this.resume = userData.resume
      this.resume_base64 = userData.resume_base64
    },
    clearUser() {
      this.$reset()
    },
  },
  persist: true, // Keeps data even after refresh (optional)
})
