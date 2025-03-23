<script setup lang="ts">
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper'
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import UploadResume from './step/UploadResume.vue'
import RateSkill from './step/RateSkill.vue'
import ReviewSubmit from './step/ReviewSubmit.vue'
import { Upload, Check, BookHeart, Star } from 'lucide-vue-next'
import PersonalityTest from './step/PersonalityTest.vue'

const router = useRouter()

const personalityQuestions = [
  {
    trait: 'Openness to Experience',
    text: 'Tell us about yourself. (e.g., your hobbies, interests, or past working experience)',
    placeholder: 'I\'m a fullstack developer. I\'m more into a backend development more than a frontend guy. My previous work experience are into developing CRM system. Personally I like to solve puzzle as my hobby. I also do rock climbing. I started rock climbing because of my fear to height. I want to break my comfort zone by doing things that would challenge my comfort zone.',
  }
]

const handleAnswers = (newAnswers: string[]) => {
  console.log('Updated answers:', newAnswers)
  // Handle the answers as needed
}

const currentStep = ref(1)

const formData = reactive({
  resumeFile: null as File | null,

  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
})

const updateFormData = (newData: any) => {
  Object.assign(formData, newData)
}

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleSubmit = async () => {
  try {
    console.log('Form submitted:', formData)
    // Add your submission logic here
    await router.push('/profile')
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}

const steps = [
  {
    step: 1,
    title: 'Personal Information',
    description: 'Upload Resume',
    icon: Upload,
  },
  {
    step: 2,
    title: 'Technical Skills',
    description: 'Rate Your Skills',
    icon: Star,
  },
  {
    step: 3,
    title: 'Personality Test',
    description: 'Test your personality',
    icon: BookHeart,
  },
  {
    step: 4,
    title: 'Review & Submit',
    description: 'Verify your information',
    icon: Check,
  },
]
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-center pl-20">
      <Stepper v-model="currentStep" class="stepper-wrapper">
        <StepperItem v-for="item in steps" :key="item.step" class="basis-1/4" :step="item.step">
          <StepperTrigger @click="currentStep = item.step">
            <StepperIndicator>
              <component :is="item.icon" class="w-4 h-4" />
            </StepperIndicator>
            <div class="flex flex-col">
              <StepperTitle>
                {{ item.title }}
              </StepperTitle>
              <StepperDescription>
                {{ item.description }}
              </StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator v-if="item.step !== steps[steps.length - 1].step" class="w-full h-px" />
        </StepperItem>
      </Stepper>
    </div>

    <div class="mt-8">
      <UploadResume
        v-if="currentStep === 1"
        :formData="formData"
        @update:formData="updateFormData"
        @next="nextStep"
      />

      <RateSkill
        v-if="currentStep === 2"
        :formData="formData"
        @update:formData="updateFormData"
        @next="nextStep"
        @prev="prevStep"
      />

      <div v-if="currentStep === 3">
        <!-- Add your personality test component here -->
        <PersonalityTest
          :questions="personalityQuestions"
          @update:answers="handleAnswers"
          @next="nextStep"
          @prev="prevStep"
        />
      </div>

      <ReviewSubmit
        v-if="currentStep === 4"
        :formData="formData"
        @prev="prevStep"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  border: 1px solid red;
}

.stepper-wrapper {
  // justify-content: center;
  // display: flex;
  // align-items: center;
  // margin: 0 3rem;

  display: flex;
  align-items: center;
  width: 100%;
  max-width: 80%; /* Adjust this value as needed */
}
</style>
