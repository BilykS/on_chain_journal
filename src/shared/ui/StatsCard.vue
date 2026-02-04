<script setup lang="ts">
defineProps<{
  label?: string
  value?: string
  change?: string
  positive?: boolean
  loading?: boolean
}>()
</script>

<template>
  <div
    class="rounded-xl border border-gray-800 bg-[#121826] p-5"
  >
    <!-- Label -->
    <p class="text-sm text-gray-400">
      <span
        v-if="loading"
        class="block h-4 w-24 animate-pulse rounded bg-gray-700"
      />
      <span v-else>
        {{ label }}
      </span>
    </p>

    <!-- Value + change -->
    <div class="mt-2 flex items-end justify-between">
      <span
        v-if="loading"
        class="block h-7 w-28 animate-pulse rounded bg-gray-700"
      />
      <span
        v-else
        class="text-2xl font-semibold text-gray-100"
      >
        {{ value }}
      </span>

      <span
        v-if="!loading && change"
        class="text-sm font-medium"
        :class="positive ? 'text-green-400' : 'text-red-400'"
      >
        {{ change }}
      </span>

      <span
        v-if="loading"
        class="block h-4 w-12 animate-pulse rounded bg-gray-700"
      />
    </div>
  </div>
</template>
