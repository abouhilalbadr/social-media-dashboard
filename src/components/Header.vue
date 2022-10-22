<script setup>
  import { ref } from 'vue'
  import { useDark, useToggle } from '@vueuse/core';
  import { Switch } from '@headlessui/vue'

  const isDark = useDark();
  const enabled = ref(isDark)
  const toggleDark = useToggle(isDark);

</script>
<template>
  <header class="px-4 py-12">
    <div class="container">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold dark:text-white">Social Media Dashboard</h1>
          <p class="text-light-blue-text dark:text-dark-blue-text">Total Followers: 23,004</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-light-blue-text dark:text-dark-blue-text">Dark mode</span>
          <Switch
            v-model="enabled"
            as="template"
            v-slot="{ checked }"
          >
            <button
              class="relative inline-flex h-6 w-12 items-center rounded-full"
              :class="checked ? 'bg-gradient-to-r from-dark-toggleFrom to-dark-toggleTo' : 'bg-light-toggle'"
              @click="toggleDark()"
            >
              <span class="sr-only">Enable notifications</span>
              <span
                :class="checked ? 'translate-x-6' : 'translate-x-1'"
                class="inline-block h-5 w-5 transform rounded-full bg-light-blue-card dark:bg-black transition"
              />
            </button>
          </Switch>
        </div>
      </div>
    </div>
  </header>
</template>