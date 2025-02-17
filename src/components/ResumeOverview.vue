<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold">{{ user.name }}</h1>
        <p class="text-gray-600">{{ user.title }}</p>
      </div>

      <!-- Experience -->
      <div class="experience-wrapper mb-8">
        <div class="flex items-center mb-4">
          <div class="icon">
            <h2 class="text-2xl font-semibold"><img src="@\img\bag-checked.svg" />Experience</h2>
          </div>
        </div>
        <div v-for="(exp, index) in user.experience" :key="index" class="mb-4 border-left">
          <h3 class="text-xl font-medium">{{ exp.position }} - {{ exp.company }}</h3>
          <p class="text-gray-600">{{ exp.duration }}</p>
          <p class="text-gray-800">{{ exp.description }}</p>
        </div>
      </div>

      <!-- Education -->
      <div class="education-wrapper mb-8">
        <div class="flex items-center mb-4">
          <div class="icon">
            <h2 class="text-2xl font-semibold"><img src="@\img\school.svg" />Education</h2>
          </div>
        </div>
        <div class="border-left">
          <p class="text-xl font-medium">{{ user.education.degree }}</p>
          <p class="text-gray-600">{{ user.education.university }}, {{ user.education.year }}</p>
        </div>
      </div>

      <!-- Skills -->
      <div>
        <div class="flex items-center mb-4">
          <div class="icon">
            <h2 class="text-2xl font-semibold"><img src="@\img\star-shooting.svg" />Skills</h2>
          </div>
        </div>
        <div class="flex flex-wrap">
          <span
            v-for="(skill, index) in user.skills"
            :key="index"
            class="bg-blue-200 rounded-full px-4 py-2 m-1 flex items-center text-sm"
          >
            <i class="fas fa-check-circle text-green-500 mr-2"></i>
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = {
  name: 'John Doe',
  title: 'Professional Procrastinator',
  experience: [
    {
      company: 'Apple Inc.',
      position: 'Senior UX Designer',
      duration: '2023 - Present',
      description:
        'Led design initiatives for iOS applications and conducted user research studies.',
    },
    {
      company: 'Google',
      position: 'UX Designer',
      duration: '2020 - 2023',
      description: 'Designed user interfaces for various Google products and services.',
    },
  ],
  education: {
    degree: 'Master in Human-Computer Interaction',
    university: 'Stanford University',
    year: '2020',
  },
  skills: ['UI Design', 'User Research', 'Figma', 'Sketch', 'Adobe XD'],
}
</script>

<style lang="scss" scoped>
.border-left {
  border-left: 5px solid rgb(76, 124, 213);
  padding: 1rem;
}

.icon {
  width: 25px;
  fill: blue;
}
</style>
