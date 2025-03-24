<template>
  <div class="wrapper">
    <Card class="card-wrapper">
      <CardHeader>
        <CardTitle>Review and Submit</CardTitle>
      </CardHeader>

      <CardContent>
        <div class="review-submit-content">
          <div class="bg-white rounded-lg space-y-12">
            <!-- Personal Information Section -->
            <div class="space-y-6 pb-8 border-b border-gray-200">
              <h2 class="text-xl font-semibold">Personal Information</h2>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    v-model="personalInfo.name"
                    placeholder="John Doe"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    v-model="personalInfo.email"
                    placeholder="john@example.com"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    v-model="personalInfo.phone"
                    placeholder="+1 (555) 000-0000"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    v-model="personalInfo.address"
                    placeholder="Malaysia"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <!-- Education History Section -->
            <div class="space-y-6 pb-8 border-b border-gray-200">
              <div class="flex justify-between items-center">
                <h2 class="text-xl font-semibold">Education History</h2>
                <Button>
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  <span>Add Education</span>
                </Button>
              </div>

              <div class="bg-white rounded-lg overflow-hidden">
                <table class="w-full">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">School/Institution</th>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Degree</th>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Field of Study</th>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Year</th>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(education, index) in personalInfo.education"
                      :key="index"
                      class="border-t border-gray-200"
                    >
                      <td class="px-6 py-4">{{ education.institution }}</td>
                      <td class="px-6 py-4">{{ education.degree }}</td>
                      <td class="px-6 py-4">{{ education.major }}</td>
                      <td class="px-6 py-4">{{ education.dates }}</td>
                      <td class="px-6 py-4">
                        <div class="flex space-x-4">
                          <button class="text-blue-600 hover:text-blue-800">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                              />
                            </svg>
                          </button>
                          <button class="text-red-600 hover:text-red-800">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Skills Rating Section -->
            <!-- <div class="space-y-6 pb-8 border-b border-gray-200">
              <div class="flex justify-between items-center">
                <h2 class="text-xl font-semibold">Skills Rating</h2>
                <Button>
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  <span>Add Skill</span>
                </Button>
              </div>

              <div class="bg-white rounded-lg overflow-hidden">
                <table class="w-full">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Skill</th>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Rating</th>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(skill, index) in skillsList"
                      :key="index"
                      class="border-t border-gray-200"
                    >
                      <td class="px-6 py-4">{{ skill.name }}</td>
                      <td class="px-6 py-4">
                        <div class="flex items-center">
                          <div class="flex space-x-1">
                            <svg
                              v-for="star in 5"
                              :key="star"
                              class="w-5 h-5"
                              :class="star <= skill.rating ? 'text-yellow-400' : 'text-gray-300'"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </div>
                          <span class="ml-2 text-sm text-gray-600">{{ skill.rating }}/5</span>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex space-x-4">
                          <button class="text-blue-600 hover:text-blue-800">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                              />
                            </svg>
                          </button>
                          <button class="text-red-600 hover:text-red-800">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> -->

            <!-- Work Experience Section -->
            <div class="space-y-6 pb-8 border-b border-gray-200">
              <div class="flex justify-between items-center">
                <h2 class="text-xl font-semibold">Work Experience</h2>
                <Button>
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  <span>Add Work Experience</span>
                </Button>
              </div>

              <div class="bg-white rounded-lg overflow-hidden">
                <table class="w-full">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Company</th>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Position</th>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Duration</th>
                      <th class="px-6 py-3 text-left text-sm text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(work, index) in personalInfo.jobs"
                      :key="index"
                      class="border-t border-gray-200"
                    >
                      <td class="px-6 py-4">{{ work.company }}</td>
                      <td class="px-6 py-4">{{ work.position }}</td>
                      <td class="px-6 py-4">{{ work.duration }}</td>
                      <td class="px-6 py-4">
                        <div class="flex space-x-4">
                          <button class="text-blue-600 hover:text-blue-800">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                              />
                            </svg>
                          </button>
                          <button class="text-red-600 hover:text-red-800">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Personality Assessment Section -->
            <!-- <div class="space-y-6">
              <h2 class="text-xl font-semibold">Personality Assessment</h2>
              <div class="space-y-6">
                <div
                  v-for="(question, index) in personalityQuestions"
                  :key="index"
                  class="space-y-2"
                >
                  <label class="block text-sm font-medium text-gray-700">{{ question.text }}</label>
                  <textarea
                    v-model="question.answer"
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    :placeholder="question.placeholder"
                  ></textarea>
                </div>
              </div>
            </div> -->
          </div>

          <!-- Add/Edit Education Modal -->
          <div
            v-if="showAddEducationModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="bg-white p-6 rounded-lg w-full max-w-md">
              <h3 class="text-lg font-semibold mb-4">
                {{ editIndex === null ? 'Add' : 'Edit' }} Education
              </h3>
              <form @submit.prevent="saveEducation">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm text-gray-700 mb-2">School/Institution</label>
                    <input
                      type="text"
                      v-model="newEducation.school"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm text-gray-700 mb-2">Degree</label>
                    <input
                      type="text"
                      v-model="newEducation.degree"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm text-gray-700 mb-2">Field of Study</label>
                    <input
                      type="text"
                      v-model="newEducation.fieldOfStudy"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm text-gray-700 mb-2">Year</label>
                    <input
                      type="text"
                      v-model="newEducation.year"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div class="mt-6 flex justify-end space-x-3">
                  <Button type="button" variant="secondary"> Cancel </Button>
                  <Button type="submit">
                    {{ editIndex === null ? 'Add' : 'Save' }}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <!-- Add/Edit Work Experience Modal -->
          <div
            v-if="showAddWorkModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="bg-white p-6 rounded-lg w-full max-w-md">
              <h3 class="text-lg font-semibold mb-4">
                {{ editWorkIndex === null ? 'Add' : 'Edit' }} Work Experience
              </h3>
              <form @submit.prevent="saveWork">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      v-model="newWork.company"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm text-gray-700 mb-2">Position</label>
                    <input
                      type="text"
                      v-model="newWork.position"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm text-gray-700 mb-2">Duration</label>
                    <input
                      type="text"
                      v-model="newWork.duration"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div class="mt-6 flex justify-end space-x-3">
                  <Button type="button" variant="secondary"> Cancel </Button>
                  <Button type="submit">
                    {{ editWorkIndex === null ? 'Add' : 'Save' }}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <!-- Add/Edit Skill Modal -->
          <div
            v-if="showAddSkillModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="bg-white p-6 rounded-lg w-full max-w-md">
              <h3 class="text-lg font-semibold mb-4">
                {{ editSkillIndex === null ? 'Add' : 'Edit' }} Skill
              </h3>
              <form @submit.prevent="saveSkill">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm text-gray-700 mb-2">Skill Name</label>
                    <input
                      type="text"
                      v-model="newSkill.name"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm text-gray-700 mb-2">Rating</label>
                    <div class="flex items-center space-x-2">
                      <div class="flex space-x-1">
                        <button
                          v-for="star in 5"
                          :key="star"
                          type="button"
                          class="focus:outline-none"
                        >
                          <svg
                            class="w-8 h-8"
                            :class="star <= newSkill.rating ? 'text-yellow-400' : 'text-gray-300'"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </button>
                      </div>
                      <span class="text-sm text-gray-600">{{ newSkill.rating }}/5</span>
                    </div>
                  </div>
                </div>
                <div class="mt-6 flex justify-end space-x-3">
                  <Button type="button" variant="secondary"> Cancel </Button>
                  <Button type="submit">
                    {{ editSkillIndex === null ? 'Add' : 'Save' }}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter class="flex justify-between">
        <Button @click="$emit('prev')"> <ChevronLeft /> Previous </Button>
        <Button @click="handleSubmit">Submit<SendHorizontal /></Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup>
// import { ref, reactive } from 'vue'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import Button from '../ui/button/Button.vue'
import { ChevronLeft, SendHorizontal } from 'lucide-vue-next'
import { useUserStore } from '@/stores/useUserStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const personalInfo = userStore.resume_base64

const handleSubmit = () => {
  router.push('/profile')
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;

  .card-wrapper {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
