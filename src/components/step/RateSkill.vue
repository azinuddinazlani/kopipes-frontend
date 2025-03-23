<!-- <template>
  <div class="wrapper">
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="name">Full Name</Label>
      <Input id="name" type="name" placeholder="Enter your full name" />
    </div>

    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="email">Email Address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>

    <div class="skill-wrapper">
      <div class="skill-add">
        <span>Rate Your Skill</span>
        <Button>Add Skill</Button>
      </div>

      <div class="skill-input">
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <Input id="skillset" placeholder="Enter skill name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
</script>

<style lang="scss" scoped>
.wrapper {
  .skill-wrapper {
    .skill-add {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style> -->

<template>
  <div class="wrapper">
    <Card class="card-wrapper">
      <div class="step-container">
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>

        <CardContent>
          <!-- Skills Input Section -->
          <div class="mb-6">
            <div class="flex gap-4 mb-4">
              <div class="flex-1">
                <Input
                  placeholder="Add a skill (e.g., JavaScript, Python, React)"
                  v-model="newSkill"
                />
              </div>
              <div class="flex items-center gap-2">
                <div class="flex">
                  <button
                    v-for="star in 5"
                    :key="star"
                    @click="tempRating = star"
                    class="text-2xl focus:outline-none"
                    :class="star <= tempRating ? 'text-yellow-400' : 'text-gray-300'"
                  >
                    ★
                  </button>
                </div>
                <Button
                  @click="addSkill"
                  class="px-4 py-2 bg-primary text-white rounded"
                  :disabled="!newSkill"
                >
                  Add Skill
                </Button>
              </div>
            </div>

            <!-- Skills suggestions -->
            <div class="mb-4">
              <p class="text-sm text-gray-600 mb-2">Popular skills:</p>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="skill in suggestedSkills"
                  :key="skill"
                  @click="newSkill = skill"
                  class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                >
                  {{ skill }}
                </button>
              </div>
            </div>
          </div>

          <!-- Skills List -->
          <div class="space-y-4">
            <div v-if="localFormData.skills.length === 0" class="text-center text-gray-500 py-8">
              No skills added yet. Start adding your technical skills above.
            </div>

            <!-- Skill Items -->
            <div
              v-for="(skill, index) in localFormData.skills"
              :key="index"
              class="flex items-center justify-between p-4 border rounded bg-white hover:shadow-sm transition-shadow"
            >
              <div class="flex-1">
                <h3 class="font-medium">{{ skill.name }}</h3>
                <div class="flex text-yellow-400">
                  <span v-for="star in 5" :key="star" class="text-xl">
                    {{ star <= skill.rating ? '★' : '☆' }}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button @click="editSkill(index)" class="p-2 text-blue-500 hover:text-blue-700">
                  <span class="material-icons"><PenLine /></span>
                </button>
                <button @click="removeSkill(index)" class="p-2 text-red-500 hover:text-red-700">
                  <span class="material-icons"><Trash2 /></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Edit Skill Modal -->
          <div
            v-if="editingSkill !== null"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="bg-white p-6 rounded-lg w-96">
              <h3 class="text-lg font-bold mb-4">Edit Skill</h3>
              <Input v-model="editingSkillData.name" class="w-full p-2 border rounded mb-4" />
              <div class="flex justify-center mb-4">
                <button
                  v-for="star in 5"
                  :key="star"
                  @click="editingSkillData.rating = star"
                  class="text-2xl focus:outline-none"
                  :class="star <= editingSkillData.rating ? 'text-yellow-400' : 'text-gray-300'"
                >
                  ★
                </button>
              </div>
              <div class="flex justify-end gap-2">
                <Button @click="cancelEdit" variant="secondary"> Cancel </Button>
                <Button @click="saveEdit"> Save </Button>
              </div>
            </div>
          </div>
        </CardContent>

        <!-- Navigation Buttons -->
        <CardFooter class="flex justify-between mt-6">
          <Button @click="$emit('prev')" class="px-4 py-2 bg-primary text-white rounded">
            <ChevronLeft /> Previous
          </Button>
          <Button @click="handleNext" class="px-4 py-2 bg-primary text-white rounded">
            Next <ChevronRight />
          </Button>
        </CardFooter>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'
import { ChevronRight, ChevronLeft, Trash2, PenLine } from 'lucide-vue-next'

interface Skill {
  name: string
  rating: number
}

interface FormData {
  skills: Skill[]
  [key: string]: any
}

const props = defineProps<{
  formData: FormData
}>()

const emit = defineEmits(['update:formData', 'next', 'prev'])

const localFormData = reactive({
  skills: [...(props.formData.skills || [])],
})

const newSkill = ref('')
const tempRating = ref(0)
const editingSkill = ref<number | null>(null)
const editingSkillData = ref<Skill>({ name: '', rating: 0 })

// Suggested skills list
const suggestedSkills = [
  'JavaScript',
  'Python',
  'React',
  'Vue.js',
  'Node.js',
  'SQL',
  'Java',
  'Docker',
  'AWS',
  'TypeScript',
]

const addSkill = () => {
  if (newSkill.value && tempRating.value) {
    localFormData.skills.push({
      name: newSkill.value,
      rating: tempRating.value,
    })
    newSkill.value = ''
    tempRating.value = 0
  }
}

const removeSkill = (index: number) => {
  localFormData.skills.splice(index, 1)
}

const editSkill = (index: number) => {
  editingSkill.value = index
  editingSkillData.value = { ...localFormData.skills[index] }
}

const saveEdit = () => {
  if (editingSkill.value !== null) {
    localFormData.skills[editingSkill.value] = { ...editingSkillData.value }
    cancelEdit()
  }
}

const cancelEdit = () => {
  editingSkill.value = null
  editingSkillData.value = { name: '', rating: 0 }
}

watch(localFormData, (newValue) => {
  emit('update:formData', newValue)
})

const handleNext = () => {
  if (localFormData.skills.length > 0) {
    emit('next')
  }
}
</script>

<style scoped lang="scss">
.material-icons {
  font-size: 20px;
}

.wrapper {
  .card-wrapper {
    width: 100%;
    .img-wrapper {
      display: flex;
      justify-content: center;

      .img-circle {
        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        background-color: #f4f4f4;
        display: flex;
        margin: 3rem 0;

        img {
          padding: 3rem;
        }
      }
    }
    .card-footer {
      justify-content: end;
    }
  }
}
</style>
