<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { profile } from './content'

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
    <nav class="nav" aria-label="Portfolio navigation">
      <a class="brand" href="#about-me">PortfolioHome</a>
      <div class="nav-links">
        <a href="#about-me">About Me</a>
        <button type="button" @click="toggleStyle" :aria-pressed="isOptionTwo">
          Toggle Styles
        </button>
      </div>
    </nav>

    <section id="about-me" class="about" tabindex="-1">
      <header class="identity">
        <p>{{ profile.name }}</p>
        <span>{{ profile.program }}</span>
      </header>
      <h1>About Me</h1>
      <div class="about-cards">
        <article v-for="item in profile.about" :key="item.title" class="card">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </article>
      </div>
      <a class="cta" href="mailto:sk3724@njit.edu">Contact &amp; Resume</a>
    </section>
  </main>
</template>
