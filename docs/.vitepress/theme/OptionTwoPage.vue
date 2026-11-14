<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { profile, projects } from './content'
import ContentCard from './ContentCard.vue'
import PortfolioNav from './PortfolioNav.vue'

const hash = ref('#about-me')
const routes: Record<string, string> = { '#projects': '/projects', '#contact-resume': '/contact-resume' }
const toggleHref = computed(() => withBase(routes[hash.value] || '/'))
const updateHash = () => { hash.value = window.location.hash || '#about-me' }

onMounted(() => { updateHash(); window.addEventListener('hashchange', updateHash) })
onUnmounted(() => window.removeEventListener('hashchange', updateHash))
</script>

<template>
  <main class="portfolio option-two option-two-page">
    <PortfolioNav presentation="two" :toggle-href="toggleHref" />
    <section id="about-me" class="scroll-section about-two" tabindex="-1">
      <header class="identity"><p>{{ profile.name }}</p><span>{{ profile.program }}</span></header>
      <h1>About Me</h1>
      <div class="stacked-cards">
        <section v-for="item in profile.about" :key="item.title"><h2>{{ item.title }}</h2><ContentCard :title="item.title" :show-title="false"><p class="placeholder">Content will be added in Step 5.</p></ContentCard></section>
      </div>
    </section>

    <section id="projects" class="scroll-section" tabindex="-1">
      <h1>Projects</h1>
      <div class="project-columns">
        <section aria-labelledby="individual-title"><p class="eyebrow">Individual Project</p><h2 id="individual-title">{{ projects.individual.title }}</h2><p class="subtitle">{{ projects.individual.subtitle }}</p><div class="stacked-cards"><ContentCard v-for="card in projects.individual.cards" :key="card.title" :title="card.title"><p class="placeholder">Content will be added in Step 5.</p></ContentCard></div><div class="evidence-panel"><h3>Check it Out</h3><p class="placeholder">Project links will be added in Step 5.</p><h3>Honest Status</h3><p class="placeholder">Status details will be added in Step 5.</p></div></section>
        <section aria-labelledby="group-title"><p class="eyebrow">Customer Project</p><h2 id="group-title">{{ projects.group.title }}</h2><p class="subtitle">{{ projects.group.subtitle }}</p><div class="stacked-cards"><ContentCard v-for="card in projects.group.cards" :key="card.title" :title="card.title"><p class="placeholder">Content will be added in Step 5.</p></ContentCard></div><div class="evidence-panel"><h3>Check it Out</h3><p class="placeholder">Project links will be added in Step 5.</p><h3>Honest Status</h3><p class="placeholder">Status details will be added in Step 5.</p></div></section>
      </div>
    </section>

    <section id="contact-resume" class="scroll-section" tabindex="-1">
      <h1>Contact &amp; Resume</h1>
      <section class="contact-section"><h2>Resume</h2><div class="resume-panel"><p class="placeholder">Résumé content will be added in Step 5.</p></div></section>
      <section class="contact-section"><h2>Contact &amp; Links</h2><div class="link-grid"><ContentCard title="GitHub Profile"><p class="placeholder">Link will be added in Step 5.</p></ContentCard><ContentCard title="LinkedIn"><p class="placeholder">Link will be added in Step 5.</p></ContentCard><ContentCard title="Portfolio Repository"><p class="placeholder">Link will be added in Step 5.</p></ContentCard><ContentCard title="Contact Email"><p class="placeholder">Link will be added in Step 5.</p></ContentCard></div></section>
    </section>
  </main>
</template>
