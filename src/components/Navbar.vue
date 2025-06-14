<script setup>
import ButtonPrimary from './ButtonPrimary.vue'
import ButtonTransparent from './ButtonTransparent.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const navOpen = ref(true)
const navBar = ref(null)
const hamburgerBtn = ref(null)

function toggleNavbar() {
  navOpen.value = !navOpen.value
}

function handleClickOutside(e) {
  if (!navBar.value?.contains(e.target) && !hamburgerBtn.value?.contains(e.target)) {
    navOpen.value = true
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const navItems = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Learnings',
    link: '#learnings',
  },
  {
    title: 'About Us',
    link: '#about',
  },
  {
    title: 'Testimonials',
    link: '#testimonial',
  },
]
</script>

<template>
  <header
    data-aos="fade-down"
    class="z-1 sticky top-0 md:mt-10 left-0 w-full flex flex-none items-center bg-white/30 backdrop-blur-2xl dark:bg-[#394360]"
  >
    <div class="container mx-auto px-4 lg:px-8 flex flex-col">
      <div
        :class="navOpen ? '' : 'border-b border-[#8C82FC] md:border-0'"
        class="py-4 flex justify-between items-center"
      >
        <div class="size-6 flex flex-row grow gap-8 cursor-pointer">
          <router-link
            to="/"
            class="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center flex-row gap-2"
          >
            <img src="/assets/logo.svg" class="size-8" alt="logo" />
            <h1 class="text-2xl">Suxz</h1>
          </router-link>
          <!-- nav tablet/pc -->
          <nav class="hidden md:flex">
            <ul class="flex gap-4 text-sm flex-row justify-evenly items-center">
              <li v-for="(item, index) in navItems" :key="index">
                <a
                  class="dark:hover:text-gray-300 hover:text-[#8C82FC] before:absolute relative before:-bottom-1 before:content-[''] before:h-0.5 transition-all before:duration-300 before:w-0 hover:before:w-full before:bg-[#8C82FC] dark:text-white"
                  :href="item.link"
                  >{{ item.title }}</a
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex justify-center items-center gap-2">
          <div class="flex-row gap-2 hidden md:flex">
            <ButtonTransparent
              variant="sm"
              class="font-semibold cursor-pointer text-[#8C82FC] px-4 py-1"
              text="Log In"
            />

            <ButtonPrimary text="Sign Up" variant="sm" />
          </div>

          <button
            @click="toggleNavbar()"
            ref="hamburgerBtn"
            class="cursor-pointer transition-colors duration-300 md:hidden"
          >
            <svg
              width="30"
              height="18"
              viewBox="0 0 30 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30 16.7143C30 16.3733 29.8683 16.0463 29.6339 15.8051C29.3995 15.564 29.0815 15.4286 28.75 15.4286H21.25C20.9185 15.4286 20.6005 15.564 20.3661 15.8051C20.1317 16.0463 20 16.3733 20 16.7143C20 17.0553 20.1317 17.3823 20.3661 17.6234C20.6005 17.8645 20.9185 18 21.25 18H28.75C29.0815 18 29.3995 17.8645 29.6339 17.6234C29.8683 17.3823 30 17.0553 30 16.7143ZM30 9C30 8.65901 29.8683 8.33198 29.6339 8.09086C29.3995 7.84974 29.0815 7.71429 28.75 7.71429H11.25C10.9185 7.71429 10.6005 7.84974 10.3661 8.09086C10.1317 8.33198 10 8.65901 10 9C10 9.34099 10.1317 9.66802 10.3661 9.90914C10.6005 10.1503 10.9185 10.2857 11.25 10.2857H28.75C29.0815 10.2857 29.3995 10.1503 29.6339 9.90914C29.8683 9.66802 30 9.34099 30 9ZM30 1.28571C30 0.944722 29.8683 0.617695 29.6339 0.376577C29.3995 0.135459 29.0815 0 28.75 0H1.25C0.918479 0 0.600537 0.135459 0.366117 0.376577C0.131696 0.617695 0 0.944722 0 1.28571C0 1.62671 0.131696 1.95373 0.366117 2.19485C0.600537 2.43597 0.918479 2.57143 1.25 2.57143H28.75C29.0815 2.57143 29.3995 2.43597 29.6339 2.19485C29.8683 1.95373 30 1.62671 30 1.28571Z"
                fill="#8C82FC"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- nav mobile -->
      <nav
        ref="navBar"
        :class="!navOpen ? 'h-full' : 'hidden'"
        class="gap-8 flex text-sm md:hidden duration-300 transition-all overflow-hidden flex-col py-4 justify-evenly items-center"
      >
        <ul :class="!navOpen ? 'flex' : 'hidden'" class="w-full flex flex-col gap-4">
          <li v-for="(item, index) in navItems" :key="index">
            <a
              class="hover:text-[#8C82FC] active:text-[#8C82FC] before:absolute relative before:-bottom-1 before:content-[''] before:h-0.5 transition-all before:duration-300 before:w-0 hover:before:w-full active:before:w-full before:bg-[#8C82FC] dark:text-white"
              :href="item.link"
              >{{ item.title }}</a
            >
          </li>
        </ul>
        <div class="flex-row gap-2 flex w-full">
          <ButtonTransparent
            variant="sm"
            class="font-semibold cursor-pointer text-[#8C82FC] px-4 py-1"
            text="Log In"
          />

          <ButtonPrimary text="Sign Up" variant="sm" />
        </div>
      </nav>
    </div>
  </header>
</template>
