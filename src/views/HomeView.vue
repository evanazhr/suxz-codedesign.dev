<!-- src/views/HomeView.vue -->
<template>
  <!-- hero section -->
  <section class="w-full">
    <div
      class="grid grid-cols-1 place-items-center pt-12 gap-20 px-4 lg:px-8 md:grid-cols-2 container mx-auto"
    >
      <div class="md:order-2" data-aos="fade-left">
        <img src="../assets/img/hero_img.png" alt="hero image" />
      </div>
      <div class="gap-8 flex flex-col mb-12" data-aos="fade-up">
        <div>
          <p class="text-md font-bold text-[#A2B3BF]">S U X Z M A K E I T E A S Y</p>
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold">Find Your Way Of Success</h1>
        </div>
        <p class="text-2xl">
          We help you to increase self-confidence and train yourself in a direction, and make you
          more creative in developing a work
        </p>
        <div class="flex gap-4">
          <ButtonPrimary text="Get Started" />
          <ButtonSecondary text="Our Services" />
        </div>
      </div>
    </div>
  </section>

  <!-- learnings section -->
  <section class="bg-[#F8F8FF] py-20 w-full" id="learnings">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-col gap-4 md:max-w-1/2" data-aos="fade-up">
        <p class="uppercase text-[#8C82FC] text-lg font-bold">Learnings</p>
        <h2 class="text-[#22293E] text-3xl md:text-4xl xl:text-5xl font-bold">
          Online Learning Platform International Curriculum
        </h2>
        <p class="text-lg">
          Study and understand the material class is more relaxed without time limit.
        </p>
      </div>
      <div class="grid my-8 grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
        <LearningCard
          data-aos="fade-up"
          data-aos-delay="300"
          :img="LearningImg1"
          title="Starter"
          description="Free class access for that
  start learning code and
  design"
        />
        <LearningCard
          data-aos="fade-up"
          data-aos-delay="400"
          :img="LearningImg2"
          title="Premium"
          description="Advanced material from
the Starter &
learn to
build projects"
        />
        <LearningCard
          data-aos="fade-up"
          data-aos-delay="500"
          :img="LearningImg3"
          title="Superstar"
          variant="higlight"
          description="Materials for experts
who have completed the
premium package"
        />
        <LearningCard
          data-aos="fade-up"
          data-aos-delay="600"
          :img="LearningImg4"
          title="Bootcamp"
          description="Informatics science
training program with
the latest material"
        />
      </div>
    </div>
  </section>

  <!-- About Section  -->
  <section class="w-full py-20" id="about">
    <div class="container mx-auto gap-8 md:gap-20 px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2">
      <div data-aos="fade-right" data-aos-delay="300">
        <img :src="AboutImg" alt="" />
      </div>
      <div class="gap-4 flex flex-col" data-aos="fade-left" data-aos-delay="400">
        <p class="uppercase text-[#8C82FC] text-lg font-bold">About Us</p>
        <h2 class="text-[#22293E] text-3xl md:text-4xl xl:text-5xl font-bold">
          We Help Improve Your Work Experience
        </h2>
        <p class="text-lg">
          We help you to increase self-confidence and train yourself in a direction.
        </p>
        <ul class="w-full flex flex-col gap-4">
          <Checklist>Study and produce creation to get a job </Checklist>
          <Checklist>Up to date material and created by expert creators</Checklist>
          <Checklist>Complete classes and projects and get a certificate from us</Checklist>
        </ul>
      </div>
    </div>
  </section>

  <!-- Companies -->
  <section class="w-full bg-[#F8F8FF] py-20" data-aos="fade-up" id="companies">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-[#22293E] text-3xl text-center md:text-4xl xl:text-5xl font-bold">
          Companies That Recruit Our Graduates
        </h2>
        <p class="text-lg text-center">
          Our graduates have worked in more than 400 companies around the World
        </p>
      </div>
      <div class="mt-10">
        <Companies />
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="w-full py-20" id="testimonial">
    <div class="container mx-auto flex flex-col items-center justify-center gap-4 px-4 lg:px-8">
      <div class="flex flex-col gap-4 md:max-w-1/2" data-aos="fade-up">
        <p class="uppercase text-[#8C82FC] text-lg font-bold text-center">Testimonial</p>
        <h2 class="text-[#22293E] text-3xl md:text-4xl text-center xl:text-5xl font-bold">
          Our Alumni Say
        </h2>
        <p class="text-lg text-center">These are the words of people who have taken our class</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <!--  -->

        <TestimonialCard
          data-aos="zoom-in-up"
          data-aos-delay="300"
          :img="testimonialImg1"
          name="Jason Todd"
          title="Entrepreneur"
          text="“The mentor is cool, how
to convey each material
is also detailed and easy
to understand..”"
        />
        <TestimonialCard
          data-aos="zoom-in-up"
          data-aos-delay="400"
          :img="testimonialImg2"
          name="Cassandra K"
          title="Web Developer"
          text="“The mentor is cool, how
to convey each material
is also detailed and easy
to understand..”"
        />
        <TestimonialCard
          data-aos="zoom-in-up"
          data-aos-delay="500"
          :img="testimonialImg3"
          name="Peter Parker"
          title="PHP Enthusiast"
          text="“The mentor is cool, how
to convey each material
is also detailed and easy
to understand..”"
        />
        <TestimonialCard
          data-aos="zoom-in-up"
          data-aos-delay="600"
          :img="testimonialImg4"
          name="Jean Gray"
          title="Designer"
          text='“The mentor is cool, how
to convey each material
is also detailed and easy
to understand.."'
        />
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section
    class="w-full py-20 bg-no-repeat bg-cover bg-center"
    :style="{ backgroundImage: `url(${ctaBg})` }"
  >
    <div
      data-aos="zoom-in-up"
      class="container mx-auto flex flex-col gap-8 items-center justify-center"
    >
      <div class="gap-4 flex flex-col">
        <h2 class="text-white text-center text-3xl md:text-4xl xl:text-5xl font-bold">
          So? What Are You Waiting For
        </h2>
        <p class="text-lg text-white text-center">
          It's time to build your career, study in a relaxed and purposeful manner
        </p>
      </div>
      <div class="flex gap-4">
        <ButtonPrimary text="Get Started" />
        <ButtonTransparent text="Contact Us" class="text-white" />
      </div>
    </div>
  </section>
</template>

<script setup>
import LearningImg1 from '../assets/img/learning-1-img.png'
import LearningImg2 from '../assets/img/learning-2-img.png'
import LearningImg3 from '../assets/img/learning-3-img.png'
import LearningImg4 from '../assets/img/learning-4-img.png'

import testimonialImg1 from '../assets/img/testimonial/1.png'
import testimonialImg2 from '../assets/img/testimonial/2.png'
import testimonialImg3 from '../assets/img/testimonial/3.png'
import testimonialImg4 from '../assets/img/testimonial/4.png'

import ctaBg from '../assets/img/cta_bg.png'
import AboutImg from '../assets/img/about_img.png'

import ButtonPrimary from '../components/ui/ButtonPrimary.vue'
import ButtonSecondary from '../components/ui/ButtonSecondary.vue'
import ButtonTransparent from '../components/ui/ButtonTransparent.vue'
import LearningCard from '../components/ui/LearningCard.vue'
import Checklist from '../components/ui/Checklist.vue'
import Companies from '../components/ui/Companies.vue'
import TestimonialCard from '../components/ui/TestimonialCard.vue'
</script>
