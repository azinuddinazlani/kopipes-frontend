<template>
  <div class="job-list">
    <JobCard v-for="job in jobs" :key="job.id" :job="job" class="job-card-wrapper" />
  </div>
</template>

<script setup>
import JobCard from './JobCard.vue'

const jobs = [
  {
    id: 1,
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
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
  },
  {
    id: 2,
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
    postedTime: '30 mins ago',
    applicationStatus: 'Actively Hiring',
    title: 'Full Stack Developer',
    companyName: 'Google',
    companyInfo: 'Technology · Fortune 500',
    location: 'Mountain View, CA',
    type: 'Full-time',
    workMode: 'Hybrid',
    level: 'Senior Level',
    experience: '5+ years exp',
    matchScore: 92,
    matchLabel: 'PERFECT MATCH',
  },
  {
    id: 3,
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png',
    postedTime: '2 hours ago',
    applicationStatus: 'Few Applicants',
    title: 'UX/UI Designer',
    companyName: 'Apple',
    companyInfo: 'Technology · Fortune 500',
    location: 'Cupertino, CA',
    type: 'Full-time',
    workMode: 'On-site',
    level: 'Mid Level',
    experience: '3+ years exp',
    matchScore: 85,
    matchLabel: 'GREAT MATCH',
  },
  {
    id: 4,
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
    postedTime: '3 hours ago',
    applicationStatus: 'Quick Apply',
    title: 'Data Scientist',
    companyName: 'Microsoft',
    companyInfo: 'Technology · Fortune 500',
    location: 'Seattle, WA',
    type: 'Full-time',
    workMode: 'Remote',
    level: 'Senior Level',
    experience: '4+ years exp',
    matchScore: 78,
    matchLabel: 'GOOD MATCH',
  },
  {
    id: 5,
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
    postedTime: 'Just now',
    applicationStatus: 'Urgent Hiring',
    title: 'DevOps Engineer',
    companyName: 'Amazon',
    companyInfo: 'E-commerce · Fortune 500',
    location: 'Austin, TX',
    type: 'Full-time',
    workMode: 'Hybrid',
    level: 'Mid-Senior Level',
    experience: '3+ years exp',
    matchScore: 88,
    matchLabel: 'GREAT MATCH',
  },
  {
    id: 6,
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png',
    postedTime: '4 hours ago',
    applicationStatus: 'Easy Apply',
    title: 'Product Marketing Manager',
    companyName: 'Meta',
    companyInfo: 'Social Media · Fortune 500',
    location: 'New York, NY',
    type: 'Full-time',
    workMode: 'Flexible',
    level: 'Senior Level',
    experience: '6+ years exp',
    matchScore: 73,
    matchLabel: 'GOOD MATCH',
  },
  {
    id: 7,
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png',
    postedTime: '5 hours ago',
    applicationStatus: 'Featured',
    title: 'Cloud Solutions Architect',
    companyName: 'Salesforce',
    companyInfo: 'Enterprise Software · Fortune 500',
    location: 'San Francisco, CA',
    type: 'Full-time',
    workMode: 'Remote',
    level: 'Senior Level',
    experience: '7+ years exp',
    matchScore: 95,
    matchLabel: 'PERFECT MATCH',
  },
  {
    id: 8,
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
    postedTime: '2 hours ago',
    applicationStatus: 'High Demand',
    title: 'Machine Learning Engineer',
    companyName: 'Netflix',
    companyInfo: 'Entertainment · Fortune 500',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    workMode: 'Hybrid',
    level: 'Senior Level',
    experience: '5+ years exp',
    matchScore: 82,
    matchLabel: 'GREAT MATCH',
  },
]
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
