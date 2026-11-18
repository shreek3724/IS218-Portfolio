<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { profile, projects } from './content'
import ContactLinks from './ContactLinks.vue'
import ContentCard from './ContentCard.vue'
import GameEvidence from './GameEvidence.vue'
import PortfolioNav from './PortfolioNav.vue'
import ResumeContent from './ResumeContent.vue'

const hash = ref('#about-me')
const routes: Record<string, string> = { '#projects': '/projects', '#contact-resume': '/contact-resume', '#contact-links': '/contact-resume#contact-links' }
const toggleHref = computed(() => withBase(routes[hash.value] || '/'))
const updateHash = () => { hash.value = window.location.hash || '#about-me' }

onMounted(() => { updateHash(); window.addEventListener('hashchange', updateHash) })
onUnmounted(() => window.removeEventListener('hashchange', updateHash))
</script>

<template>
  <main class="portfolio option-two option-two-page">
    <PortfolioNav presentation="two" :toggle-href="toggleHref" />
    <div class="option-two-layout">
      <aside class="section-nav" aria-label="Option 2 section navigation"><a href="#about-me">About Me</a><a href="#projects">Projects</a><a href="#contact-resume">Contact &amp; Resume</a><a href="#contact-links">Contact &amp; Links</a></aside>
      <div class="option-two-content">
    <section id="about-me" class="scroll-section about-two" tabindex="-1">
      <header class="identity"><p>{{ profile.name }}</p><span>{{ profile.program }}</span></header>
      <h1>About Me</h1>
      <div class="stacked-cards">
        <section v-for="item in profile.about" :key="item.title"><h2>{{ item.title }}</h2><ContentCard :title="item.title" :show-title="false"><p>{{ item.text }}</p></ContentCard></section>
      </div>
    </section>

    <section id="projects" class="scroll-section" tabindex="-1">
      <h1>Projects</h1>
      <div class="project-columns">
        <section aria-labelledby="individual-title"><p class="eyebrow">Individual Project</p><h2 id="individual-title">{{ projects.individual.title }}</h2><p class="subtitle">{{ projects.individual.subtitle }}</p><div class="stacked-cards"><ContentCard v-for="card in projects.individual.cards" :key="card.title" :title="card.title"><p v-if="card.text">{{ card.text }}</p><ul v-else><li v-for="item in card.bullets" :key="item">{{ item }}</li></ul></ContentCard></div><div class="evidence-panel"><GameEvidence /></div></section>
        <section aria-labelledby="group-title"><p class="eyebrow">Customer Project</p><h2 id="group-title">{{ projects.group.title }}</h2><p class="subtitle">{{ projects.group.subtitle }}</p><div class="stacked-cards"><ContentCard v-for="card in projects.group.cards" :key="card.title" :title="card.title"><p>{{ card.text }}</p></ContentCard></div><div class="evidence-panel">
            <h3>Check it Out</h3>
            <dl class="evidence-list">
              <template v-for="{ label, url, text } in projects.group.links" :key="label">
                <dt>{{ label }}</dt>
                <dd>
                  <a v-if="url" :href="url">{{ url }}</a>
                  <template v-else>{{ text }}</template>
                </dd>
              </template>
            </dl>
            <h3>Honest Status</h3>
            <p>{{ projects.group.status }}</p>
          </div>
        </section>
      </div>
    </section>

    <section id="contact-resume" class="scroll-section" tabindex="-1">
      <h1>Contact &amp; Resume</h1>
      <section class="contact-section"><h2>Resume</h2><ResumeContent /></section>
      <section id="contact-links" class="contact-section" tabindex="-1"><h2>Contact &amp; Links</h2><ContactLinks /></section>
    </section>
      </div>
    </div>
  </main>
</template>
