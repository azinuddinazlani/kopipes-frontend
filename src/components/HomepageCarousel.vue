<template>
  <div class="carousel-container">
    <div class="carousel">
      <div
        v-for="(item, index) in companies"
        :key="index"
        class="carousel-item"
        :style="getItemStyle(index)"
        @click="changeSlide(index)"
      >
        <div class="card">
          <div class="card-top"><img :src="item.image" /></div>
          <div class="card-title">
            <h3>{{ item.name }}</h3>
          </div>
          <div class="card-desc">{{ item.description }}</div>

          <div class="card-tags">
            <Badge v-for="(item, index) in item.tags" :key="index" class="company-tags">{{
              item
            }}</Badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Badge from '@/components/ui/badge/Badge.vue'
import googleLogo from '@/img/companyLogo/google.svg'
import microsoftLogo from '@/img/companyLogo/microsoft.svg'
import metaLogo from '@/img/companyLogo/meta.svg'
import appleLogo from '@/img/companyLogo/apple.svg'
import amazonLogo from '@/img/companyLogo/amazon.svg'

const companies = ref([
  {
    image: googleLogo,
    name: 'Google',
    description: 'A global leader in search engines, cloud computing, and AI-driven technologies.',
    tags: ['Search Engine', 'Cloud Computing', 'AI', 'Software Development'],
  },
  {
    image: microsoftLogo,
    name: 'Microsoft',
    description: 'A pioneer in software, cloud services, and enterprise solutions.',
    tags: ['Operating Systems', 'Cloud Computing', 'Enterprise Software', 'AI'],
  },
  {
    image: metaLogo,
    name: 'Meta',
    description:
      'The company behind Facebook, Instagram, and WhatsApp, focusing on social media and the metaverse.',
    tags: ['Social Media', 'Virtual Reality', 'AI', 'Advertising'],
  },
  {
    image: appleLogo,
    name: 'Apple',
    description: 'An innovative tech giant known for its hardware, software, and ecosystem.',
    tags: ['Consumer Electronics', 'Mobile Devices', 'Software', 'AI'],
  },
  {
    image: amazonLogo,
    name: 'Amazon',
    description: 'A global leader in e-commerce, cloud computing, and AI-driven logistics.',
    tags: ['E-commerce', 'Cloud Computing', 'AI', 'Logistics'],
  },
  // {
  //   name: 'Tesla',
  //   description:
  //     'A pioneer in electric vehicles, renewable energy, and autonomous driving technology.',
  //   tags: ['Electric Vehicles', 'Renewable Energy', 'AI', 'Autonomous Driving'],
  // },
  // {
  //   name: 'Nvidia',
  //   description: 'A leading company in graphics processing units (GPUs) and AI computing.',
  //   tags: ['GPUs', 'AI', 'Machine Learning', 'Data Centers'],
  // },
  // {
  //   name: 'Samsung',
  //   description: 'A multinational technology giant specializing in electronics and semiconductors.',
  //   tags: ['Consumer Electronics', 'Semiconductors', 'Mobile Devices', 'AI'],
  // },
  // {
  //   name: 'IBM',
  //   description:
  //     'An enterprise technology leader focusing on AI, cloud computing, and quantum computing.',
  //   tags: ['Enterprise Solutions', 'Cloud Computing', 'AI', 'Quantum Computing'],
  // },
  // {
  //   name: 'Intel',
  //   description: 'A leader in semiconductor and processor manufacturing for computing devices.',
  //   tags: ['Semiconductors', 'Processors', 'AI', 'Edge Computing'],
  // },
])

const activeIndex = ref(2) // Start with the middle item
let interval = null

const getItemStyle = (index) => {
  const totalItems = companies.value.length
  const distance = (index - activeIndex.value + totalItems) % totalItems
  const adjustedDistance = distance > totalItems / 2 ? distance - totalItems : distance
  const baseSpacing = 190 // Adjust this for better spacing

  return {
    transform: `translateX(${adjustedDistance * baseSpacing}px) scale(${adjustedDistance === 0 ? 1.3 : 1})`,
    zIndex: adjustedDistance === 0 ? 3 : 2 - Math.abs(adjustedDistance),
    opacity: adjustedDistance === 0 ? 1 : 0.6,
  }
}

const changeSlide = (index) => {
  activeIndex.value = index
  restartAutoplay()
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % companies.value.length
}

const startAutoplay = () => {
  interval = setInterval(nextSlide, 3000)
}

const stopAutoplay = () => {
  if (interval) clearInterval(interval)
}

const restartAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

onMounted(startAutoplay)
onUnmounted(stopAutoplay)
</script>

<style scoped lang="scss">
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 3rem auto;
  width: 1000px;
  height: 500px;

  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .carousel-item {
      position: absolute;
      transition:
        transform 0.5s ease,
        opacity 0.5s ease;
      cursor: pointer;

      .card {
        width: 400px;
        height: 400px;
        background: rgb(233, 233, 233);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.5s ease;
        border: 4px solid white;

        .card-top {
          margin: 2rem;

          img {
            width: 3rem;
            height: auto;
          }
        }

        .card-title {
          margin: 0 2rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .card-desc {
          margin: 1rem 2rem;
          font-size: 1rem;
        }

        .card-tags {
          margin: 0 2rem;
          gap: 1rem;

          .company-tags {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
