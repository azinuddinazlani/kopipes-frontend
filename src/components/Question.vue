<template>
  <div class="wrapper" v-for="q in questions" :key="q.id">
    <div class="question-header">
      <div class="question-index">Question {{ q.id }}</div>
      <div class="question-tag"><Badge>Unanswered</Badge></div>
    </div>

    <div class="question">{{ q.question }}</div>

    <div class="options-wrapper" v-for="option in q.options" :key="option.id">
      <Checkbox :id="q.qid.toString() + option.id.toString()" />
      <div class="grid gap-1.5 leading-none">
        <label
          :for="q.id.toString() + option.id.toString()"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {{ option.option }}
        </label>
      </div>
    </div>
  </div>

  <Pagination
    v-slot="{ page }"
    :total="100"
    :sibling-count="1"
    show-edges
    :default-page="2"
    class="pagination-wrapper"
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
          <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </Pagination>
</template>

<script setup>
import Badge from './ui/badge/Badge.vue'
import Checkbox from './ui/checkbox/Checkbox.vue'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'

import api from '@/api/index'
import { useUserStore } from '@/stores/useUserStore'
import { ref, onMounted } from 'vue'

const userStore = useUserStore()

onMounted(async () => {
  const response = await api.skillGetQuestions(userStore.email)
  console.log(response)

  if (response) {
    questions.value = response.map((qs, index) => ({
      id: index + 1,
      qid: qs.id,
      question: qs.question,
      options: qs.option
        .slice(1, -1) // Remove the outer curly braces
        .split(',') // Split into array of options
        .map((opt) => {
          const [id, value] = opt.replace(/"/g, '').split(': ')
          return {
            id: id,
            option: value,
          }
        }),
    }))

    console.log(questions)
  }
})

const questions = ref([
  {
    id: 1,
    qid: 1,
    question: 'What is the differences between "let" and "const" in JavaScript?',
    options: [
      {
        id: 1,
        option: 'Both are block-scoped variables',
      },
      {
        id: 2,
        option: 'Both are function-scoped variables',
      },
      {
        id: 3,
        option: 'let is block-scoped and const is function-scoped',
      },
      {
        id: 4,
        option: 'let is function-scoped and const is block-scoped',
      },
    ],
  },

  {
    id: 2,
    qid: 2,
    question: 'What is animal is Tom from Tom and Jerry',
    options: [
      {
        id: 1,
        option: 'Mouse',
      },
      {
        id: 2,
        option: 'Potato',
      },
      {
        id: 3,
        option: 'Human',
      },
      {
        id: 4,
        option: 'Cat',
      },
    ],
  },

  {
    id: 3,
    qid: 3,
    question: 'Continue the sentence: "Lorem ipsum dolor sit amet, ___________"',
    options: [
      {
        id: 1,
        option:
          ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 2,
        option:
          ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 3,
        option:
          ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 4,
        option:
          ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  },
])
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 1rem;

  .question-header {
    justify-content: space-between;
    display: flex;
  }

  .question {
    margin-top: 1rem;
  }

  .options-wrapper {
    border: 1px solid #e2e8f0;
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 1rem;
  }
}

.pagination-wrapper {
  display: flex;
  justify-content: center;
}
</style>
