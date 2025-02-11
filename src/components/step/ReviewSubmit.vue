<script setup lang="ts">
import Label from '../ui/label/Label.vue'
import Input from '../ui/input/Input.vue'
import Button from '../ui/button/Button.vue'
import { ChevronLeft, SendHorizontal } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
}

defineProps<{
  formData: FormData
}>()

defineEmits(['prev', 'submit'])
</script>

<template>
  <Card>
    <div class="step-container">
      <CardHeader>
        <CardTitle>Review Your Information</CardTitle>
      </CardHeader>
      <CardContent class="review-content mb-4">
        <div class="mb-2">
          <Label>Name</Label>
          <Input> {{ formData.firstName }} {{ formData.lastName }} </Input>
        </div>

        <div class="mb-2">
          <Label>Email</Label>
          <Input> {{ formData.email }} </Input>
        </div>

        <div class="mb-2">
          <Label>Phone</Label>
          <Input> {{ formData.phone }} </Input>
        </div>

        <div class="mb-2">
          <Label>Address</Label>
          <Input> {{ formData.address }} </Input>
        </div>
      </CardContent>
      <CardFooter class="flex justify-between">
        <Button @click="$emit('prev')"> <ChevronLeft /> Previous </Button>
        <Button @click="$emit('submit')">Submit<SendHorizontal /></Button>
      </CardFooter>
    </div>
  </Card>
</template>
