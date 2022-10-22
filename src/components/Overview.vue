<script setup>
import UpIcon from '../assets/up.svg'
import DownIcon from '../assets/down.svg'
import FacebookIcon from '../assets/facebook.svg'
import TwitterIcon from '../assets/twitter.svg'
import InstagramIcon from '../assets/instagram.svg'
import YoutubeIcon from '../assets/youtube.svg'

const stats = [
  {social: "facebook", name: "Page Views", counter: 87, today: "3%", status: "up"},
  {social: "facebook", name: "Likes", counter: 52, today: "2%", status: "down"},
  {social: "instagram", name: "Likes", counter: 5462, today: 2257, status: "up"},
  {social: "instagram", name: "Profile Views", counter: 52000, today: 1375, status: "up"},
  {social: "twitter", name: "Retweets", counter: 117, today: "303%", status: "up"},
  {social: "twitter", name: "Likes", counter: 507, today: "553%", status: "up"},
  {social: "youtube", name: "Likes", counter: 107, today: "19%", status: "down"},
  {social: "youtube", name: "Total Views", counter: 1407, today: "12%", status: "down"},
]
const kFormatter = (num) => {
  return Math.abs(num) > 9999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
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
      <h2 class="text-3xl font-bold dark:text-white">Overview - Today</h2>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
        <div
          v-for="(state, i) in stats"
          :key="i"
          class="flex flex-col gap-8 justify-center items-center p-6 mt-1 rounded-lg h-full bg-light-blue-card dark:bg-dark-blue-card"

        >
          <div class="w-full flex items-center justify-between gap-2">
            <h2 class="font-bold text-light-blue-text dark:text-dark-blue-text">
              {{state.name}}
            </h2>
            <img :src="imgSrc(state.social)" :alt="state.social + ' ' + state.name" />
          </div>
          <div class="w-full flex justify-between text-center">
            <h3 class="text-3xl text-black dark:text-white font-bold">
              {{ kFormatter(state.counter) }}
            </h3>
            <div class="flex items-center gap-2">
              <img :src="state.status === 'up' ? UpIcon : DownIcon" :alt="state.status" />
              <span
                :class="state.status === 'up' ? 'text-limeGreen' : 'text-brightRed'"
                class="font-bold"
              >
                {{ state.today }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>