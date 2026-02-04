<script setup lang="ts">
import Sidebar from '@/shared/ui/Sidebar.vue'
</script>

<template>
  <div class="flex h-screen bg-[#0B0F14] text-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <!-- Top bar -->
      <header
        class="flex h-14 items-center justify-between border-b border-gray-800 bg-[#0B0F14] px-6"
      >
        <div class="text-sm text-gray-400">
          OnChain Journal
        </div>

        <div class="flex items-center gap-3">
          <span class="text-sm text-gray-400">
            0xA3F1...9B21
          </span>
          <span
            class="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400"
          >
            Ethereum
          </span>
        </div>
      </header>

      <!-- Page -->
      <main class="flex-1 overflow-y-auto p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>
