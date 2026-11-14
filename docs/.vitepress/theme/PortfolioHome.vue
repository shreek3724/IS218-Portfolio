<script setup lang="ts">
import { withBase } from 'vitepress'
import { profile } from './content'
import ContentCard from './ContentCard.vue'
import PortfolioNav from './PortfolioNav.vue'

</script>

<template>
  <main class="portfolio option-one">
    <PortfolioNav presentation="one" :toggle-href="withBase('/option-two#about-me')" />

    <section id="about-me" class="about" tabindex="-1">
      <header class="identity">
        <p>{{ profile.name }}</p>
        <span>{{ profile.program }}</span>
      </header>
      <h1>About Me</h1>
      <div class="about-cards">
        <ContentCard v-for="item in profile.about" :key="item.title" :title="item.title">
          <p>{{ item.text }}</p>
        </ContentCard>
      </div>
      <a class="cta" :href="withBase('/contact-resume')">Contact &amp; Resume</a>
    </section>
  </main>
</template>
