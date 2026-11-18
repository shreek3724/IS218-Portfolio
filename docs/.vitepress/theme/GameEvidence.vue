<script setup lang="ts">
import { withBase } from 'vitepress'
import { projects } from './content'

const { links, status } = projects.individual
</script>

<template>
  <h3 id="individual-evidence">Check it Out</h3>
  <dl class="evidence-list">
    <template v-for="[label, urls] in links" :key="label">
      <dt>{{ label }}</dt>
      <dd>
        <template v-for="(url, index) in urls" :key="url">
          <span v-if="index > 0"> &amp; </span><a :href="url">{{ url }}</a>
        </template>
      </dd>
    </template>
  </dl>
  <h3>Honest Status</h3>
  <p>{{ status }}</p>
  <h3>Game Preview</h3>
  <img
    class="game-preview"
    :src="withBase('/game-preview.png')"
    alt="Golden Valley mid-gameplay with one canvas cell cleared and the solvent mixture ready"
    width="2002"
    height="1476"
    loading="lazy"
  />
</template>

<style scoped>
.game-preview {
  width: 50%;
  height: auto;
}
</style>
