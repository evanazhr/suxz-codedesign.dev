<template>
  <div class="grid grid-cols-4 gap-8 md:gap-16 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
    <img :src="Github" alt="Github.com" />
    <img :src="Microsoft" alt="Microsoft.com" />
    <img :src="Redis" alt="Redis.com" />
    <img :src="Amazon" alt="amazon.com" />
    <img :src="PayPal" alt="PayPal.com" />
    <img :src="Linkedin" alt="Linkedin.com" />
    <img :src="Reddit" alt="Reddit.com" />
    <img :src="Medium" alt="Medium.com" />
  </div>
</template>

<script setup>
import Amazon from '../../assets/img/companies/Amazon.png'
import Linkedin from '../../assets/img/companies/Linkedin.png'
import Reddit from '../../assets/img/companies/Reddit.png'
import Github from '../../assets/img/companies/Github.png'
import PayPal from '../../assets/img/companies/PayPal.png'
import Redis from '../../assets/img/companies/Redis.png'
import Microsoft from '../../assets/img/companies/Microsoft.png'
import Medium from '../../assets/img/companies/Medium.png'
</script>
