<template>
  <div>
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
//@ = src
import { tokyoNumber } from "@/tokyoNumber.js"

export default {
  mixins: [tokyoNumber],
  data() {
    return {
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created() {
    console.log('created in component')
  }
}
</script>
