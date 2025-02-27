<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  SortingState,
  useVueTable,
} from '@tanstack/vue-table'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { ArrowUpDown } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'

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
    header: () => h('div', {}, 'Skill Match (%)'),
    cell: ({ row }) => row.getValue('skill_match') + '%',
  },
  {
    accessorKey: 'personality_score',
    header: () => h('div', {}, 'Personality Score'),
    cell: ({ row }) => row.getValue('personality_score'),
  },
  {
    accessorKey: 'overall_score',
    header: () => h('div', {}, 'Overall Score'),
    cell: ({ row }) => row.getValue('overall_score'),
  },
]

const table = useVueTable({
  data: data.value,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
})

onMounted(() => {
  data.value = candidates
})

interface Candidate {
  applicant: string
  position: string
  skill_match: number
  personality_score: string
  overall_score: number
}
</script>

<template>
  <div class="container py-10 mx-auto">
    <h1 class="dashboard-title font-bold mb-4">Admin Dashboard</h1>
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
</template>

<style lang="css">
.dashboard-title {
  font-size: 25px;
}
</style>
