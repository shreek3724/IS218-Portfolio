<script setup lang="ts">
import { withBase } from 'vitepress'
import { contactLinks, resume } from './content'
import ContentCard from './ContentCard.vue'
import PortfolioNav from './PortfolioNav.vue'

</script>

<template>
  <main class="portfolio option-one">
    <PortfolioNav presentation="one" :toggle-href="withBase('/option-two#contact-resume')" />
    <div class="page-shell">
      <section class="contact-section" aria-labelledby="resume">
        <h1 id="resume">Resume</h1>
        <div class="resume-panel">
          <a class="resume-download" :href="withBase('/Shreejitha-Kanduri-Resume.pdf')" target="_blank" rel="noreferrer">Download résumé (PDF)</a>
          <p class="resume-education">{{ resume.education }}</p>
          <h2>Experience</h2>
          <article v-for="item in resume.experience" :key="item.title + item.organization" class="resume-entry"><h3>{{ item.title }} - {{ item.organization }}</h3><p class="resume-date">{{ item.dates }}</p><ul><li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li></ul></article>
          <h2>Certificates</h2>
          <dl class="resume-list"><template v-for="[name, detail] in resume.certificates" :key="name"><dt>{{ name }}</dt><dd>{{ detail }}</dd></template></dl>
          <div class="skills"><section><h2>Technical Skills</h2><ul><li v-for="skill in resume.skills.technical" :key="skill">{{ skill }}</li></ul></section><section><h2>Soft Skills</h2><ul><li v-for="skill in resume.skills.soft" :key="skill">{{ skill }}</li></ul></section></div>
          <h2>Volunteer Experience &amp; Extracurricular Involvement</h2>
          <article v-for="item in resume.volunteer" :key="item.title" class="resume-entry"><h3>{{ item.title }}</h3><p class="resume-date">{{ item.dates }}</p><ul><li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li></ul></article>
          <h2>Awards &amp; Achievements</h2>
          <ul><li v-for="award in resume.awards" :key="award">{{ award }}</li></ul>
        </div>
      </section>
      <section class="contact-section" aria-labelledby="contact-links">
        <h1 id="contact-links">Contact &amp; Links</h1>
        <div class="link-grid">
          <ContentCard v-for="[label, url] in contactLinks" :key="label" :title="label"><a class="contact-link" :href="url" :target="url.startsWith('http') ? '_blank' : undefined" rel="noreferrer">{{ url.replace('mailto:', '') }}</a></ContentCard>
        </div>
      </section>
    </div>
  </main>
</template>
