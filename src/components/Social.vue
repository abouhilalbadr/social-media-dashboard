<script setup>
import UpIcon from '../assets/up.svg'
import DownIcon from '../assets/down.svg'

import FacebookIcon from '../assets/facebook.svg'
import TwitterIcon from '../assets/twitter.svg'
import InstagramIcon from '../assets/instagram.svg'
import YoutubeIcon from '../assets/youtube.svg'

const stats = [
  {social: "facebook", name: "@nathant", counter: 1987, today: 12, status: "up" },
  {social: "twitter", name: "@nathant", counter: 1044, today: 99, status: "up" },
  {social: "instagram", name: "@realnathanf", counter: 11000, today: 1099, status: "up" },
  {social: "youtube", name: "Nathan F.", counter: 8239, today: 144, status: "down" },
]
const kFormatter = (num) => {
  return Math.abs(num) > 9999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}
const bgClass = (social) => {
  if(social === 'facebook') return 'bg-facebook'
  if(social === 'twitter') return 'bg-twitter'
  if(social === 'youtube') return 'bg-youtube'
  if(social === 'instagram') return 'bg-gradient-to-r from-instagramFrom to-instagramTo'
}
const imgSrc = (social) => {
  if(social === 'facebook') return FacebookIcon
  if(social === 'twitter') return TwitterIcon
  if(social === 'youtube') return YoutubeIcon
  if(social === 'instagram') return InstagramIcon
}

</script>

<template>
  <section class="mb-12">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div
          v-for="(state, i) in stats"
          :key="i"
          class="rounded-lg"
          :class="bgClass(state.social)"
        >
        <div
          class="flex flex-col gap-6 justify-center items-center px-4 py-8 mt-1 rounded-b-lg h-full bg-light-blue-card dark:bg-dark-blue-card"
        >
          <div class="flex items-center gap-2">
            <img :src="imgSrc(state.social)" :alt="state.name" />
            <h2 class="font-bold text-light-blue-text dark:text-dark-blue-text">
              {{state.name}}
            </h2>
          </div>
          <div class="flex flex-col text-center">
            <h3 class="text-6xl text-black dark:text-white font-bold">
              {{ kFormatter(state.counter) }}
            </h3>
            <span class="uppercase tracking-[6px] text-light-blue-text dark:text-dark-blue-text">Followers</span>
          </div>
          <div class="flex items-center gap-2">
            <img :src="state.status === 'up' ? UpIcon : DownIcon" :alt="state.status" />
            <span
              :class="state.status === 'up' ? 'text-limeGreen' : 'text-brightRed'"
              class="font-bold"
            >
              {{ state.today }} Today
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>