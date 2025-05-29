<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="text-gray-900 bg-white">
    <Navbar />
    <main class="min-h-screen">
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
