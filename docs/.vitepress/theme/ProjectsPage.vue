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
      <h1>Projects</h1>
      <nav class="project-tabs" aria-label="Project sections">
        <a href="#individual-project">Art Restoration Game</a>
        <a href="#group-project">Customer Project</a>
      </nav>

      <section id="individual-project" class="project-section" tabindex="-1">
        <p class="eyebrow">Individual Project</p>
        <h2>Art Conservation &amp; Restoration Experience</h2>
        <p class="subtitle">Individual Project Case Study with AI/ Starter Assistance</p>
        <div class="card-grid">
          <ContentCard title="What It Is"><p class="placeholder">Content will be added in Step 3.</p></ContentCard>
          <ContentCard title="Built So Far"><p class="placeholder">Content will be added in Step 3.</p></ContentCard>
          <ContentCard title="Learning"><p class="placeholder">Content will be added in Step 3.</p></ContentCard>
        </div>
        <section class="evidence-panel" aria-labelledby="individual-evidence">
          <h3 id="individual-evidence">Check it Out</h3>
          <p class="placeholder">Project links will be added in Step 3.</p>
          <h3>Honest Status</h3>
          <p class="placeholder">Status details will be added in Step 3.</p>
        </section>
      </section>

      <section id="group-project" class="project-section" tabindex="-1">
        <p class="eyebrow">Customer Project</p>
        <h2>To Be Decided</h2>
        <p class="subtitle">Group Project Case Study with AI/ Starter Assistance</p>
        <div class="card-grid">
          <ContentCard title="Summary"><p class="placeholder">Content will be added in Step 3.</p></ContentCard>
          <ContentCard title="My Responsibilities"><p class="placeholder">Content will be added in Step 3.</p></ContentCard>
          <ContentCard title="Teammate Responsibilities"><p class="placeholder">Content will be added in Step 3.</p></ContentCard>
        </div>
        <section class="evidence-panel" aria-labelledby="group-evidence">
          <h3 id="group-evidence">Check it Out</h3>
          <p class="placeholder">Project links will be added in Step 3.</p>
          <h3>Honest Status</h3>
          <p class="placeholder">Status details will be added in Step 3.</p>
        </section>
      </section>
    </div>
  </main>
</template>
