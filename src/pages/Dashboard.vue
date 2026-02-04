<script setup lang="ts">
import StatsCard from '@/shared/ui/StatsCard.vue'

const loading = false

const stats = [
  { label: 'Total Trades', value: '128' },
  { label: 'Total Volume', value: '$245,320' },
  { label: 'Fees Paid', value: '$1,432' },
  {
    label: 'Net PnL',
    value: '+$4,820',
    change: '+12.4%',
    positive: true,
  },
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
    <StatsCard
      v-for="(stat, i) in stats"
      :key="i"
      v-bind="stat"
      :loading="loading"
    />
  </div>
</template>
