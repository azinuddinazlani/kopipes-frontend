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
import { ref, reactive } from 'vue'
import UploadResume from './step/UploadResume.vue'
import RateSkill from './step/RateSkill.vue'
import ReviewSubmit from './step/ReviewSubmit.vue'

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
  if (currentStep.value < 3) {
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
</script>

<template>
  <div class="container mx-auto p-4">
    <Stepper v-model="currentStep" class="stepper-wrapper">
      <StepperItem :step="1">
        <StepperTrigger>
          <StepperIndicator>1</StepperIndicator>
          <StepperTitle>Personal Information</StepperTitle>
          <StepperDescription>Upload Resume</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>

      <StepperItem :step="2">
        <StepperTrigger>
          <StepperIndicator>2</StepperIndicator>
          <StepperTitle>Technical Skills</StepperTitle>
          <StepperDescription>Rate Your Skills</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>

      <StepperItem :step="3">
        <StepperTrigger>
          <StepperIndicator>3</StepperIndicator>
          <StepperTitle>Review & Submit</StepperTitle>
          <StepperDescription>Verify your information</StepperDescription>
        </StepperTrigger class="min-w-[4rem]">
      </StepperItem>
    </Stepper>

    <div class="mt-8">
      <!-- Step Components -->
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

      <ReviewSubmit
        v-if="currentStep === 3"
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
  justify-content: space-between;
  display: flex;
  margin: 0 3rem;
}
</style>
