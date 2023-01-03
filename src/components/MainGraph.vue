<template>
  <section v-if="selectedTicker" class="relative">
    <h3 class="text-lg leading-6 font-medium text-gray-900 my-8">
      {{ selectedTicker.name }} USD
    </h3>
    <div class="flex items-end border-gray-600 border-b border-l h-64" ref="graph">
      <div
          v-for="(bar, idx) of normalizedGraph"
          :key="idx"
          :style="{height: `${bar}%`, width: `${oneGraphWidth}px`}"
          class="bg-purple-800 border"
      ></div>
    </div>
    <close-graph-btn
        @click="this.$emit('closeSelectedTicker')"
        type="button"
    />
  </section>
</template>

<script>
import CloseGraphBtn from "@/components/CloseGraphBtn";


export default {
  components: {CloseGraphBtn},

  props: {
    selectedTicker: {
      type: Object,
      default: new Object(),
    },
    oneGraphWidth: {
      type: Number,
      default: 1,
    },
    graph: Object,
  },

  emits: {
    'closeSelectedTicker': null,
  },

  data() {
    return {

    }
  },

  computed: {
    normalizedGraph() {
      const minValue = Math.min(...this.graph);
      const maxValue = Math.max(...this.graph);
      return this.graph.map(price => 5 + ((price - minValue) * 95) / (maxValue - minValue))
    },
  }
}
</script>