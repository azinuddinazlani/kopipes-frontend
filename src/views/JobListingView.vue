<template>
  <div class="landing-page">
    <SearchBar class="mb-8" />
    <JobList />
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import JobList from '@/components/JobList.vue'
</script>

<style scoped>
.landing-page {
  background: radial-gradient(circle at top left, #ffedfb, #ffffff, #d4f9ff);
  padding: 1.5rem 0;

  /* width: 100%; */
  /* min-height: 100vh; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* overflow-x: hidden; */
}

/* Reset default styles */
/* :root {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

/* body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
