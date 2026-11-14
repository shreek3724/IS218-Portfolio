<script setup lang="ts">
import { ref } from 'vue'
import ContentCard from './ContentCard.vue'
import PortfolioNav from './PortfolioNav.vue'

const style = ref<'option-one' | 'option-two'>('option-one')
const toggleStyle = () => { style.value = style.value === 'option-one' ? 'option-two' : 'option-one' }
</script>

<template>
  <main :class="['portfolio', style]">
    <PortfolioNav :style="style" @toggle="toggleStyle" />
    <div class="page-shell">
      <section class="contact-section" aria-labelledby="resume">
        <h1 id="resume">Resume</h1>
        <div class="resume-panel">
          <p class="placeholder">Résumé content will be added after the résumé is provided.</p>
        </div>
      </section>
      <section class="contact-section" aria-labelledby="contact-links">
        <h1 id="contact-links">Contact &amp; Links</h1>
        <div class="link-grid">
          <ContentCard title="GitHub Profile"><p class="placeholder">Link will be added in Step 3.</p></ContentCard>
          <ContentCard title="LinkedIn"><p class="placeholder">Link will be added in Step 3.</p></ContentCard>
          <ContentCard title="Portfolio Repository"><p class="placeholder">Link will be added in Step 3.</p></ContentCard>
          <ContentCard title="Contact Email"><p class="placeholder">Link will be added in Step 3.</p></ContentCard>
        </div>
      </section>
    </div>
  </main>
</template>
