<template>
  <div class="wrapper">
    <div class="result-container">
      <a href="#" class="back-link">← Back to Candidate Portal</a>
      <div class="score-card">
        <h1 class="score">85<span class="out-of">/100</span></h1>
        <h2 class="performance-title">Excellent Performance!</h2>
        <p class="performance-description">You've scored higher than 75% of all candidates</p>
        <div class="actions">
          <button class="btn btn-share"><Linkedin class="icon" />Share on LinkedIn</button>
          <button class="btn btn-download"><Download class="icon" />Download Certificate</button>
        </div>
        <div class="badge">
          <div class="badge-icon">🏆</div>
          <h3 class="badge-title">Advanced Developer Badge</h3>
          <p class="badge-description">You've earned the Advanced Developer certification</p>
        </div>
      </div>
      <div class="performance-analysis">
        <h2 class="analysis-title">Performance Analysis</h2>
        <div class="progress-bar">
          <div class="progress" style="width: 85%"></div>
        </div>
        <div class="progress-labels">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>

        <div class="feedback-wrapper">
          <h3 class="feedback-title">Performance Feedback</h3>
          <div class="feedback-section">
            <div class="feedback-icon">⭐</div>
            <div>
              <p><strong>Strong Areas</strong></p>
              <p>Excellent performance in problem-solving and algorithm optimization</p>
            </div>
          </div>

          <div class="feedback-section">
            <div class="feedback-icon">🔼</div>
            <div>
              <p><strong> Areas for Improvement</strong></p>
              <p>Consider focusing more on system design patterns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script placeholder
import { Linkedin, Download } from 'lucide-vue-next'
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6fafc;
  padding: 2rem;
  min-height: 100vh;
}

.result-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 800px;
}

.back-link {
  font-size: 0.875rem;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 1rem;
  display: inline-block;
}

.score-card {
  text-align: center;
  margin-bottom: 2rem;
}

.score {
  font-size: 3rem;
  color: #007bff;
  margin: 0;
  font-weight: 500;
}

.out-of {
  font-size: 1.5rem;
  color: #555;
}

.performance-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #333;
  font-weight: 500;
}

.performance-description {
  color: #666;
  margin-bottom: 1.5rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn {
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
}

.icon {
  margin-right: 1rem;
}

.btn-share {
  background-color: #007bff;
  color: white;
}

.btn-download {
  background-color: white;
  color: black;
  border: 1px solid gray;
}

.badge {
  text-align: center;
  margin-top: 1.5rem;
}

.badge-icon {
  font-size: 3rem;
  color: #007bff;
}

.badge-title {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: #333;
}

.badge-description {
  color: #666;
}

.performance-analysis {
  background: #f6fafc;
  border-radius: 16px;
  padding: 1.5rem;
}

.analysis-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1rem;
}

.progress-bar {
  background: #e9ecef;
  border-radius: 20px;
  height: 2rem;
  /* Changed from 1rem to 2rem */
  margin-bottom: 0.5rem;
  position: relative;
  overflow: hidden;
}

.progress {
  background-color: #007bff;
  height: 100%;
  border-radius: 20px;
  transition: width 0.3s ease;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #666;
}

// .feedback {
//     background: white;
//     border-radius: 8px;
//     padding: 1rem;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// }

.feedback-wrapper {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .feedback-section {
    display: flex;
    margin-bottom: 1rem;
  }

  .feedback-section p {
    margin: 0;
    color: #555;
  }

  .feedback-section strong {
    color: #333;
  }

  .feedback-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .feedback-icon {
    margin-right: 0.5rem;
  }
}

// .feedback-title {
//     font-size: 1rem;
//     margin-bottom: 1rem;
// }

// .feedback-section {
//     margin-bottom: 1rem;
// }

// .feedback-section p {
//     margin: 0;
//     color: #555;
// }

// .feedback-section strong {
//     color: #333;
// }
</style>
