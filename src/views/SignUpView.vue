<template>
  <div class="wrapper">
    <div class="card-wrapper test grid grid-cols-2">
      <div class="left-card test"></div>
      <div class="right-card test">
        <div class="form-wrapper"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-wrapper {
    width: 85%;
    height: 85%;
    border-radius: 2rem;
  }
}

.test {
  border: 1px solid red;
}
</style>
