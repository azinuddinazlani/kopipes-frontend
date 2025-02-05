<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-6xl mx-auto grid grid-cols-3 gap-6">
      <!-- Left Column -->
      <div class="col-span-2 space-y-6">
        <!-- Resume Overview -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-semibold">Resume Overview</h2>
          <div class="mt-4">
            <h3 class="font-medium">Experience</h3>
            <ul class="mt-2 space-y-2">
              <li>
                <p class="font-semibold">Senior UX Designer - Apple Inc.</p>
                <p class="text-gray-500">2023 - Present</p>
                <p class="text-gray-600">
                  Led design initiatives for iOS applications and conducted user research studies.
                </p>
              </li>
              <li>
                <p class="font-semibold">UX Designer - Google</p>
                <p class="text-gray-500">2020 - 2023</p>
                <p class="text-gray-600">
                  Designed user interfaces for various Google products and services.
                </p>
              </li>
            </ul>
          </div>
          <div class="mt-4">
            <div class="icon">
              <h2 class="font-medium"><img src="@\img\school.svg" />Education</h2>
            </div>
            <p class="font-semibold">Master in Human-Computer Interaction</p>
            <p class="text-gray-500">Stanford University, 2020</p>
          </div>
          <div class="mt-4">
            <div class="icon">
              <h3 class="font-medium"><img src="@\img\star-shooting.svg" />Skills</h3>
            </div>
            <div class="flex space-x-2 mt-2 flex-wrap">
              <span class="bg-gray-200 px-3 py-1 rounded-full text-sm">UI Design</span>
              <span class="bg-gray-200 px-3 py-1 rounded-full text-sm">User Research</span>
              <span class="bg-gray-200 px-3 py-1 rounded-full text-sm">Figma</span>
              <span class="bg-gray-200 px-3 py-1 rounded-full text-sm">Sketch</span>
              <span class="bg-gray-200 px-3 py-1 rounded-full text-sm">Adobe XD</span>
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
              <span class="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm">In Review</span>
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
</template>

<script setup>
// No additional script logic needed for now
</script>

<style lang="scss" scoped>
.border-left {
  border-left: 5px solid rgb(76, 124, 213);
  padding: 1rem;
}

.icon {
  width: 25px;
  fill: blue;
}
</style>
