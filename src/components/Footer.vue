<script setup>
const companyItems = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Blogs',
    link: '#',
  },
  {
    title: 'Careers',
    link: '#',
  },
  {
    title: 'Portfolios',
    link: '#',
  },
]

const linkItems = [
  {
    title: 'Privacy & Policy',
    link: '#',
  },
  {
    title: 'Github',
    link: '#',
  },
  {
    title: 'Supports',
    link: '#',
  },
  {
    title: 'FAQs',
    link: '#',
  },
]
</script>

<template>
  <footer data-aos="fade-up" data-aos-delay="500" class="py-20 w-full">
    <div
      class="container px-4 lg:px-8 mx-auto text-[#22293E] grid grid-cols-1 md:grid-cols-4 gap-8"
    >
      <div class="flex gap-8 flex-col">
        <router-link
          to="/"
          class="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center justify-start flex-row gap-2"
        >
          <img src="/assets/logo.svg" class="size-8" alt="logo" />
          <h1 class="text-black text-2xl">Suxz</h1>
        </router-link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
          ut labore et dolore.
        </p>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-bold">Company</h3>
        <ul class="flex flex-col gap-4">
          <li v-for="(item, index) in companyItems" :key="index">
            <a href="#">{{ item.title }} </a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-bold">Links</h3>
        <ul class="flex flex-col gap-4">
          <li v-for="(item, index) in linkItems" :key="index">
            <a href="#">{{ item.title }} </a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-bold">Contact</h3>
        <p class="text-[#8C82FC] flex gap-2 items-center">
          <span
            ><svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.25066 1.83754C4.55816 1.53001 4.92754 1.29137 5.33429 1.13747C5.74105 0.983564 6.17588 0.91791 6.60994 0.944861C7.044 0.971813 7.46736 1.09075 7.85195 1.29379C8.23654 1.49683 8.57357 1.77933 8.84066 2.12254L11.9925 6.17629C12.5719 6.91879 12.7763 7.88817 12.5475 8.80129L11.5857 12.6507C11.5356 12.8504 11.5382 13.0597 11.5931 13.2582C11.6479 13.4566 11.7533 13.6375 11.8988 13.7832L16.2188 18.1013C16.3645 18.2468 16.5453 18.3521 16.7438 18.407C16.9423 18.4619 17.1515 18.4644 17.3513 18.4144L21.1988 17.4525C21.6501 17.3398 22.1211 17.3312 22.5762 17.4274C23.0313 17.5235 23.4585 17.7219 23.8257 18.0075L27.8794 21.1594C29.3363 22.2919 29.4713 24.4463 28.1663 25.7494L26.3475 27.5682C25.0482 28.8675 23.1038 29.4394 21.2907 28.8019C16.6527 27.1694 12.4417 24.5138 8.97004 21.0319C5.48749 17.5604 2.83118 13.3495 1.19816 8.71129C0.560659 6.89817 1.13253 4.95379 2.43191 3.65254L4.25066 1.83567V1.83754Z"
                fill="#8C82FC"
              />
            </svg> </span
          >(021) 31048184
        </p>
        <p class="text-[#8C82FC] flex gap-2 items-center">
          <span
            ><svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.09375 6.66563C0.282784 5.83733 0.747479 5.09777 1.41173 4.56808C2.07598 4.03838 2.90041 3.74994 3.75 3.75H26.25C27.0996 3.74994 27.924 4.03838 28.5883 4.56808C29.2525 5.09777 29.7172 5.83733 29.9062 6.66563L15 15.7762L0.09375 6.66563ZM0 8.80688V22.1269L10.8806 15.4556L0 8.80688ZM12.6769 16.5562L0.358125 24.1069C0.662487 24.7487 1.14286 25.2908 1.74334 25.6702C2.34382 26.0496 3.0397 26.2507 3.75 26.25H26.25C26.9602 26.2502 27.6558 26.0486 28.2559 25.6689C28.8561 25.2892 29.336 24.7468 29.64 24.105L17.3212 16.5544L15 17.9738L12.6769 16.5544V16.5562ZM19.1194 15.4575L30 22.1269V8.80688L19.1194 15.4556V15.4575Z"
                fill="#8C82FC"
              />
            </svg> </span
          >irham@suxz.com
        </p>
        <p>Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta Selatan. 12240.</p>
      </div>
    </div>
  </footer>
</template>
