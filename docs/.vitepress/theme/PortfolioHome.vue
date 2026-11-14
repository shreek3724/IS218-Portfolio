<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { withBase } from 'vitepress'
import { profile } from './content'
import ContentCard from './ContentCard.vue'
import PortfolioNav from './PortfolioNav.vue'

const style = ref<'option-one' | 'option-two'>('option-one')
const isOptionTwo = computed(() => style.value === 'option-two')

async function toggleStyle() {
  style.value = isOptionTwo.value ? 'option-one' : 'option-two'
  await nextTick()
  document.querySelector('#about-me')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <main :class="['portfolio', style]">
    <PortfolioNav :style="style" @toggle="toggleStyle" />

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
