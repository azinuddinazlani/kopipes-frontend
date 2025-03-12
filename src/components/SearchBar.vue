<template>
  <div class="search-container">
    <div class="search-bar">
      <div class="search-inputs">
        <!-- Date Input -->
        <div class="input-group">
          <div class="icon">
            <i class="fa-regular fa-calendar"></i>
          </div>
          <div class="input-content">
            <!-- <label>Experience</label> -->
            <NumberField id="exp" :default-value="0" :min="0">
              <Label for="exp">Experience (Years)</Label>
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>
          </div>
        </div>

        <!-- Location Input -->
        <div class="input-group">
          <div class="icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div class="input-content">
            <label>Location</label>
            <input type="text" placeholder="Select location" />
          </div>
        </div>

        <!-- Job Type Input -->
        <div class="input-group">
          <div class="icon">
            <i class="fa-solid fa-suitcase"></i>
          </div>
          <div class="input-content">
            <label>Job Type</label>
            <input type="text" placeholder="Select job type" />
          </div>
        </div>

        <button class="search-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
          Search
        </button>
      </div>
    </div>

    <!-- Filter Buttons -->
    <div class="filter-buttons">
      <button class="gradient-btn">Remote Only</button>
      <button class="outline-btn">Full Time</button>
      <button class="outline-btn">Entry Level Position</button>
      <button class="outline-btn">$50K - $90K USD</button>
      <button class="outline-btn">Design & Development</button>
    </div>
  </div>
</template>

<script setup>
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
</script>

<style scoped>
.search-container {
  /* max-width: 1440px; */
  margin: 0 auto;
  padding: 0;
  width: 80%;
}

.search-bar {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 40px;
  padding: 24px 32px;
  width: 100%;
}

.search-inputs {
  display: flex;
  align-items: center;
  gap: 32px;
}

.input-group {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 12px;
}

.icon {
  color: #6b7280;
  width: 20px;
  text-align: center;
}

.input-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

label {
  font-size: 12px;
  color: #6b7280;
}

input {
  border: none;
  outline: none;
  font-size: 14px;
  color: #1f2937;
  width: 100%;
  padding: 4px 0;
}

input::placeholder {
  color: #9ca3af;
}

.search-btn {
  background: #000000;
  color: white;
  border: none;
  border-radius: 40px;
  padding: 16px 48px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-left: 32px;
  min-width: 240px;
  transition: all 0.2s ease;
  height: 56px;
}

.search-btn i {
  font-size: 18px;
}

.search-btn:hover {
  background: #1a1a1a;
  transform: translateY(-1px);
}

.filter-buttons {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 0 8px;
  flex-wrap: wrap;
}

.gradient-btn {
  background: linear-gradient(124.43deg, #ff79dd 0%, #ffd1b4 100%);
  color: white;
  border: none;
  border-radius: 40px;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  min-width: 177px;
}

.outline-btn {
  background: transparent;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  border-radius: 40px;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  min-width: 135px;
}

.outline-btn:hover {
  background: #f9fafb;
}

/* Specific button widths */
.outline-btn:nth-child(3) {
  min-width: 211px;
}

.outline-btn:nth-child(4),
.outline-btn:nth-child(5) {
  min-width: 182px;
}
</style>
