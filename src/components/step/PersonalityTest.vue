<template>
  <div class="wrapper">
    <Card class="card-wrapper">
      <CardHeader>
        <CardTitle>Personality Assessment</CardTitle>
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
                    Question
                    <span class="counter-current">{{ index + 1 }}</span>
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
                    <div class="word-count">{{ getWordCount(answers[index]) }}/500 words</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex justify-between">
        <Button @click="$emit('prev')"> <ChevronLeft /> Previous </Button>
        <Button @click="$emit('next')"> Next <ChevronRight /></Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue'
import { Textarea } from '@/components/ui/textarea'

interface Question {
  trait: string
  text: string
  placeholder: string
}

defineProps<{
  questions: Question[]
}>()

const emit = defineEmits(['update:answers', 'next', 'prev'])
const answers = ref(Array(5).fill(''))

const getWordCount = (text: string): number => {
  return text ? text.trim().split(/\s+/).length : 0
}

const emitAnswers = () => {
  emit('update:answers', answers.value)
}

const goToNext = () => {
  emit('next') // Emits 'next' event to parent
}

const goToPrev = () => {
  emit('prev') // Emits 'prev' event to parent
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;

  .card-wrapper {
    width: 100%;
    margin: 0 auto;

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
