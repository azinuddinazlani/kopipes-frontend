<script setup>
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import 'ant-design-vue/dist/reset.css' // For Ant Design Vue 3
import { Statistic } from 'ant-design-vue'
const { Countdown } = Statistic

const progress = ref(0)
const duration = 10000 // 60 seconds
const intervalTime = 10 // Update every 100ms
let interval

// countdown
const onFinish = () => {
  console.log('finished!')
}
// 45 min
const deadline = Date.now() + 1000 * 45 * 60

onMounted(() => {
  const step = 100 / (duration / intervalTime) // Increment per interval

  interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += step
    } else {
      clearInterval(interval)
    }
  }, intervalTime)
})

onBeforeUnmount(() => {
  clearInterval(interval) // Cleanup to avoid memory leaks
})
</script>

<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <div class="left-content">
        Technical Assessment
        <Badge variant="secondary">Frontend Development</Badge>
      </div>
      <div class="right-content">
        <div class="cd-wrapper">
          <div class="cd-title">Time Remaining</div>
          <div class="cd-timer">
            <Countdown
              :value="deadline"
              style="margin-right: 50px"
              @finish="onFinish"
              class="cd-timer"
            />
          </div>
        </div>

        <div class="progress-wrapper">
          <div class="progress-title">Progress</div>
          <div class="progress">3/10</div>
        </div>
      </div>
    </div>

    <div class="progress-bar">
      <!-- <Progress :model-value="33" /> -->
      <!-- <Progress v-model="progress" class="bar" /> -->
      <Progress v-model="progress" class="bar" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  //   background-color: #fff;
  // padding: 1rem;
  margin: 0 0 1.25rem 0 !important;
  border-radius: 10px;

  .content-wrapper {
    display: flex;
    justify-content: space-between;

    .left-content {
      align-items: center;
      display: flex;
      gap: 1rem;
    }

    .right-content {
      display: flex;
      margin: 1rem;
      gap: 1rem;

      .cd-wrapper {
        .cd-title {
        }

        .cd-timer {
          display: flex;
          justify-content: center;
        }
      }

      .progress-wrapper {
        .progress-title {
        }

        .progress {
          display: flex;
          justify-content: center;
          // copy countdown
          font-size: 24px;
          line-height: 1.5;
        }
      }
    }
  }

  .progress-bar {
    .bar {
    }
  }
}
</style>
