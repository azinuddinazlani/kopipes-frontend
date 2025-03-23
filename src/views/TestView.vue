<template>
  <div class="wrapper">
    <div v-if="!testInit">
      <StartTest @startTest="testInit = true" />
    </div>

    <div v-else class="test-wrapper">
      <AssessmentProgress />
      <Question />
    </div>
  </div>
</template>

<script setup>
import Question from '@/components/Question.vue'
import AssessmentProgress from '@/components/AssessmentProgress.vue'
import StartTest from '@/components/StartTest.vue'
import { ref, onMounted } from 'vue'

const testInit = ref(false)
</script>

<style lang="scss" scoped>
.wrapper {
  // margin: 1rem 4rem;
  .test-wrapper {
    margin: 1rem 4rem;
  }
}
</style>
