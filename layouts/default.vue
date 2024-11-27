<script setup lang="ts">
import { } from 'vue'
</script>

<template>
  <div>
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  text-align: center;
}
</style>
