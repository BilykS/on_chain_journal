<script setup lang="ts">
import { ref, computed } from 'vue'
import Table from '@/shared/ui/Table.vue'

type Trade = {
  id: string
  date: string
  pair: string
  side: 'buy' | 'sell'
  amount: string
  fee: string
  txHash: string
}

const trades = ref<Trade[]>([
  {
    id: '1',
    date: '2026-01-05 14:32',
    pair: 'ETH / USDC',
    side: 'buy',
    amount: '0.45 ETH',
    fee: '$4.12',
    txHash: '0xabc...123',
  },
  {
    id: '2',
    date: '2026-01-06 09:18',
    pair: 'ETH / USDC',
    side: 'sell',
    amount: '0.30 ETH',
    fee: '$3.45',
    txHash: '0xdef...456',
  },
])

// Filters
const sideFilter = ref<'all' | 'buy' | 'sell'>('all')
const pairFilter = ref('')
const dateFrom = ref('')
const dateTo = ref('')

const filteredTrades = computed(() => {
  return trades.value.filter(trade => {
    if (sideFilter.value !== 'all' && trade.side !== sideFilter.value) return false
    if (pairFilter.value && !trade.pair.includes(pairFilter.value)) return false
    if (dateFrom.value && trade.date < dateFrom.value) return false
    if (dateTo.value && trade.date > dateTo.value) return false
    return true
  })
})

// Columns for Table.vue
const columns = [
  { key: 'date', label: 'Date' },
  { key: 'pair', label: 'Pair' },
  { key: 'side', label: 'Side' },
  { key: 'amount', label: 'Amount' },
  { key: 'fee', label: 'Fee' },
  { key: 'txHash', label: 'Tx' },
]
</script>

<template>
  <div class="space-y-6">
    <!-- Filters (як раніше) -->
    <div class="flex flex-wrap items-end gap-4 rounded-xl border border-gray-800 bg-[#121826] p-4">
      <div class="flex flex-col">
        <label class="text-xs text-gray-400 mb-1">Pair</label>
        <input v-model="pairFilter" placeholder="ETH / USDC" class="w-40 rounded-md border border-gray-700 bg-[#0B0F14] px-3 py-2 text-sm text-gray-200 focus:outline-none"/>
      </div>

      <div class="flex flex-col">
        <label class="text-xs text-gray-400 mb-1">Side</label>
        <select v-model="sideFilter" class="w-32 rounded-md border border-gray-700 bg-[#0B0F14] px-3 py-2 text-sm text-gray-200 focus:outline-none">
          <option value="all">All</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </div>

      <div class="flex flex-col">
        <label class="text-xs text-gray-400 mb-1">From</label>
        <input v-model="dateFrom" type="date" class="rounded-md border border-gray-700 bg-[#0B0F14] px-3 py-2 text-sm text-gray-200 focus:outline-none"/>
      </div>

      <div class="flex flex-col">
        <label class="text-xs text-gray-400 mb-1">To</label>
        <input v-model="dateTo" type="date" class="rounded-md border border-gray-700 bg-[#0B0F14] px-3 py-2 text-sm text-gray-200 focus:outline-none"/>
      </div>
    </div>

    <!-- Table -->
    <Table
      :columns="columns"
      :rows="filteredTrades"
      row-key="id"
      empty-message="No trades found"
    />
  </div>
</template>
