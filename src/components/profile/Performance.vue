<template>
  <div class="space-y-6">
    <h2 class="text-lg font-semibold">Performance</h2>
    <div class="radar-container">
      <Radar :data="data" :options="options" />
    </div>

    <!-- Personality Section -->
    <div class="mt-8">
      <h2 class="text-lg font-semibold text-gray-800 mb-6">Personality Overview</h2>
      <div class="space-y-4">
        <!-- Question & Answer Section -->
        <div class="bg-gray-50 rounded-lg border border-gray-200">
          <div class="px-6 py-4">
            <!-- Question -->
            <div class="mb-4">
              <div class="mb-3">
                <span class="text-gray-700 font-medium">Question:</span>
              </div>
              <p class="text-gray-600 leading-relaxed">{{ personality.qs }}</p>
            </div>

            <!-- Divider -->
            <div class="border-b border-gray-200 my-4"></div>

            <!-- Answer -->
            <div>
              <div class="mb-3">
                <span class="text-gray-700 font-medium">Answer:</span>
              </div>
              <p class="text-gray-600 leading-relaxed">{{ personality.ans }}</p>
            </div>
          </div>
        </div>

        <!-- Improvement Suggestions -->
        <div class="suggestion-box-green rounded-lg border border-gray-200 p-4">
          <div class="px-5">
            <div class="flex items-center gap-2 mb-3">
              <Sparkles class="suggestion-heading-green w-5 h-5" />
              <h4 class="suggestion-heading-green font-semibold">Improvement Suggestions</h4>
            </div>
            <ul class="space-y-2">
              <li
                v-for="x in personality.improvement"
                class="suggestion-text-green px-6 font-medium"
              >
                {{ x }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Feedback -->
        <div class="suggestion-box-pink rounded-lg border border-gray-200 p-4">
          <div class="px-5">
            <div class="flex items-center gap-2 mb-3">
              <MessageCircleMore class="suggestion-heading-pink w-5 h-5" />
              <h4 class="suggestion-heading-pink font-semibold">Detailed Feedback</h4>
            </div>
            <p class="suggestion-text-pink px-6 font-medium">{{ personality.feedback }}</p>
          </div>
        </div>

        <!-- Traits -->
        <div class="suggestion-box rounded-lg border border-gray-200 p-4">
          <div class="px-5">
            <div class="flex items-center gap-2 mb-3">
              <Tag class="suggestion-heading w-5 h-5" />
              <h4 class="suggestion-heading font-semibold">Traits</h4>
            </div>
            <ul class="space-y-2">
              <li v-for="x in personality.traits" class="suggestion-text px-6 font-medium">
                {{ x }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Radar } from 'vue-chartjs'
import { MessageCircleMore, Sparkles, Tag } from 'lucide-vue-next'
import * as chartConfig from '@/data/chartConfig.js'

const props = defineProps({
  personality: {
    type: Object,
    required: true,
  },
})

const { data, options } = chartConfig
</script>

<style lang="scss" scoped>
.radar-container {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.suggestion-box {
  background-color: #fff7ed;
}

.suggestion-heading {
  color: #9a3412;
}

.suggestion-text {
  color: #c2410c;
}

.suggestion-box-green {
  background-color: #f0fdf4;
}

.suggestion-heading-green {
  color: #166534;
}

.suggestion-text-green {
  color: #15803d;
}

.suggestion-box-pink {
  background-color: #fdf2f8;
}

.suggestion-heading-pink {
  color: #9d174d;
}

.suggestion-text-pink {
  color: #be185d;
}
</style>
