<template>
  <section>
    <div class="flex">
      <div class="max-w-xs">
        <label for="wallet" class="block text-sm font-medium text-gray-700"
        >Тикер</label
        >
        <div class="mt-1 relative rounded-md shadow-md">
          <input
              @input="similarTitles"
              v-model="ticker"
              @keydown.enter="add"
              type="text"
              name="wallet"
              id="wallet"
              class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
              placeholder="Например DOGE"
          />
        </div>
        <div class="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap">
            <span
                @click="ticker = title.Symbol; add()"
                v-for="title in simTitlesArr"
                :key="title.Symbol"
                class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
              {{ title.Symbol }}
            </span>
        </div>
        <div
            v-if="errorMessage"
            class="text-sm text-red-600"
        >Такой тикер уже добавлен
        </div>
      </div>
    </div>

    <add-btn @click="add" type="button" class="my-4" :disabled="disabled"/>

  </section>
</template>

<script>
import AddBtn from "@/components/AddBtn";

export default {
  name: "AddTicker",
  components: {
    AddBtn
  },

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    simTitlesArr: Array,
    errorMessage: Boolean,
  },

  emits: {
    "add-ticker": value => typeof value === "string",
  },

  data() {
    return {
      ticker: ''
    }
  },

  methods: {
    add() {
      if (this.ticker.length === 0 ) {
        return
      }
      this.$emit('add-ticker', this.ticker)
      this.ticker = "";
    },
  }
}
</script>