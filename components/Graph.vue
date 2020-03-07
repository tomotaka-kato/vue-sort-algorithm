<template>
  <div class="graph-area">
    <div v-for="value in values" :key="value" class="graph-content">
      <div class="bar" :style="{ height: value * 5 + 'px', width: barWidth }" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Graph extends Vue {
  values: number[] = []

  mounted () {
      this.values = this.range(1, 100)
  }

  get barWidth () {
      return `calc(90vw / ${this.values.length} - 2px)`
  }

  range = (start: number, end: number) =>
      Array.from({ length: end - start + 1 }, (_, k) => k + start);
}
</script>

<style lang="css">
.graph-area {
  width: 90vw;
  overflow-x: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.bar {
  background: red;
  margin: 0 1px;
}
</style>
