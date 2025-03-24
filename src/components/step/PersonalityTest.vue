<script setup>
import { ref, computed } from 'vue'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue'
import { Textarea } from '@/components/ui/textarea'
import { useUserStore } from '@/stores/useUserStore'
import api from '@/api'

const { questions } = defineProps(['questions'])
const emit = defineEmits(['update:answers', 'next', 'prev'])

const answers = ref(Array(5).fill(''))
const userStore = useUserStore()
const email = userStore.email
const isLoading = ref(false) // Loading state

const fetchData = computed(() => ({
  responses: [
    {
      question: 'Describe a situation where you had to think outside the box.',
      response: answers.value[0],
    },
    { question: 'How do you typically organize your daily tasks?', response: answers.value[1] },
    {
      question: 'Tell us about a time when you had to work in a team.',
      response: answers.value[2],
    },
    { question: 'How do you handle conflicts or disagreements?', response: answers.value[3] },
    { question: 'Describe how you cope with stressful situations.', response: answers.value[4] },
  ],
}))

const submitPersonalityTest = async () => {
  isLoading.value = true // Start loading

  try {
    const personTestRes = await api.userPersonalityTest(email, fetchData.value)
    console.log('API Response:', personTestRes)

    const userDetailRes = await api.userDetail(email)
    console.log('User Detail:', userDetailRes)
    userStore.setUserDetails(userDetailRes)
    console.log(userStore.userDetail)

    emit('next') // Move to next step only after API is done
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isLoading.value = false // Stop loading
  }
}

const emitAnswers = () => {
  emit('update:answers', answers.value)
}
</script>

<template>
  <div class="wrapper">
    <Card class="card-wrapper">
      <CardHeader class="flex flex-row justify-between">
        <CardTitle>Personality Assessment</CardTitle>
        <img class="ai-logo" src="@/img/ai-logo.svg" alt="Personality Test" />
      </CardHeader>

      <CardContent>
        <div class="questions-scroll-container">
          <div v-for="(question, index) in questions" :key="index" class="question-container">
            <div class="question-grid">
              <div class="decoration-container">
                <div class="decoration-rectangle">
                  <span class="decoration-text">{{ question.trait }}</span>
                </div>
              </div>

              <div class="question-content">
                <div class="title-row">
                  <h3 class="question-title">{{ question.trait }}</h3>
                  <div class="question-counter">
                    Question <span class="counter-current">{{ index + 1 }}</span>
                  </div>
                </div>
                <p class="question-text">
                  {{ question.text }}
                </p>
                <div class="textarea-container">
                  <div class="textarea-wrapper">
                    <Textarea
                      v-model="answers[index]"
                      :placeholder="question.placeholder"
                      class="answer-textarea"
                      rows="5"
                      @input="emitAnswers"
                    />
                    <div class="word-count">
                      {{ answers[index]?.split(/\s+/).length || 0 }}/500 words
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter class="flex justify-between">
        <Button @click="$emit('prev')"> <ChevronLeft /> Previous </Button>
        <Button @click="submitPersonalityTest" :disabled="isLoading">
          <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
          <span v-if="isLoading">Please wait</span>
          <span v-else class="flex items-center">Next <ChevronRight /></span>
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;

  .card-wrapper {
    width: 100%;
    margin: 0 auto;

    .ai-logo {
      width: 2rem;
    }

    .questions-scroll-container {
      max-height: calc(100vh - 12rem);
      overflow-y: auto;
      padding-right: 1rem;
      width: 100%;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f5f9;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 4px;

        &:hover {
          background: #94a3b8;
        }
      }
    }

    .question-container {
      padding: 1.5rem 0;

      &:not(:last-child) {
        border-bottom: 1px solid #e2e8f0;
      }
    }

    .question-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      width: 100%;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 2fr;
      }
    }

    .decoration-container {
      display: flex;
      align-items: center;
      justify-content: center;
      // height: 100%;
    }

    .decoration-rectangle {
      width: 100%;
      height: 100%;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      // background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
      background: radial-gradient(circle, #ffb5e9 0%, #fee4dc 100%);
      box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2);
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .decoration-text {
      color: white;
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: 0.025em;
    }

    .title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }

    .question-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }

    .question-counter {
      padding: 0.5rem 1rem;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 9999px;
      font-size: 0.875rem;
      color: #64748b;

      .counter-current {
        // color: #4f46e5;
        font-weight: 600;
      }
    }

    .question-text {
      color: #475569;
      font-size: 1.125rem;
      line-height: 1.75;
      margin-bottom: 1rem;
    }

    .textarea-container {
      height: 140px;

      .textarea-wrapper {
        position: relative;
        height: 100%;
      }

      .word-count {
        position: absolute;
        bottom: 0.75rem;
        right: 0.75rem;
        font-size: 0.75rem;
        color: #94a3b8;
        background-color: white;
        padding: 0.25rem;
        pointer-events: none;
      }
    }

    .answer-textarea {
      width: 100%;
      height: 100%;
      padding: 0.75rem;
      padding-bottom: 2rem;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      font-size: 1rem;
      // color: #1e293b;
      resize: none;
      transition: all 0.2s;

      // &::placeholder {
      //   color: #94a3b8;
      // }

      // &:hover {
      //   border-color: #cbd5e1;
      // }

      // &:focus {
      //   outline: none;
      //   border-color: #4f46e5;
      //   box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
      // }
    }
  }
}

.test {
  border: 1px solid red;
}
</style>
