<script setup lang="ts">
withDefaults(defineProps<{ title: string; showTitle?: boolean }>(), { showTitle: true })
</script>

<template>
  <article class="card">
    <h2 v-if="showTitle">{{ title }}</h2>
    <slot />
  </article>
</template>
