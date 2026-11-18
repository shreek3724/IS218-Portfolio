<script setup lang="ts">
import { withBase } from 'vitepress'
import { projects } from './content'
import ContentCard from './ContentCard.vue'
import GameEvidence from './GameEvidence.vue'
import PortfolioNav from './PortfolioNav.vue'

</script>

<template>
  <main class="portfolio option-one">
    <PortfolioNav presentation="one" :toggle-href="withBase('/option-two#projects')" />
    <div class="page-shell">
      <h1>Projects</h1>
      <nav class="project-tabs" aria-label="Project sections">
        <a href="#individual-project">Art Restoration Game</a>
        <a href="#group-project">Customer Project</a>
      </nav>

      <section id="individual-project" class="project-section" tabindex="-1">
        <p class="eyebrow">Individual Project</p>
        <h2>{{ projects.individual.title }}</h2>
        <p class="subtitle">{{ projects.individual.subtitle }}</p>
        <div class="card-grid">
          <ContentCard v-for="card in projects.individual.cards" :key="card.title" :title="card.title">
            <p v-if="card.text">{{ card.text }}</p>
            <ul v-else><li v-for="item in card.bullets" :key="item">{{ item }}</li></ul>
          </ContentCard>
        </div>
        <section class="evidence-panel" aria-labelledby="individual-evidence">
          <GameEvidence />
        </section>
      </section>

      <section id="group-project" class="project-section" tabindex="-1">
        <p class="eyebrow">Customer Project</p>
        <h2>{{ projects.group.title }}</h2>
        <p class="subtitle">{{ projects.group.subtitle }}</p>
        <div class="card-grid">
          <ContentCard v-for="card in projects.group.cards" :key="card.title" :title="card.title"><p>{{ card.text }}</p></ContentCard>
        </div>
        <section class="evidence-panel" aria-labelledby="group-evidence">
          <h3 id="group-evidence">Check it Out</h3>
          <dl class="evidence-list"><template v-for="[label, value] in projects.group.links" :key="label"><dt>{{ label }}</dt><dd>{{ value }}</dd></template></dl>
          <h3>Honest Status</h3>
          <p>{{ projects.group.status }}</p>
        </section>
      </section>
    </div>
  </main>
</template>
