<template>
  <div
    :class="variant === 'higlight' ? 'bg-[#8C82FC] text-white' : 'bg-white text-[#22293E]'"
    class="flex flex-col gap-8 p-8 rounded-xl"
  >
    <div>
      <img :src="props.img" class="size-20" alt="feature-img" />
    </div>

    <div class="flex flex-col gap-4">
      <h3 class="text-xl font-bold">{{ props.title }}</h3>
      <p class="text-md">{{ props.description }}</p>
      <button
        class="bg-[#44E4C9] text-white hover:bg-[#95b3ae] active:bg-[#95b3ae] px-4 py-2 text-sm w-full cursor-pointer font-bold rounded-lg"
      >
        See Class
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'default title',
    required: true,
  },
  description: {
    type: String,
    default: 'default description',
    required: true,
  },
  variant: {
    type: String,
  },
})
</script>
