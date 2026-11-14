<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <article class="card">
    <h2>{{ title }}</h2>
    <slot />
  </article>
</template>
