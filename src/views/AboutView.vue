<script setup lang="ts">
import UserProfile from '@/components/ResumeOverview.vue'
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    this is a test line
  </div>

  <UserProfile />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
