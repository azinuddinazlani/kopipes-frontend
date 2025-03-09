<template>
  <div class="wrapper">
    <Card class="card-wrapper">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <!-- <div class="img-wrapper">
            <div class="img-circle">
              <img src="@/img/upload-resume.svg" />
            </div>
          </div> -->

          <a-upload-dragger
            v-model:fileList="fileList"
            name="file"
            :multiple="false"
            @change="handleChange"
            @drop="handleDrop"
          >
            <!-- action="https://www.mocky.io/v2/5cc8019d300000980a055e76" -->

            <div class="img-wrapper">
              <div class="img-circle">
                <img src="@/img/upload-resume.svg" />
              </div>
            </div>

            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint">
              Files should be in <strong>PDF or Word</strong> format and must not exceed 10MD in
              size
            </p>
          </a-upload-dragger>

          <!-- <Button variant="outline">Upload Your Resume</Button> -->
          <!-- Files should be in <strong>PDF or Word</strong> format and must not exceed 10MD in size -->

          <!-- <div class="test text-2xl font-semibold leading-none tracking-tight">
            Files should be in PDF or Word format and must not exceed 10MD in size
          </div> -->
        </div>
      </CardContent>

      <CardFooter class="card-footer">
        <Button @click="handleNext">Next <ChevronRight /> </Button>
      </CardFooter>
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
import Button from '@/components/ui/button/Button.vue'
import { ChevronRight } from 'lucide-vue-next'

// import { InboxOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const props = defineProps<{
  formData: FormData
}>()

const emit = defineEmits(['update:formData', 'next'])

const localFormData = reactive({ ...props.formData })

interface FormData {
  firstName: string
  lastName: string
  [key: string]: any
}

const fileList = ref([])

const handleChange = (info) => {
  const status = info.file.status
  if (status !== 'uploading') {
    console.log(info.file, info.fileList)
  }
  if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`)
  } else if (status === 'error') {
    message.error(`${info.file.name} file upload failed.`)
  }
}

function handleDrop(e) {
  console.log(e)
}

watch(localFormData, (newValue) => {
  emit('update:formData', newValue)
})

const handleNext = () => {
  emit('next')
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

  // gradient color
  // .test {
  //   background: rgb(163, 240, 255);
  //   background: linear-gradient(90deg, rgba(163, 240, 255, 1) 0%, rgba(188, 255, 157, 1) 100%);
  //   color: black;
  //   text-align: center;
  //   padding: 10rem;
  //   border-radius: 20px;
  //   font-weight: bold;
  //   font-size: xx-large;
  //   letter-spacing: -1px;
  // }
}
</style>
