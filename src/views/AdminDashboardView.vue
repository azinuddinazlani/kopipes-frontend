<script setup lang="ts">
import { ref } from 'vue'
import { h } from 'vue'
import { ColumnDef, SortingState } from '@tanstack/vue-table'
import { onMounted } from 'vue'
import DataTable from '@/components/ui/data-table/DataTable.vue'

const data = ref<Payment[]>([])
const sorting = ref<SortingState>([])

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ]
}

onMounted(async () => {
  data.value = await getData()
})

interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
]

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: () => h('div', {}, 'ID'),
    cell: ({ row }) => row.getValue('id'),
  },
  {
    accessorKey: 'email',
    header: () => h('div', {}, 'Email'),
    cell: ({ row }) => row.getValue('email'),
  },
  {
    accessorKey: 'status',
    header: () => h('div', {}, 'Status'),
    cell: ({ row }) => row.getValue('status'),
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
]

const cards = ref([
  { title: 'Users', value: '1,250' },
  { title: 'Orders', value: '340' },
  { title: 'Revenue', value: '$12,540' },
  { title: 'Feedbacks', value: '87%' },
])
</script>

<template>
  <div class="container py-10 mx-auto">
    <!-- Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="p-4 bg-white shadow-lg rounded-xl text-center"
      >
        <h2 class="text-xl font-semibold">{{ card.title }}</h2>
        <p class="text-gray-600">{{ card.value }}</p>
      </div>
    </div>

    <!-- Table Section -->
    <DataTable :columns="columns" :data="payments" />
  </div>
</template>
