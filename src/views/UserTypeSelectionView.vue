<template>
  <div class="wrapper">
    <UserTypeSelection />
  </div>
</template>

<script setup>
import UserTypeSelection from '@/components/UserTypeSelection.vue'
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fef6f9;
  width: 100%;
}
</style>
