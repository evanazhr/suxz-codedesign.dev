<template>
  <button
    :class="variant === 'sm' ? 'px-4 py-2 text-xs' : 'px-8 py-2.5 text-sm'"
    class="bg-[#F7F7FD] hover:bg-[#e2dbdb] active:bg-[#e2dbdb] hover:text-white active:text-white font-semibold cursor-pointer transition-all duration-300 rounded-lg text-[#A2B3BF]"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'default',
  },
  variant: {
    type: String,
  },
})
</script>
