<script setup lang="ts">
import { resume } from './content'
</script>

<template>
  <div class="resume-panel">
    <a class="resume-download" href="./Shreejitha-Kanduri-Resume.pdf" target="_blank" rel="noreferrer">Download résumé (PDF)</a>
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
</template>
