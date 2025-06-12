<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'default',
  },
  variant: {
    type: String,
  },
})

const { text, variant } = props
</script>

<template>
  <button
    :class="variant === 'sm' ? 'px-4 py-2 text-xs' : 'px-8 py-2.5 text-sm'"
    class="bg-transparent font-semibold transition-all duration-300 rounded-lg hover:border-[#8C82FC] active:border-[#8C82FC] border border-transparent cursor-pointer"
  >
    {{ text }}
  </button>
</template>
