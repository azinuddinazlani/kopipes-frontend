<template>
  <div class="space-y-6">
    <h2 class="text-lg font-semibold">Assessment Tests</h2>
    <div class="assessment-bar-wrapper mt-2 space-y-4">
      <div v-for="assessment in assessments" :key="assessment.name">
        <p>{{ assessment.name }}</p>
        <div class="score-bar">
          <Progress class="h-2 bg-gray-200 [&>div]:bg-pink-500" :model-value="assessment.score" />
          <p class="text-sm text-gray-600 ml-3">{{ assessment.score }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Progress from '@/components/ui/progress/Progress.vue'

const props = defineProps({
  assessments: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.score-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
