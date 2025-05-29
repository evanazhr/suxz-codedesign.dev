<template>
  <router-view />
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
  duration: 1000,
  once: true,
  anchorPlacement: 'top-bottom',
})
</script>
