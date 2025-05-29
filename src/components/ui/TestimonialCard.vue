<template>
  <div class="pt-16">
    <div class="relative border pt-16 border-[#8C82FC] text-center pb-10 px-4 rounded-lg">
      <img :src="props.img" :alt="props.name" class="absolute left-1/2 -translate-x-1/2 -top-1/6" />
      <div>
        <h3 class="text-md font-bold text-[#22293E]">{{ props.name }}</h3>
        <p class="text-sm text-[#BAB8D2]">{{ props.title }}</p>
      </div>
      <p class="text-sm mt-4">
        {{ props.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  img: {
    type: String,
  },
  name: {
    type: String,
    default: 'default',
  },
  title: {
    type: String,
    default: 'title',
  },
  text: {
    type: String,
    default: 'Default Text',
  },
})
</script>
