<template>
  <button
    :class="variant === 'sm' ? 'px-4 py-2 text-xs' : 'px-8 py-2.5 text-sm'"
    class="bg-[#8C82FC] hover:bg-[#7c72e6] active:bg-[#7c72e6] transition-all duration-200 font-semibold cursor-pointer rounded-lg text-white"
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
