<template>
  <div class="wrapper bg-gray-100">
    <div class="content-wrapper">
      <!-- Header Column -->
      <div class="header-wrapper">
        <div class="top-wrapper">
          <span class="profile-name">Sarah Anderson</span>
          <Button>+ Upload Resume</Button>
        </div>
        <p class="jobtitle">Senior UX Designer</p>

        <div class="location-wrapper">
          <div class="location">
            <MapPin />
            <p>Kuala Lumpur, MY</p>
          </div>

          <div class="location">
            <img class="img-test" src="@\img\joblist-mail.svg" />
            <p>sarah@gmail.com</p>
          </div>
        </div>
      </div>

      <div class="content mx-auto grid grid-cols-3 gap-6">
        <!-- Left Column -->
        <div class="col-span-2 space-y-6">
          <!-- Resume Overview -->
          <div class="resume-content-wrapper bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold">Resume Overview</h2>
            <div class="mt-6">
              <div class="icon-wrapper">
                <img class="icon" src="@\img\bag-checked.svg" />
                <span class="icon-desc font-medium">Experience</span>
              </div>
              <ul class="mt-2 space-y-2">
                <li class="border-left">
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
                </li>
              </ul>
            </div>
            <div class="mt-6">
              <div class="icon-wrapper">
                <img class="icon" src="@\img\school.svg" />
                <span class="icon-desc font-medium">Education</span>
              </div>
              <ul class="mt-2 space-y-2">
                <li class="border-left">
                  <p class="font-semibold">Master in Human-Computer Interaction</p>
                  <p class="text-gray-500">Stanford University, 2020</p>
                </li>
              </ul>
            </div>
            <div class="mt-6">
              <div class="icon-wrapper">
                <img class="icon" src="@\img\star-shooting.svg" />
                <span class="icon-desc font-medium">Skills</span>
              </div>
              <div class="flex space-x-2 mt-2 flex-wrap">
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">UI Design</span>
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">User Research</span>
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">Figma</span>
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">Sketch</span>
                <span class="bg-blue-200 px-3 py-1 rounded-full text-sm">Adobe XD</span>
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
        <div class="space-y-6">
          <!-- Assessment Tests -->
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold">Assessment Tests</h2>
            <div class="mt-2 space-y-2">
              <p>UI/UX Design Assessment: <span class="font-semibold">92%</span></p>
              <p>Problem Solving: <span class="font-semibold">85%</span></p>
              <p>Design Tools Proficiency: <span class="font-semibold">95%</span></p>
            </div>
          </div>

          <!-- Profile Completion -->
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold">Profile Completion</h2>
            <p class="mt-2">Complete your profile to increase visibility to recruiters</p>
            <div class="mt-2 bg-gray-200 w-full rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 90%"></div>
            </div>
            <p class="text-sm text-gray-600 mt-2">90%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPin } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'

// No additional script logic needed for now
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 1rem 0;
}

.border-left {
  border-left: 3px solid rgb(76, 124, 213);
  padding: 0.5rem;
}
.content-wrapper {
  margin: 0 3rem;
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

.test {
  border: 1px solid red;
}

img {
  stroke: red;
}
</style>
