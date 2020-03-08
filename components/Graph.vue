<template>
  <div>
    <button @click="test">
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

  mounted() {
      this.bars = this.shuffle(this.range(1, 100)).map(x => new Bar(x, false))
  }

  get barWidth() {
      return `calc(90vw / ${this.bars.length} - 2px)`
  }

  index: number = 0

  private test() {
      if (this.index >= this.bars.length) return
      this.bars[this.index].isSorted = true
      this.index++
      setTimeout(() => {
          this.test()
      }, 100)
  }

  range = (start: number, end: number) =>
      Array.from({ length: end - start + 1 }, (_, k) => k + start);

  bubbleSort() {
      const tmpArray = this.bars.concat()
      // 調べる範囲の開始位置を１つずつ後ろへ移動するfor文
      for (let i = 0; i < tmpArray.length; i++) {
          // 後ろから前に向かって小さい値を浮かび上がらせるfor文
          let j
          for (j = tmpArray.length - 1; j > i; j--) {
              // 隣りあう２つの値を比べて、後ろが小さければ交換する
              if (tmpArray[j].value < tmpArray[j - 1].value) {
                  const tmp = tmpArray[j]
                  tmpArray[j] = tmpArray[j - 1]
                  tmpArray[j - 1] = tmp
                  this.updateGraph(tmpArray)
                  this.sleep(1)
              }
          }
          this.bars[j].isSorted = true
      }
  }

  private sleep(waitMillisec: number) {
      const startMsec = new Date()
      // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
      let spend = 0
      while (spend < waitMillisec) {
          spend = new Date().getTime() - startMsec.getTime()
      }
  }

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

  private updateGraph(array: Bar[]) {
      this.bars = array
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
  padding: 10px 10px 0 10px;
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
