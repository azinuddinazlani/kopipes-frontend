<template>
  <div class="wrapper">
    <div class="content-wrapper" v-if="Object.keys(resumeInfo).length > 0">
      <!-- Horizontal Card for Sarah Anderson to Upload Resume -->
      <div class="upload-resume-card bg-white p-6 rounded-3xl shadow flex items-center space-x-6">
        <!-- Profile Information (Name & Job Title) -->
        <div class="profile-info items-center">
          <div class="flex flex-col space-y-1">
            <p class="profile-name">{{ resumeInfo.name }}</p>
          </div>
          <div class="details flex flex-row mt-2">
            <div class="location flex items-center">
              <BriefcaseBusiness />
              <p>{{ resumeInfo.job_position }}</p>
            </div>
            <div class="location flex items-center">
              <Navigation2 />
              <p>{{ resumeInfo.address }}</p>
            </div>
            <div class="location flex items-center">
              <MailCheck />
              <p>{{ resumeInfo.email }}</p>
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
        <Button @click="handleNavigate">+ Upload Resume</Button>
      </div>

      <div class="mt-3 content mx-auto grid grid-cols-3 gap-3">
        <!-- Left Column -->
        <div class="col-span-2 space-y-3">
          <!-- Resume Overview -->
          <div class="resume-content-wrapper bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold">Resume Overview</h2>
            <div class="mt-6">
              <div class="icon-wrapper">
                <img class="icon" src="@\img\bag-checked.svg" />
                <span class="icon-desc font-medium">Experience</span>
              </div>
              <ul class="mt-2 space-y-2">
                <div v-for="experience in resumeInfo.experience" :key="experience.job_title">
                  <li class="border-left">
                    <p class="font-semibold">
                      {{ experience.company }} - {{ experience.position }}
                    </p>
                    <p class="text-gray-500">{{ experience.dates }}</p>
                    <p class="text-gray-600">{{ experience.description }}</p>
                  </li>
                </div>
              </ul>
            </div>
            <div class="mt-6">
              <div class="icon-wrapper">
                <img class="icon" src="@\img\school.svg" />
                <span class="icon-desc font-medium">Education</span>
              </div>
              <ul class="mt-2 space-y-2">
                <div v-for="education in resumeInfo.education" :key="education.degree">
                  <li class="border-left">
                    <p class="font-semibold">{{ education.degree }}</p>
                    <p class="text-gray-500">{{ education.institution }}({{ education.dates }})</p>
                  </li>
                </div>
              </ul>
            </div>
            <div class="mt-6">
              <div class="icon-wrapper">
                <img class="icon" src="@\img\star-shooting.svg" />
                <span class="icon-desc font-medium">Skills</span>
              </div>
              <div
                class="flex space-x-2 mt-2 flex-wrap"
                v-for="skill in resumeInfo.skills"
                :key="skill"
              >
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">{{ skill }}</span>
              </div>
            </div>
          </div>

          <!-- Applied Jobs -->
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold">Applied Jobs</h2>
            <div class="mt-2 space-y-2">
              <div class="bg-gray-50 p-3 rounded">
                <p class="font-semibold">Senior Product Designer - Microsoft</p>
                <p class="text-gray-500">Applied on Jan 15, 2025</p>
                <span class="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm"
                  >In Review</span
                >
              </div>
              <div class="bg-gray-50 p-3 rounded">
                <p class="font-semibold">UX Design Lead - Netflix</p>
                <p class="text-gray-500">Applied on Jan 10, 2025</p>
                <span class="bg-green-200 text-green-800 px-2 py-1 rounded text-sm"
                  >Interview Scheduled</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-3">
          <!-- Performance Card (Bigger) -->
          <div class="bg-white p-6 rounded-lg shadow h-auto">
            <div class="flex flex-row justify-between">
              <h2 class="text-lg font-semibold">Performance</h2>
              <img class="ai-logo" src="@/img/ai-logo.svg" alt="Personality Test" />
            </div>

            <div>
              <Radar :data="chartDataComputed" :options="chartOptions" />
            </div>
          </div>

          <!-- Assessment Tests -->
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold">Assessment Tests</h2>
            <div class="assessment-bar-wrapper mt-2 space-y-4">
              <div v-for="assessment in assessments" :key="assessment.name">
                <p>
                  {{ assessment.name }}
                </p>
                <div class="score-bar">
                  <Progress
                    class="h-2 bg-gray-200 [&>div]:bg-pink-500"
                    :model-value="assessment.score"
                  />
                  <p class="text-sm text-gray-600 ml-3">{{ assessment.score }}%</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Completion (Aligned with Applied Jobs) -->
          <div class="bg-white p-6 rounded-lg shadow col-span-2">
            <h2 class="text-lg font-semibold">Profile Completion</h2>
            <p class="mt-2">Complete your profile to increase visibility to recruiters</p>
            <div class="progress-bar">
              <div class="mt-2 bg-gray-200 w-full rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 90%"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2 ml-2">90%</p>
            </div>
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
import { BriefcaseBusiness, Navigation2, MailCheck } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import Progress from '@/components/ui/progress/Progress.vue'
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

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)
const router = useRouter()
const userStore = useUserStore()
const resumeInfo = userStore.resume_base64
const userInfo = userStore
// const { data, options } = chartConfig

const scores = [
  userStore.about[0].score,
  userStore.about[1].score,
  userStore.about[2].score,
  userStore.about[3].score,
  userStore.about[4].score,
]

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

  .ai-logo {
    width: 2rem;
  }

  .content-wrapper {
    margin: 0 5rem;

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
</style>
