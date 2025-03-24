<template>
    <div class="wrapper">
    <!-- Loading Overlay -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
  </div>
  <div class="job-list">
    <JobCard v-for="job in jobs" :key="job.id" :job="job" class="job-card-wrapper" @update-score="(data) => {
    if (job.id === data.jobId) {
      job.matchScore = data.score
    }
  }" />
  </div>
</template>

<script setup>
import JobCard from './JobCard.vue'
import api from '@/api/index'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/useUserStore'

const userStore = useUserStore()
const jobs = ref([])
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  const jobList = await api.jobListing(userStore.email)
  // console.log(jobList)
  if (jobList) {
    jobs.value = jobList.map((job) => ({
      id: job.id,
      companyLogo: job.employer.logo,
      postedTime: job.postedtime || 'Just now',
      applicationStatus: 'Be an early applicant',
      title: job.name,
      companyName: job.employer.name,
      companyInfo: job.employer.businessnature,
      location: (job.location || 'Malaysia').split(' ')[0],
      type: job.jobtype,
      workMode: job.workmode,
      level: job.level,
      experience: job.experienceyear <= 0 || job.experienceyear == '' ? 'Fresh' : `${job.experienceyear || '1'} ${(job.experienceyear || 1) === 1 ? 'year' : 'years'}`,
      matchScore: job.user_application == "" ? 0 : job.user_application.match_json.match_analysis.overall_match_score,
      matchLabel: '',
    }))

    isLoading.value = false
  }
})

// const jobs = [
//   {
//     id: 1,
//     companyLogo:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
//     postedTime: '1 hour ago',
//     applicationStatus: 'Be an early applicant',
//     title: 'Security Analyst III (Strategy/Risk Management)',
//     companyName: 'RemoteWorker CA',
//     companyInfo: 'Staffing & Recruiting · Early Stage',
//     location: 'Deerfield, IL',
//     type: 'Full-time',
//     workMode: 'Remote',
//     level: 'Entry, Mid Level',
//     experience: '2+ years exp',
//     matchScore: 67,
//     matchLabel: 'FAIR MATCH',
//   },
//   {
//     id: 2,
//     companyLogo:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
//     postedTime: '30 mins ago',
//     applicationStatus: 'Actively Hiring',
//     title: 'Full Stack Developer',
//     companyName: 'Google',
//     companyInfo: 'Technology · Fortune 500',
//     location: 'Mountain View, CA',
//     type: 'Full-time',
//     workMode: 'Hybrid',
//     level: 'Senior Level',
//     experience: '5+ years exp',
//     matchScore: 92,
//     matchLabel: 'PERFECT MATCH',
//   },
//   {
//     id: 3,
//     companyLogo:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png',
//     postedTime: '2 hours ago',
//     applicationStatus: 'Few Applicants',
//     title: 'UX/UI Designer',
//     companyName: 'Apple',
//     companyInfo: 'Technology · Fortune 500',
//     location: 'Cupertino, CA',
//     type: 'Full-time',
//     workMode: 'On-site',
//     level: 'Mid Level',
//     experience: '3+ years exp',
//     matchScore: 85,
//     matchLabel: 'GREAT MATCH',
//   },
//   {
//     id: 4,
//     companyLogo:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
//     postedTime: '3 hours ago',
//     applicationStatus: 'Quick Apply',
//     title: 'Data Scientist',
//     companyName: 'Microsoft',
//     companyInfo: 'Technology · Fortune 500',
//     location: 'Seattle, WA',
//     type: 'Full-time',
//     workMode: 'Remote',
//     level: 'Senior Level',
//     experience: '4+ years exp',
//     matchScore: 78,
//     matchLabel: 'GOOD MATCH',
//   },
//   {
//     id: 5,
//     companyLogo:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
//     postedTime: 'Just now',
//     applicationStatus: 'Urgent Hiring',
//     title: 'DevOps Engineer',
//     companyName: 'Amazon',
//     companyInfo: 'E-commerce · Fortune 500',
//     location: 'Austin, TX',
//     type: 'Full-time',
//     workMode: 'Hybrid',
//     level: 'Mid-Senior Level',
//     experience: '3+ years exp',
//     matchScore: 88,
//     matchLabel: 'GREAT MATCH',
//   },
//   {
//     id: 6,
//     companyLogo:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png',
//     postedTime: '4 hours ago',
//     applicationStatus: 'Easy Apply',
//     title: 'Product Marketing Manager',
//     companyName: 'Meta',
//     companyInfo: 'Social Media · Fortune 500',
//     location: 'New York, NY',
//     type: 'Full-time',
//     workMode: 'Flexible',
//     level: 'Senior Level',
//     experience: '6+ years exp',
//     matchScore: 73,
//     matchLabel: 'GOOD MATCH',
//   },
//   {
//     id: 7,
//     companyLogo:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png',
//     postedTime: '5 hours ago',
//     applicationStatus: 'Featured',
//     title: 'Cloud Solutions Architect',
//     companyName: 'Salesforce',
//     companyInfo: 'Enterprise Software · Fortune 500',
//     location: 'San Francisco, CA',
//     type: 'Full-time',
//     workMode: 'Remote',
//     level: 'Senior Level',
//     experience: '7+ years exp',
//     matchScore: 95,
//     matchLabel: 'PERFECT MATCH',
//   },
//   {
//     id: 8,
//     companyLogo:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
//     postedTime: '2 hours ago',
//     applicationStatus: 'High Demand',
//     title: 'Machine Learning Engineer',
//     companyName: 'Netflix',
//     companyInfo: 'Entertainment · Fortune 500',
//     location: 'Los Angeles, CA',
//     type: 'Full-time',
//     workMode: 'Hybrid',
//     level: 'Senior Level',
//     experience: '5+ years exp',
//     matchScore: 82,
//     matchLabel: 'GREAT MATCH',
//   },
// ]
</script>

<style scoped>
/* .job-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.job-card-wrapper {
  margin-bottom: 8px;
}

.job-card-wrapper:last-child {
  margin-bottom: 0;
} */
</style>
<style lang="scss" scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ... existing styles ... */
</style>