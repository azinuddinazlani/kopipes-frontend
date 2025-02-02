<template>
  <div class="wrapper">
    <AssessmentProgress />
    <Question />
  </div>
</template>

<script setup>
import Question from '@/components/Question.vue'
import AssessmentProgress from '@/components/AssessmentProgress.vue'
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 1rem 4rem;
}
</style>
