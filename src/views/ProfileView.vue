<template>
  <!-- <div class="wrapper">
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
</div> -->
  <div class="wrapper">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div class="content-wrapper" v-if="Object.keys(resumeInfo).length > 0">
      <!-- Horizontal Card for Sarah Anderson to Upload Resume -->
      <div class="upload-resume-card bg-white p-6 rounded-3xl shadow flex items-center space-x-6">
        <!-- Profile Information (Name & Job Title) -->
        <div class="profile-info items-center">
          <div class="flex flex-col space-y-1">
            <p class="profile-name">{{ name }}</p>
          </div>
          <div class="details flex flex-row mt-2">
            <div class="location flex items-center">
              <BriefcaseBusiness />
              <p>{{ position }}</p>
            </div>
            <div class="location flex items-center">
              <Navigation2 />
              <p>{{ location }}</p>
            </div>
            <div class="location flex items-center">
              <MailCheck />
              <p>{{ email }}</p>
            </div>
          </div>
        </div>

        <!-- Location and Email Information -->
        <!-- <div class="job-info space-y-2 test">
          <div class="location-wrapper flex flex-col space-y-2">
            <div class="location flex items-center space-x-2">
              <MapPin />
              <p>Kuala Lumpur, MY</p>
            </div>
            <div class="location flex items-center space-x-2">
              <img class="img-test w-5 h-5" src="@/img/joblist-mail.svg" />
              <p>sarah@gmail.com</p>
            </div>
          </div>
        </div> -->

        <!-- Upload Resume Button -->
        <div></div>
        <Button>+ Upload Resume</Button>
      </div>

      <!-- Combined Content Container -->
      <div class="mt-6 bg-white p-8 rounded-lg shadow w-full">
        <!-- Tab Navigation -->
        <div class="border-b border-gray-200">
          <nav class="flex space-x-12" aria-label="Tabs">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'py-4 px-1 border-b-2 font-medium text-sm',
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              ]"
            >
              {{ tab.name }}
            </button>
          </nav>
        </div>

        <!-- Tab Contents -->
        <div class="mt-6">
          <!-- Overview Tab -->
          <div v-show="activeTab === 'overview'" class="mt-3 grid grid-cols-3 gap-3">
            <!-- Left Column -->
            <div class="col-span-2 space-y-3">
              <!-- Resume Overview -->
              <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h2 class="text-lg font-semibold">Resume Overview</h2>
                <div class="mt-6">
                  <div class="icon-wrapper">
                    <img class="icon" src="@/img/bag-checked.svg" />
                    <span class="icon-desc font-medium">Experience</span>
                  </div>
                  <ul class="mt-2 space-y-2">
                    <li class="border-left" v-for="(x, i) in experience" :key="i">
                      <p class="font-semibold">{{ x.title }} - {{ x.company }}</p>
                      <p class="text-gray-500">{{ x.period }}</p>
                      <p class="text-gray-600">{{ x.description }}</p>
                    </li>
                  </ul>
                </div>
                <div class="mt-6">
                  <div class="icon-wrapper">
                    <img class="icon" src="@/img/school.svg" />
                    <span class="icon-desc font-medium">Education</span>
                  </div>
                  <ul class="mt-2 space-y-2">
                    <li class="border-left" v-for="(x, i) in education" :key="i">
                      <p class="font-semibold">{{ x.degree }}</p>
                      <p class="text-gray-500">{{ x.institution }} {{ x.period }}</p>
                    </li>
                  </ul>
                </div>
                <div class="mt-6">
                  <div class="icon-wrapper">
                    <img class="icon" src="@/img/star-shooting.svg" />
                    <span class="icon-desc font-medium">Skills</span>
                  </div>
                  <div class="flex space-x-2 mt-2 flex-wrap gap-2">
                    <span
                      v-for="(x, i) in skills"
                      :key="i"
                      class="bg-blue-200 px-3 py-1 rounded-full text-sm"
                      >{{ x.name }}</span
                    >
                  </div>
                </div>
              </div>

              <!-- Applied Jobs -->
              <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h2 class="text-lg font-semibold">Applied Jobs</h2>
                <div class="mt-2 space-y-2">
                  <div v-for="job in appliedJobs" :key="job.company" class="bg-gray-50 p-3 rounded">
                    <p class="font-semibold">
                      <a :href="`/job-desc?id=${job.id}`">{{ job.title }}</a>
                    </p>
                    <p class="text-gray-500">{{ job.company }}</p>
                    <!-- <p class="text-gray-500">Applied on {{ job.date }}</p> -->
                    <span
                      :class="[
                        'px-2 py-1 rounded text-sm',
                        job.status === 'In Review'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-green-200 text-green-800',
                      ]"
                      >{{ job.status }}</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-3">
              <!-- Performance Card -->
              <div class="bg-white p-6 rounded-lg shadow border border-gray-200 h-auto">
                <div class="flex flex-row justify-between items-center">
                  <h2 class="text-lg font-semibold">Performance</h2>
                  <img class="w-8 h-8" src="@/img/ai-logo.svg" alt="AI Logo" />
                </div>
                <div class="mt-4">
                  <Radar :data="chartDataComputed" :options="chartOptions" />
                </div>
                <!-- Add See More Details Button -->
                <div class="mt-6 flex justify-end">
                  <button
                    @click="activeTab = 'performance'"
                    class="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                  >
                    See more details
                    <ChevronRight class="w-4 h-4" />
                  </button>
                </div>
              </div>

              <!-- Assessment Tests -->
              <!--div class="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h2 class="text-lg font-semibold">Assessment Tests</h2>
                <div class="mt-4 space-y-4">
                  <div v-for="assessment in assessments" :key="assessment.name">
                    <p class="mb-2">{{ assessment.name }}</p>
                    <div class="flex items-center">
                      <Progress
                        class="flex-1 h-2 bg-gray-200 [&>div]:bg-pink-500"
                        :model-value="assessment.score"
                      />
                      <span class="ml-3 text-sm text-gray-600">{{ assessment.score }}%</span>
                    </div>
                  </div>
                </div>
              </div-->

              <!-- Profile Completion -->
              <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h2 class="text-lg font-semibold">Profile Completion</h2>
                <p class="mt-2 text-gray-600">
                  Complete your profile to increase visibility to recruiters
                </p>
                <div class="mt-4 flex items-center">
                  <div class="flex-1">
                    <div class="bg-gray-200 rounded-full h-2">
                      <div class="bg-blue-500 h-2 rounded-full" style="width: 90%"></div>
                    </div>
                  </div>
                  <span class="ml-3 text-sm text-gray-600">90%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Performance Tab -->
          <div v-show="activeTab === 'performance'">
            <Performance :personality="personality" />
          </div>

          <!-- Assessment Tab -->
          <div v-show="activeTab === 'assessment'">
            <Assessment :assessments="assessments" />
          </div>

          <!-- Jobs Tab -->
          <div v-show="activeTab === 'jobs'">
            <Jobs />
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <Button @click="handleNavigate">+ Upload Resume</Button>
    </div>
  </div>
</template>

<script setup>
import { BriefcaseBusiness, Navigation2, MailCheck, ChevronRight } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
// import Progress from '@/components/ui/progress/Progress.vue'
// import Separator from '@/components/ui/separator/Separator.vue'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'vue-chartjs'
// import * as chartConfig from '@/data/chartConfig.js'
import { data as chartData, options as chartOptions } from '@/data/chartConfig.js'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore'
import { computed } from 'vue'
import { ref, onMounted } from 'vue'
import api from '@/api/index'
import Performance from '@/components/profile/Performance.vue'
import Assessment from '@/components/profile/Assessment.vue'
import Jobs from '@/components/profile/Jobs.vue'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)
const router = useRouter()
const userStore = useUserStore()
const resumeInfo = userStore.resume_base64
// const userInfo = userStore
// const { data, options } = chartConfig

const scores = userStore.about?.length
  ? [
      userStore.about[0].score_breakdown.relevance || 0,
      userStore.about[0].score_breakdown.clarity || 0,
      userStore.about[0].score_breakdown.specificity || 0,
      userStore.about[0].score_breakdown.professional_tone || 0,
      userStore.about[0].score_breakdown.completeness || 0,
    ]
  : [0, 0, 0, 0, 0]

const isLoading = ref(false)
const appliedJobs = ref([
  // {
  //   title: 'Senior Product Designer',
  //   company: 'Microsoft',
  //   date: 'Jan 15, 2025',
  //   status: 'In Review',
  // },
  // {
  //   title: 'UX Design Lead',
  //   company: 'Netflix',
  //   date: 'Jan 10, 2025',
  //   status: 'In Review',
  // },
])

const chartDataComputed = computed(() => ({
  labels: chartData.labels, // Keep labels the same
  datasets: [
    {
      ...chartData.datasets[0], // Copy existing dataset properties
      data: scores || [0, 0, 0, 0, 0], // Use user data, default to zeros
    },
  ],
}))

console.log('this is user store about', userStore.about)

const assessments = [
  { name: 'UI/UX Design Assessment', score: 70 },
  { name: 'Problem Solving', score: 85 },
  { name: 'Design Tools Proficiency', score: 95 },
  { name: 'Communication Skills', score: 80 },
]

const handleNavigate = () => {
  router.push('/submit')
}

onMounted(async () => {
  const userDetailRes = await api.userDetail(userStore.email)
  userStore.setUserDetails(userDetailRes)
  // console.log(userStore.experience)

  // console.log(userDetailRes)
  isLoading.value = true

  if (userDetailRes.about[0]) {
    isLoading.value = false
    personality.value['qs'] = userDetailRes.about[0].question || ''
    personality.value['ans'] = userDetailRes.about[0].answer || ''
    personality.value['score'] = userDetailRes.about[0].score || 0
    personality.value['score_clarity'] = userDetailRes.about[0].score_breakdown.clarity || 0
    personality.value['score_completeness'] =
      userDetailRes.about[0].score_breakdown.completeness || 0
    personality.value['score_professional'] =
      userDetailRes.about[0].score_breakdown.professional_tone || 0
    personality.value['score_relevance'] = userDetailRes.about[0].score_breakdown.relevance || 0
    personality.value['score_specify'] = userDetailRes.about[0].score_breakdown.specificity || 0
    personality.value['improvement'] = userDetailRes.about[0].areas_for_improvement || []
    personality.value['feedback'] = userDetailRes.about[0].feedback || ''
    personality.value['traits'] = userDetailRes.about[0].personality_traits || []

    if (userDetailRes.employer_jobs) {
      appliedJobs.value = userDetailRes.employer_jobs.map((job) => ({
        id: job.employer_jobs_id,
        title: job.jobs.name,
        company: job.jobs.employer.name,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        status: 'In Review',
      }))
    }
  }

  // console.log(userDetailRes.employer_jobs)
})

const name = userStore.name ?? ''
const position = userStore.position ?? ''
const location = userStore.location ?? ''
const email = userStore.email ?? ''
const experience = userStore.experience ?? []
const education = userStore.education ?? []
const skills = userStore.skills ?? []
// console.log(userStore.about)

const personality = ref({
  qs: 'Tell us',
  ans: '',
  score: 0,
  score_clarity: 0,
  score_completeness: 0,
  score_professional: 0,
  score_relevance: 0,
  score_specify: 0,
  improvement: [],
  feedback: '',
  traits: [],
})

const tabs = [
  { id: 'overview', name: 'Overview' },
  { id: 'performance', name: 'Performance' },
  // { id: 'assessment', name: 'Assessment' },
  { id: 'jobs', name: 'Jobs' },
]

const activeTab = ref('overview')
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 1rem 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(circle at top left, #ffedfb, #ffffff, #d4f9ff);
  overflow-x: hidden;
  padding: 24px 0;

  .content-wrapper {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;

    .upload-resume-card {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .profile-info {
      // display: flex;
      // align-items: center;

      .profile-name {
        font-size: 1.5rem;
        font-weight: 800;
      }
    }

    .job-info {
      display: flex;
      flex-direction: column;
    }

    .profile-name {
      font-size: 1.25rem;
    }

    .location-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .location {
      display: flex;
      gap: 0.5rem;
      margin-right: 2rem;
    }

    .img-test {
      width: 1.25rem;
      height: 1.25rem;
    }

    .header-wrapper {
      .profile-name {
        font-size: 1.75rem;
        font-weight: 600;
      }
      .top-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .location-wrapper {
        margin-block: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .location {
        display: flex;
        gap: 0.5rem;
      }
    }

    .border-left {
      border-left: 3px solid rgb(76, 124, 213);
      padding: 0.5rem;
    }

    .icon-wrapper {
      display: flex;
      gap: 0.5rem;

      .icon {
        width: 2rem;
        color: red;
      }

      .icon-desc {
        display: flex;
        align-items: center;
      }
    }

    .progress-bar,
    .score-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.test {
  border: 1px solid red;
}

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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
