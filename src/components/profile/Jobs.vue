<template>
  <div class="space-y-6">
    <h2 class="text-lg font-semibold">Applied Jobs</h2>
    <div class="mt-2 space-y-2" v-for="job in appliedJobs" :key="job.id">
      <div class="bg-gray-50 p-3 rounded">
        <div class="flex justify-between items-start">
          <div>
            <p class="font-semibold">{{ job.title }} - {{ job.company }}</p>
            <p class="text-gray-500">Applied on {{ job.date }}</p>
            <span class="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm">{{
              job.status
            }}</span>
          </div>
          <circle-progress
            :percent="job.match_score"
            :size="60"
            :border-width="4"
            :show-percent="true"
            :fill-color="'#EC4899'"
            class="ml-4"
            :is-bg-shadow="true"
            :bg-shadow="{
              inset: true,
              vertical: 2,
              horizontal: 2,
              blur: 4,
              opacity: 0.4,
              color: '#000000',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'vue3-circle-progress/dist/circle-progress.css'
import CircleProgress from 'vue3-circle-progress'
import { useUserStore } from '@/stores/useUserStore'
import { computed } from 'vue'

const userStore = useUserStore()

// Make appliedJobs reactive to changes in userStore.employer_jobs
const appliedJobs = computed(() =>
  userStore.employer_jobs.map((job) => ({
    id: job.employer_jobs_id,
    title: job.jobs.name,
    company: job.jobs.employer.name,
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    status: 'In Review',
    match_score: job.match_json.match_analysis.overall_match_score,
  })),
)
</script>

<style scoped>
/* Add any custom styles for the circle progress if needed */
</style>
