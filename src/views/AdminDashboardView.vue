<template>
  <div class="background">
    <div class="container py-10 mx-auto">
      <!-- <h1 class="dashboard-title font-bold mb-4">Admin Dashboard</h1> -->

      <div class="cards-container">
        <div
          class="card"
          v-for="card in cards"
          :key="card.title"
          :style="{ borderColor: card.color }"
        >
          <div class="card-icon" :style="{ backgroundColor: card.color }">
            <component :is="card.icon" class="w-6 h-6 text-white" />
          </div>
          <div class="card-content">
            <h3>{{ card.title }}</h3>
            <p>{{ card.count }}</p>
          </div>
        </div>
      </div>

      <DataTable :columns="columns" :data="data" />

      <div class="flex items-center justify-end py-4 space-x-2">
        <Button
          variant="outline"
          size="sm"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          Next
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, h, reactive } from 'vue'
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  SortingState,
  useVueTable,
} from '@tanstack/vue-table'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import { CircleUserRound, Clock, XCircle, CheckCircle, ArrowUpDown } from 'lucide-vue-next'

const cards = reactive([
  { title: 'Total Applicants', count: 248, icon: CircleUserRound, color: '#4A90E2' },
  { title: 'Shortlisted', count: 42, icon: CheckCircle, color: '#6FCF97' },
  { title: 'Pending Review', count: 85, icon: Clock, color: '#F2C94C' },
  { title: 'Rejected', count: 121, icon: XCircle, color: '#EB5757' },
])

const data = ref<Candidate[]>([])
const sorting = ref<SortingState>([])

const candidates: Candidate[] = [
  {
    applicant: 'John Doe',
    position: 'Software Engineer',
    skill_match: 85,
    personality_score: 'High',
    overall_score: 90,
  },
  {
    applicant: 'Jane Smith',
    position: 'Data Scientist',
    skill_match: 78,
    personality_score: 'Medium',
    overall_score: 82,
  },
  {
    applicant: 'Alice Johnson',
    position: 'Project Manager',
    skill_match: 92,
    personality_score: 'High',
    overall_score: 88,
  },
  {
    applicant: 'Robert Brown',
    position: 'Cybersecurity Analyst',
    skill_match: 80,
    personality_score: 'Medium',
    overall_score: 84,
  },
  {
    applicant: 'Emma Wilson',
    position: 'Software Engineer',
    skill_match: 88,
    personality_score: 'High',
    overall_score: 89,
  },
  {
    applicant: 'Daniel Lee',
    position: 'Data Scientist',
    skill_match: 76,
    personality_score: 'Low',
    overall_score: 79,
  },
  {
    applicant: 'Sophia Miller',
    position: 'UX Designer',
    skill_match: 85,
    personality_score: 'High',
    overall_score: 87,
  },
  {
    applicant: 'Michael Garcia',
    position: 'Cybersecurity Analyst',
    skill_match: 83,
    personality_score: 'Medium',
    overall_score: 86,
  },
  {
    applicant: 'Olivia Martinez',
    position: 'Project Manager',
    skill_match: 90,
    personality_score: 'High',
    overall_score: 91,
  },
  {
    applicant: 'William Anderson',
    position: 'Software Engineer',
    skill_match: 87,
    personality_score: 'Medium',
    overall_score: 88,
  },
]

const columns: ColumnDef<Candidate>[] = [
  {
    accessorKey: 'applicant',
    header: () => h('div', {}, 'Applicant'),
    cell: ({ row }) => row.getValue('applicant'),
  },
  {
    accessorKey: 'position',
    header: ({ column }) =>
      h(
        Button,
        { variant: 'ghost', onClick: () => column.toggleSorting(column.getIsSorted() === 'asc') },
        () => ['Position', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      ),
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('position')),
  },
  {
    accessorKey: 'skill_match',
    header: ({ column }) =>
      h(
        Button,
        { variant: 'ghost', onClick: () => column.toggleSorting(column.getIsSorted() === 'asc') },
        () => ['Skill Match (%)', h(ArrowUpDown, { class: 'h-4 w-4' })],
      ),
    cell: ({ row }) => h('div', { class: 'ml-4' }, `${row.getValue('skill_match')}%`),
    sortingFn: (rowA, rowB) => {
      const a = parseFloat(rowA.getValue('skill_match')) || 0
      const b = parseFloat(rowB.getValue('skill_match')) || 0
      return a - b
    },
  },

  {
    accessorKey: 'personality_score',
    header: () => h('div', {}, 'Personality Score'),
    cell: ({ row }) => {
      const score = row.getValue('personality_score')
      const colorVariant =
        score === 'High'
          ? 'bg-green-500 text-white'
          : score === 'Medium'
            ? 'bg-orange-500 text-white'
            : 'bg-red-500 text-white'

      return h(Badge, { class: `${colorVariant} px-2 py-1 rounded-md` }, () => score)
    },
  },
  {
    accessorKey: 'overall_score',
    header: ({ column }) =>
      h(
        Button,
        { variant: 'ghost', onClick: () => column.toggleSorting(column.getIsSorted() === 'asc') },
        () => ['Overall Score (%)', h(ArrowUpDown, { class: 'h-4 w-4' })],
      ),
    cell: ({ row }) => h('div', { class: 'ml-4' }, row.getValue('overall_score')),
  },
]

const table = useVueTable({
  data: data.value,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
})

import api from '@/api/index'
onMounted(async () => {
  const result = await api.jobListingAdmin()
  const filteredResults = result.filter(item => item.user_application !== "")
  // console.log(filteredResults)

  // data.value = candidates
  data.value = filteredResults.map(item => ({
    applicant: item.user_application.user.name,
    position: item.name,
    skill_match: item.user_application.match_json.match_analysis.skills_match.score,
    personality_score: 'Medium',
    overall_score: item.user_application.match_json.match_analysis.overall_match_score,
  }))
})

interface Candidate {
  applicant: string
  position: string
  skill_match: number
  personality_score: string
  overall_score: number
}
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100%; // Full viewport height
  background: radial-gradient(circle at top left, #ffedfb, #ffffff, #d4f9ff);
}

.cards-container {
  display: flex;
  justify-content: space-between;

  .card {
    display: flex;
    align-items: center;
    background: white;
    border-radius: 10px;
    padding: 20px;
    border: 2px solid;
    width: 20rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .card-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      margin-right: 15px;

      .card-content h3 {
        font-size: 16px;
        margin: 0;
      }

      .card-content p {
        font-size: 22px;
        font-weight: bold;
        margin: 0;
      }
    }
  }
}

.dashboard-title {
  font-size: 25px;
}

.test {
  border: red solid 1px;
}
</style>
