<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  {
    name: 'Dashboard',
    to: '/dashboard',
  },
  {
    name: 'Journal',
    to: '/journal',
  },
]
</script>

<template>
  <aside
    class="flex w-64 flex-col border-r border-gray-800 bg-[#0B0F14]"
  >
    <!-- Logo -->
    <div class="flex h-14 items-center px-6 text-lg font-semibold">
      OCJ
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-3 py-4">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="mb-1 flex items-center rounded-md px-3 py-2 text-sm text-gray-400 transition hover:bg-gray-800 hover:text-gray-100"
        :class="{
          'bg-gray-800 text-gray-100': route.path === link.to,
        }"
      >
        {{ link.name }}
      </RouterLink>
    </nav>

    <!-- Footer -->
    <div class="border-t border-gray-800 p-4 text-xs text-gray-500">
      v0.1.0
    </div>
  </aside>
</template>
