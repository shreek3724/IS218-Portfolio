<script setup lang="ts">
import { ref } from 'vue'
import { projects } from './content'
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
        <h2>{{ projects.individual.title }}</h2>
        <p class="subtitle">{{ projects.individual.subtitle }}</p>
        <div class="card-grid">
          <ContentCard v-for="card in projects.individual.cards" :key="card.title" :title="card.title">
            <p v-if="card.text">{{ card.text }}</p>
            <ul v-else><li v-for="item in card.bullets" :key="item">{{ item }}</li></ul>
          </ContentCard>
        </div>
        <section class="evidence-panel" aria-labelledby="individual-evidence">
          <h3 id="individual-evidence">Check it Out</h3>
          <dl class="evidence-list"><template v-for="[label, value] in projects.individual.links" :key="label"><dt>{{ label }}</dt><dd>{{ value }}</dd></template></dl>
          <h3>Honest Status</h3>
          <p>{{ projects.individual.status }}</p>
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
