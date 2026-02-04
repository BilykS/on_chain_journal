<script setup lang="ts">
import { defineProps } from 'vue'

type Column = {
  key: string
  label: string
  class?: string
}

type Row = Record<string, any>

defineProps<{
  columns: Column[]
  rows: Row[]
  rowKey: string
  loading?: boolean
  emptyMessage?: string
}>()
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-gray-800 bg-[#121826]">
    <table class="min-w-full text-sm">
      <!-- Header -->
      <thead class="border-b border-gray-800 bg-[#0B0F14]">
        <tr class="text-left text-gray-400">
          <th
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-3"
            :class="col.class"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>

      <!-- Body -->
      <tbody>
        <tr
          v-for="row in rows"
          :key="row[rowKey]"
          class="border-b border-gray-800 last:border-0 hover:bg-gray-800/40"
        >
          <td
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-3"
            :class="col.class"
          >
            {{ row[col.key] }}
          </td>
        </tr>

        <!-- Empty state -->
        <tr v-if="rows.length === 0 && !loading">
          <td
            :colspan="columns.length"
            class="px-4 py-10 text-center text-gray-500"
          >
            {{ emptyMessage || 'No data found' }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
