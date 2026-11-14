<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{ style: 'option-one' | 'option-two' }>()
defineEmits<{ toggle: [] }>()
</script>

<template>
  <nav class="nav" aria-label="Portfolio navigation">
    <a class="brand" :href="withBase('/')">PortfolioHome</a>
    <div class="nav-links">
      <a :href="withBase('/')">About Me</a>
      <a :href="withBase('/projects')">Projects</a>
      <a :href="withBase('/contact-resume')">Contact &amp; Resume</a>
      <button type="button" @click="$emit('toggle')" :aria-pressed="style === 'option-two'">
        Toggle Styles
      </button>
    </div>
  </nav>
</template>
