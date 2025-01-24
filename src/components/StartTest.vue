<template>
  <div class="wrapper">
    <div class="test-container">
      <img class="center-img" src="@\img\startTest-codeline.svg" />
      <h1 class="title">Frontend Developer Technical Test</h1>
      <p class="instructions">Please read the instructions carefully before starting</p>
      <div class="info">

        <div class="info-item">
          <img src="@\img\startTest-list.svg" />
          <div class="info-item-content">
            <h2 class="info-title">Number of Questions</h2>
            <p class="info-text">This test consists of 25 questions covering HTML,
              CSS, JavaScript, and React</p>
          </div>
        </div>

        <div class="info-item">
          <img src="@\img\startTest-timer.svg" />
          <div class="info-item-content">
            <h2 class="info-title">Time Limit</h2>
            <p class="info-text">You have 60 minutes to complete the test</p>
          </div>
        </div>

        <div class="info-item">
          <img src="@\img\startTest-info.svg" />
          <div class="info-item-content">
            <h2 class="info-title">Instructions</h2>
            <p class="info-text">Once you start the test, you cannot pause it. Make sure you have a stable internet
              connection</p>
          </div>
        </div>

      </div>

      <div class="actions">
        <label class="checkbox">
          <input type="checkbox" v-model="agreed" />
          I have read and understand the instructions
        </label>
        <button class="start-button" :disabled="!agreed" @click="startTest">Start Test →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const agreed = ref(false);

function startTest() {
  alert("Test started!");
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9fafb;

  .test-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    max-width: 600px;
    width: 100%;
    text-align: center;
  }
}



.title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.instructions {
  color: #666;
  margin-bottom: 1.5rem;
}

.info {
  margin-bottom: 2rem;
}

.info-item {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #F9FAFB;
  text-align: left;
  display: flex;

}

.info-item-content {
  display: block;
}

.info-title {
  font-weight: bold;
  color: #333;
}

.info-text {
  color: #555;
  line-height: 1.25;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.checkbox {
  font-size: 0.875rem;
  color: #555;
  display: flex;
  align-items: center;
}

.checkbox input {
  margin-right: 0.5rem;
}

.start-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.start-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.start-button:hover:enabled {
  background-color: #0056b3;
}

.center-img {
  display: block;
  margin: 0 auto;
}

.info-item img {
  width: 17px;
  height: 17px;
  margin-top: 4px;
  margin-right: 1rem;
}
</style>
