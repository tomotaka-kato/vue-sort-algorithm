<template>
  <div>
    <button @click="shuffleBars">
      シャッフル
    </button>
    <button @click="startSort">
      ソート
    </button>
    <div class="graph-area">
      <div v-for="bar in bars" :key="bar.value" class="graph-content">
        <div class="bar" :class="{ sorted: bar.isSorted }" :style="{ height: bar.value * 5 + 'px', width: barWidth }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Graph extends Vue {
  bars: Bar[] = []

  timeSpan: number = 10

  mounted() {
      this.bars = this.shuffle(this.range(1, 100)).map(x => new Bar(x, false))
  }

  get barWidth() {
      return `calc(90vw / ${this.bars.length} - 2px)`
  }

  private shuffleBars() {
      this.bars = this.shuffle(this.range(1, 100)).map(x => new Bar(x, false))
  }

  private startSort() {
      const tmp = JSON.parse(JSON.stringify(this.bars))
      const arrays = this.bubbleSortRec(tmp, [tmp], 0, this.bars.length - 1)
      this.updateGraph(arrays, 0)
  }

  private updateGraph(arrays: Bar[][], index: number) {
      if (index >= arrays.length) return
      setTimeout(() => {
          this.bars = arrays[index]
          this.bars.splice(0, 0)
          this.updateGraph(arrays, ++index)
      }, this.timeSpan)
  }

  private bubbleSortRec(array: Bar[], arrays: Bar[][], targetIndex: number, endIndex: number): Bar[][] {
      if (endIndex === 0) {
          array[0].isSorted = true
          arrays.push(JSON.parse(JSON.stringify(array)))
          return arrays
      }

      if (array[targetIndex].value > array[targetIndex + 1].value) {
          const tmp = array[targetIndex]
          array[targetIndex] = array[targetIndex + 1]
          array[targetIndex + 1] = tmp
          arrays.push(JSON.parse(JSON.stringify(array)))
      }

      targetIndex++
      if (targetIndex === endIndex) {
          array[targetIndex].isSorted = true
          arrays.push(JSON.parse(JSON.stringify(array)))
          targetIndex = 0
          endIndex--
      }

      return this.bubbleSortRec(JSON.parse(JSON.stringify(array)), arrays, targetIndex, endIndex)
  }

  private range = (start: number, end: number) =>
      Array.from({ length: end - start + 1 }, (_, k) => k + start);

  private shuffle(array: number[]) {
      const out = Array.from(array)
      for (let i = out.length - 1; i > 0; i--) {
          const r = Math.floor(Math.random() * (i + 1))
          const tmp = out[i]
          out[i] = out[r]
          out[r] = tmp
      }
      return out
  }
}

class Bar {
  value: number
  isSorted: boolean

  constructor(value: number, isSorted: boolean) {
      this.value = value
      this.isSorted = isSorted
  }
}

</script>

<style lang="css">
.graph-area {
  box-sizing: border-box;
  width: 90vw;
  overflow-x: auto;
  border: 1px solid black;
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.bar {
  background: red;
  margin: 0 1px;
}

.sorted {
  background: green;
}
</style>
