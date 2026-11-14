<script setup lang="ts">
import { contactLinks } from './content'
import ContentCard from './ContentCard.vue'
</script>

<template>
  <div class="link-grid">
    <ContentCard v-for="[label, url] in contactLinks" :key="label" :title="label"><a class="contact-link" :href="url" :target="url.startsWith('http') ? '_blank' : undefined" rel="noreferrer">{{ url.replace('mailto:', '') }}</a></ContentCard>
  </div>
</template>
