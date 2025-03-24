<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <!-- Horizontal Card for Sarah Anderson to Upload Resume -->
      <div class="upload-resume-card bg-white p-6 rounded-3xl shadow flex items-center space-x-6">
        <!-- Profile Information (Name & Job Title) -->
        <div class="profile-info items-center">
          <div class="flex flex-col space-y-1">
            <p class="profile-name">{{name}}</p>
          </div>
          <div class="details flex flex-row mt-2">
            <div class="location flex items-center">
              <BriefcaseBusiness />
              <p>{{position}}</p>
            </div>
            <div class="location flex items-center">
              <Navigation2 />
              <p>{{location}}</p>
            </div>
            <div class="location flex items-center">
              <MailCheck />
              <p>{{email}}</p>
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
                <li class="border-left" v-for="(x, i) in experience" :key="i">
                  <p class="font-semibold">{{ x.title }} - {{x.company}}</p>
                  <p class="text-gray-500">{{x.period}}</p>
                  <!-- <p class="text-gray-600">{{ x.details }}</p> -->
                </li>
                <!-- <li class="border-left">
                  <p class="font-semibold">Senior UX Designer - Apple Inc.</p>
                  <p class="text-gray-500">2023 - Present</p>
                  <p class="text-gray-600">
                    Led design initiatives for iOS applications and conducted user research studies.
                  </p>
                </li>
                <li class="border-left">
                  <p class="font-semibold">UX Designer - Google</p>
                  <p class="text-gray-500">2020 - 2023</p>
                  <p class="text-gray-600">
                    Designed user interfaces for various Google products and services.
                  </p>
                </li> -->
              </ul>
            </div>
            <div class="mt-6">
              <div class="icon-wrapper">
                <img class="icon" src="@\img\school.svg" />
                <span class="icon-desc font-medium">Education</span>
              </div>
              <ul class="mt-2 space-y-2">
                <li class="border-left" v-for="(x, i) in education" :key="i">
                  <p class="font-semibold">{{x.degree}}</p>
                  <p class="text-gray-500">{{x.institution}} {{ x.period }}</p>
                </li>
                <!-- <li class="border-left">
                  <p class="font-semibold">Master in Human-Computer Interaction</p>
                  <p class="text-gray-500">Stanford University, 2020</p>
                </li> -->
              </ul>
            </div>
            <div class="mt-6">
              <div class="icon-wrapper">
                <img class="icon" src="@\img\star-shooting.svg" />
                <span class="icon-desc font-medium">Skills</span>
              </div>
              <div class="flex space-x-2 mt-2 flex-wrap">
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm" v-for="(x, i) in skills" :key="i">{{x.name}}</span>
                <!-- <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">UI Design</span>
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">User Research</span>
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">Figma</span>
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">Sketch</span>
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">Adobe XD</span> -->
              </div>
            </div>
          </div>

        <!-- Applied Jobs -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-semibold">Personality</h2>
          <div class="mt-2 space-y-2">
            <div class="bg-gray-50 p-3 rounded">
              <p>QS: {{ personality.qs }}</p>
              <p>Ans: {{ personality.ans }}</p>
              <p>Score: {{ personality.score }}</p>
              <p>Clarity: {{ personality.score_clarity }}</p>
<p>Completeness: {{ personality.score_completeness }}</p>
<p>Professional: {{ personality.score_professional }}</p>
<p>Relevance: {{ personality.score_relevance }}</p>
<p>specificity: {{ personality.score_specify }}</p>
<p>
  Improvement:
  <ul>
    <li v-for="x in personality.improvement">- {{ x }}</li>
  </ul>
</p>
<p>Traits:
  <ul>
    <li v-for="x in personality.traits">- {{ x }}</li>
  </ul></p>
<p>Feedback: {{ personality.feedback }}</p>
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
            <h2 class="text-lg font-semibold">Performance</h2>
            <div>
              <Radar :data="data" :options="options" />
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
  </div>
</template>

<script setup>
import { MapPin, BriefcaseBusiness, Navigation2, MailCheck } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import Progress from '@/components/ui/progress/Progress.vue'
import Separator from '@/components/ui/separator/Separator.vue'
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
import * as chartConfig from '@/data/chartConfig.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const { data, options } = chartConfig

const assessments = [
  { name: 'UI/UX Design Assessment', score: 70 },
  { name: 'Problem Solving', score: 85 },
  { name: 'Design Tools Proficiency', score: 95 },
  { name: 'Communication Skills', score: 80 },
]


///
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import api from '@/api/index'

const userStore = useUserStore()

onMounted(async () => {
  const userDetailRes = await api.userDetail(userStore.email)
  userStore.setUserDetails(userDetailRes)
  console.log(userStore.experience)

  console.log(userDetailRes)

  if (userDetailRes.about[0]) {
    personality.value['qs'] = userDetailRes.about[0].question || ''
    personality.value['ans'] = userDetailRes.about[0].answer || ''
    personality.value['score'] = userDetailRes.about[0].score || 0
    personality.value['score_clarity'] = userDetailRes.about[0].score_breakdown.clarity || 0
    personality.value['score_completeness'] = userDetailRes.about[0].score_breakdown.completeness || 0
    personality.value['score_professional'] =  userDetailRes.about[0].score_breakdown.professional_tone || 0
    personality.value['score_relevance'] =  userDetailRes.about[0].score_breakdown.relevance || 0
    personality.value['score_specify'] =  userDetailRes.about[0].score_breakdown.specificity || 0
    personality.value['improvement'] =  userDetailRes.about[0].areas_for_improvement || []
    personality.value['feedback'] =  userDetailRes.about[0].feedback || ''
    personality.value['traits'] =  userDetailRes.about[0].personality_traits || []
  }
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
  traits: []
})
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
</style>
