<template>
  <div class="wrapper">
    <Card class="card-wrapper">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <a-upload-dragger
            v-model:fileList="fileList"
            name="file"
            :multiple="false"
            @change="handleChange"
            @drop="handleDrop"
            :before-upload="beforeUpload"
          >
            <div class="img-wrapper">
              <div class="img-circle">
                <img src="@/img/upload-resume.svg" />
              </div>
            </div>

            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint">
              Files should be in <strong>PDF or Word</strong> format and must not exceed 10MB in
              size
            </p>
          </a-upload-dragger>
        </div>
      </CardContent>

      <CardFooter class="card-footer">
        <Button @click="handleNext">Next <ChevronRight /> </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Button from '@/components/ui/button/Button.vue'
import { ChevronRight } from 'lucide-vue-next'
import { message } from 'ant-design-vue'
import api from '@/api/index'

const emit = defineEmits(['next'])
const userStore = useUserStore()
const fileList = ref([])

const beforeUpload = (file) => {
  fileList.value = [file] // Ensure only one file is stored
  return false // Prevent auto-upload, since API call is handled on "Next"
}

const handleChange = (info) => {
  const status = info.file.status
  if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`)
  } else if (status === 'error') {
    message.error(`${info.file.name} file upload failed.`)
  }
}

const handleNext = async () => {
  if (fileList.value.length === 0) {
    message.error('Please upload a file before proceeding.')
    return
  }

  const email = userStore.email // Get email from Pinia store
  const file = fileList.value[0].originFileObj // Ensure raw file is used

  try {
    message.success('File uploaded successfully!')
    emit('next') // Proceed to next step
    await api.userUploadResume(email, file)
  } catch (error) {
    message.error('File upload failed. Please try again.')
    console.error('Upload error:', error)
  }
}

const handleDrop = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>
.wrapper {
  .card-wrapper {
    width: 100%;

    .img-wrapper {
      display: flex;
      justify-content: center;

      .img-circle {
        width: 20rem;
        height: 20rem;
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
