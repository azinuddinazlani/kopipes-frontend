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
import UploadResume from './step/UploadResume.vue'
import RateSkill from './step/RateSkill.vue'
import ReviewSubmit from './step/ReviewSubmit.vue'
import { Upload, Check, BookHeart, Star } from 'lucide-vue-next'

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
        <div class="flex justify-between mt-4">
          <button @click="prevStep" class="px-4 py-2 bg-gray-200 rounded">Previous</button>
          <button @click="nextStep" class="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
        </div>
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
