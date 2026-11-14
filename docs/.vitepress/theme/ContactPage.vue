<script setup lang="ts">
import { withBase } from 'vitepress'
import ContactLinks from './ContactLinks.vue'
import PortfolioNav from './PortfolioNav.vue'
import ResumeContent from './ResumeContent.vue'

</script>

<template>
  <main class="portfolio option-one">
    <PortfolioNav presentation="one" :toggle-href="withBase('/option-two#contact-resume')" />
    <div class="page-shell">
      <section class="contact-section" aria-labelledby="resume">
        <h1 id="resume">Resume</h1>
        <ResumeContent />
      </section>
      <section class="contact-section" aria-labelledby="contact-links">
        <h1 id="contact-links">Contact &amp; Links</h1>
        <ContactLinks />
      </section>
    </div>
  </main>
</template>
