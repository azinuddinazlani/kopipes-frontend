<template>
  <div class="job-card-container">
    <div class="job-card">
      <div class="card-content">
        <!-- Left Section -->
        <div class="left-section">
          <div class="content-wrapper">
            <!-- Company Logo -->
            <div class="company-logo">
              <img :src="job.companyLogo" class="company-logo-img" alt="Company logo" />
            </div>

            <!-- Job Details -->
            <div class="job-details">
              <!-- Status Chips -->
              <div class="status-chips">
                <span class="chip posted-time">{{ job.postedTime }}</span>
                <span class="chip application-status">{{ job.applicationStatus }}</span>
              </div>

              <!-- Job Title -->
              <h2 class="job-title">{{ job.title }}</h2>

              <!-- Company Info -->
              <div class="company-info">
                <span class="company-name">{{ job.companyName }}</span>
                <div class="separator"></div>
                <span class="company-type">{{ job.companyInfo }}</span>
              </div>

              <!-- Horizontal Separator -->
              <div class="horizontal-separator"></div>

              <!-- Job Specs -->
              <div class="job-specs">
                <div class="specs-container">
                  <div class="spec-item">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 21c4-4 8-7 8-12a8 8 0 1 0-16 0c0 5 4 8 8 12z" />
                      <circle cx="12" cy="9" r="2" />
                    </svg>
                    <span>{{ job.location }}</span>
                  </div>
                  <div class="separator"></div>
                  <div class="spec-item">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>{{ job.type }}</span>
                  </div>
                  <div class="separator"></div>
                  <div class="spec-item">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M2 7h20" />
                      <path d="M6 11h4" />
                      <path d="M12 11h4" />
                    </svg>
                    <span>{{ job.workMode }}</span>
                  </div>
                  <div class="separator"></div>
                  <div class="spec-item">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M23 6l-9.5 9.5-5-5L1 18" />
                      <path d="M17 6h6v6" />
                    </svg>
                    <span>{{ job.level }}</span>
                  </div>
                  <div class="separator"></div>
                  <div class="spec-item">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h18" />
                    </svg>
                    <span>{{ job.experience }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="right-section">
          <!-- Match Score -->
          <div class="match-score">
            <div class="progress-circle">
              <svg class="progress" width="70" height="70" viewBox="0 0 70 70">
                <circle
                  class="progress-bg"
                  cx="35"
                  cy="35"
                  r="32"
                  fill="none"
                  stroke="#333"
                  stroke-width="2"
                />
                <circle
                  class="progress-bar"
                  cx="35"
                  cy="35"
                  r="32"
                  fill="none"
                  stroke="#52C41A"
                  stroke-width="2"
                  :stroke-dasharray="circumference"
                  :stroke-dashoffset="dashOffset"
                />
              </svg>
              <div class="progress-text">
                <span class="score">{{ job.matchScore }}</span>
                <span class="percent">%</span>
              </div>
            </div>
            <div class="match-label">{{ job.matchLabel }}</div>
            <!-- Apply Button -->
            <button class="apply-btn" @click="handleApply(job.id)">GET SCORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import api from '@/api'

const userStore = useUserStore()

const props = defineProps({
  job: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      companyLogo: '@/assets/logo.png',
      postedTime: '1 hour ago',
      applicationStatus: 'Be an early applicant',
      title: 'Security Analyst III (Strategy/Risk Management)',
      companyName: 'RemoteWorker CA',
      companyInfo: 'Staffing & Recruiting · Early Stage',
      location: 'Deerfield, IL',
      type: 'Full-time',
      workMode: 'Remote',
      level: 'Entry, Mid Level',
      experience: '2+ years exp',
      matchScore: 67,
      matchLabel: 'FAIR MATCH',
    }),
  },
})

// Calculate progress circle values
const circumference = computed(() => 2 * Math.PI * 32)
const dashOffset = computed(() => {
  const progress = (100 - props.job.matchScore) / 100
  return circumference.value * progress
})

const handleApply = (jobId) => {

  const userEmail = userStore.email
  api.jobApply(userEmail, jobId).then((response) => {
    // console.log(response)
    console.log(response.match_analysis.overall_match_score)
  })
  console.log('Applied to job', jobId, userEmail)

}
</script>

<style scoped lang="scss">
.job-card-container {
  // max-width: 1440px;
  width: 80%;
  margin: 1.25rem auto 0 auto;
  padding: 0;
}

.job-card {
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(229, 231, 235, 0.6);
  width: 100%;
  background: #ffffff;
  color: #000000;
}

.card-content {
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-section {
  flex: 8;
}

.content-wrapper {
  display: flex;
  align-items: center;
}

.company-logo {
  border-radius: 6px;
  overflow: hidden;
  margin-right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 80px;
  background: white;
}

.company-logo-img {
  object-fit: contain;
  padding: 8px;
  width: 100%;
  height: 100%;
}

.job-details {
  flex: 1;
  color: #000000;
  position: relative;
  padding-right: 32px;
}

.status-chips {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
}

.chip {
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
}

.posted-time {
  background-color: rgba(20, 200, 240, 0.1);
  color: #14c8f0;
}

.application-status {
  background-color: rgba(255, 121, 221, 0.1);
  color: #ff79dd;
}

.job-title {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 16px;
  line-height: 1.3;
  color: #111827;
}

.company-info {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.company-name {
  margin-right: 8px;
}

.company-type {
  color: #6b7280;
  margin-left: 8px;
}

.separator {
  height: 16px;
  min-width: 1px;
  background-color: #000000;
  display: inline-block;
  opacity: 0.2;
}

.horizontal-separator {
  height: 1px;
  width: 100%;
  background-color: #000000;
  margin: 16px 0;
  opacity: 0.2;
}

.job-specs {
  color: #000000;
  margin-top: 16px;
}

.specs-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.spec-icon {
  width: 16px;
  height: 16px;
  color: #6b7280;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.right-section {
  flex: 4;
  display: flex;
  justify-content: flex-end;
}

.match-score {
  background: linear-gradient(180deg, #000000 0%, #8e1f7d 100%);
  border-radius: 12px;
  padding: 24px;
  width: 200px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-circle {
  position: relative;
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
}

.progress {
  transform: rotate(-90deg);
}

.progress-bg {
  opacity: 0.2;
}

.progress-bar {
  transition: stroke-dashoffset 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.score {
  font-size: 24px;
  font-weight: 600;
}

.percent {
  font-size: 14px;
  margin-left: 2px;
}

.match-label {
  margin-bottom: 8px;
  font-size: 14px;
}

.apply-btn {
  background: linear-gradient(135deg, #14c8f0 0%, #0ea4e9 100%);
  color: white;
  border: none;
  height: 40px;
  width: 160px;
  border-radius: 32px;
  margin: 0 auto;
  margin-top: 8px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(20, 200, 240, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.apply-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(20, 200, 240, 0.4);
}

.test {
  border: 1px solid red;
}
</style>
