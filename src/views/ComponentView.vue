<template>
  <div class="wrapper test">
    <!-- <StartTest /> -->
    <!-- <AssessmentProgress /> -->
    <!-- <Question /> -->
    <!-- <UserProfile /> -->
    <div class="upload-wrapper">
      <UploadResume class="uploadResume" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import StartTest from '@/components/StartTest.vue'
// import AssessmentProgress from '@/components/AssessmentProgress.vue'
// import Question from '@/components/Question.vue'
// import UserProfile from '@/components/UserProfile.vue'
import UploadResume from '@/components/UploadResume.vue'
</script>

<style lang="scss" scoped>
// render upload resume start
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-wrapper {
  width: 90%;
}
// render upload resume end

.test {
  border: 1px solid red;
}
</style>
