<script setup lang="ts">
import { } from 'vue'
</script>

<template>
  <div class="w-full">
    <p>Some default layout content shared across all pages</p>
    <main class="container mx-auto p-4 h-full">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
// .container {
  // text-align: center;
// }
</style>
