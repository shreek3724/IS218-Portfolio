<script setup lang="ts">
import { withBase } from 'vitepress'

const props = defineProps<{ presentation: 'one' | 'two'; toggleHref: string }>()
const href = (one: string, two: string) => props.presentation === 'one' ? withBase(one) : two
</script>

<template>
  <nav class="nav" aria-label="Portfolio navigation">
    <a class="brand" :href="href('/', '#about-me')">PortfolioHome</a>
    <div class="nav-links">
      <a :href="href('/', '#about-me')">About Me</a>
      <a :href="href('/projects', '#projects')">Projects</a>
      <a :href="href('/contact-resume', '#contact-resume')">Contact &amp; Resume</a>
      <a class="nav-toggle" :href="toggleHref">Toggle Styles</a>
    </div>
  </nav>
</template>
