<template>
  <div class="container-wrapper">
    <div class="top-wrapper shadow rounded-lg">
      <div class="left">All Jobs</div>
      <div class="right">
        <div class="relative w-full max-w-sm items-center">
          <Input id="search" type="text" placeholder="Search..." class="pl-10" />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search class="size-6 text-muted-foreground" />
          </span>
        </div>
        <Button><Plus />Add New Job</Button>
      </div>
    </div>

    <div class="sort-wrapper mt-3">
      <ArrowDownUp />
      <p class="mb-2">Sort: Recently added</p>
    </div>

    <div class="job-wrapper">
      <div v-for="job in jobs" :key="job.id" class="job-card shadow-lg rounded-lg p-4 bg-white">
        <div class="left">
          <div class="job-desc">
            <h3 class="text-lg font-bold">{{ job.title }}</h3>
            <p class="text-sm text-gray-500">
              📌 {{ job.candidates }} candidates, created {{ job.createdAt }}
            </p>
          </div>

          <div class="middle"></div>

          <div class="job-stat">
            <div class="feature">
              <p>Applied</p>
              <p class="mt-3">{{ job.applied }}</p>
            </div>
            <div class="feature">
              <p>Skills Test</p>
              <p class="mt-3">{{ job.skillsTest }}</p>
            </div>
            <div class="feature">
              <p>Offer</p>
              <p class="mt-3">{{ job.offer }}</p>
            </div>
          </div>
        </div>

        <div class="right icons">
          <Eye />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'
import { Eye } from 'lucide-vue-next'
import { ArrowDownUp } from 'lucide-vue-next'
import { Search } from 'lucide-vue-next'
import { Plus } from 'lucide-vue-next'

const jobs = ref([
  {
    id: 1,
    title: 'Senior Frontend Developer',
    candidates: 1,
    applied: 0,
    skillsTest: 12,
    offer: 5,
    createdAt: '16 mins ago',
  },
  {
    id: 2,
    title: 'Backend Developer',
    candidates: 3,
    applied: 2,
    skillsTest: 10,
    offer: 4,
    createdAt: '30 mins ago',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    candidates: 2,
    applied: 1,
    skillsTest: 8,
    offer: 3,
    createdAt: '1 hour ago',
  },
])
</script>

<style lang="scss" scoped>
.container-wrapper {
  margin: 3rem 5rem;

  .top-wrapper {
    background-color: white;
    display: flex;
    padding: 1rem;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
    }

    .right {
      display: flex;
      gap: 0.5rem;
    }
  }
  .sort-wrapper {
    display: flex;
  }

  .job-wrapper {
    .job-card {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      .left {
        display: flex;
        .job-desc {
        }

        .job-stat {
          display: flex;
          gap: 5rem;
        }

        .middle {
          border-left: 2px solid pink;
          height: 100%;
          margin: 0 1rem;
        }
      }

      .right {
        display: flex;
        align-items: center;
      }
    }
  }
}

h2 {
  font-size: 30px;
  font-weight: 100rem;
}

.test {
  border: 1px solid red;
}
</style>
