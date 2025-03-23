<script setup>
import { Search } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import HomepageCarousel from '@/components/HomepageCarousel.vue'
import { NotepadText, FileUp, CircleUserRound } from 'lucide-vue-next'
import Typewriter from 'typewriter-effect/dist/core'
import { onMounted, ref } from 'vue'

// Reference for the target HTML element
const typewriterElement = ref(null)

onMounted(() => {
  new Typewriter(typewriterElement.value, {
    loop: true,
    delay: 75, // Typing speed
    deleteSpeed: 50, // Deleting speed
  })
    .typeString('Recruitment')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Hiring')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Skill Assessment')
    .pauseFor(1000)
    .deleteAll()
    .start()
})
</script>

<template>
  <div class="wrapper">
    <div class="landing-view-wrapper">
      <div class="landing-view flex gird-cols-3">
        <div class="landing-graphics">
          <img src="@/img/homepage-left.svg" />
        </div>

        <div class="landing-text">
          <div class="text-prefix">The Future Of</div>
          <div class="text-suffix">
            <div ref="typewriterElement"></div>
            <div class="search-icon">
              <Search />
            </div>
          </div>
        </div>

        <div class="landing-graphics">
          <img src="@/img/homepage-right.svg" />
        </div>
      </div>
    </div>

    <div class="stats-wrapper flex grid-cols-3 justify-evenly">
      <div class="stats">
        <div class="stats-percent">91%</div>
        <div class="stats-title">Skills Aligned</div>
        <div class="stats-text">Many job seekers match their skills to the right jobs.</div>
      </div>
      <div class="stats stats-separator">
        <div class="stats-percent">90%</div>
        <div class="stats-title">Fast and Efficient</div>
        <div class="stats-text">Company data filtering is quick and efficient.</div>
      </div>
      <div class="stats">
        <div class="stats-percent">89%</div>
        <div class="stats-title">Wide Range</div>
        <div class="stats-text">Top employers interacting with many job seekers.</div>
      </div>
    </div>

    <div class="top-company-wrapper">
      <div class="title-wrapper">
        <div class="small-title">Top Company</div>
        <div class="large-title">Best Companies for</div>
        <div class="large-title">Employees 2024</div>
      </div>

      <HomepageCarousel />

      <div class="button-wrapper"><Button class="button">Show More</Button></div>
    </div>

    <div class="result-wrapper">
      <div class="title-wrapper">
        <div class="small-title">Simple Process</div>
        <div class="large-title">Effortless Process,</div>
        <div class="large-title">Optimal Results</div>
      </div>

      <div class="example-wrapper flex grid-cols-2">
        <div class="left-example">
          <img src="@/img/homepage-graphic1.svg" />
          <img src="@/img/homepage-graphic2.svg" />
          <img src="@/img/homepage-graphic3.svg" />
        </div>

        <div class="right-example">
          <div class="example-desc">
            <NotepadText />
            <div class="desc-title">Complete Your Profile</div>
            <p class="desc-text">
              Complete your profile so that recruiters can see information of you
            </p>
          </div>

          <div class="line-space"></div>

          <div class="example-desc">
            <FileUp />
            <div class="desc-title">Directly Portfolio Upload</div>
            <p class="desc-text">You can upload your resume or CV, and recruiters will reviewed</p>
          </div>

          <div class="line-space"></div>

          <div class="example-desc">
            <CircleUserRound />
            <div class="desc-title">Scheduling Interview</div>
            <p class="desc-text">You can schedule your interview with the recruiters</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin: 1rem 3rem;

  .title-wrapper {
    text-align: center;
    .small-title {
    }

    .large-title {
      font-size: xx-large;
    }
  }

  .landing-view-wrapper {
    height: 60vh;

    .landing-view {
      height: 100%;
      border-radius: 20px;
      background: radial-gradient(circle, #ffb5e9 0%, #fee4dc 100%);

      .landing-text {
        width: 80%;
        // height: 100%;
        align-items: center;
        justify-content: center;
        display: flex;

        .text-prefix {
          font-size: 1.5rem;
          font-weight: 700;
          color: #000;
          padding: 1rem 2rem;
          border-radius: 40px;
          background-color: #fff;
        }

        .text-suffix {
          font-size: 1.5rem;
          font-weight: 700;
          width: 40%;
          color: #000;
          padding: 1rem 2rem;
          gap: 1rem;
          border-radius: 40px;
          background-color: #000;
          color: #fff;
          display: flex;
          justify-content: space-between;

          .search-icon {
            background-color: #fff;
            color: #000;
            border-radius: 50%;
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .landing-graphics {
        width: 20%;
        justify-content: end !important;
        display: flex;
        align-items: end !important;
      }
    }
  }

  .stats-wrapper {
    margin: 3rem 0;
    .stats-separator {
      border-left: 1px solid rgb(213, 213, 213);
      border-right: 1px solid rgb(213, 213, 213);
      width: 30% !important;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      .stats-percent {
        font-size: x-large;
        font-weight: bolder;
      }

      .stats-title {
        font-size: large;
      }

      .stats-text {
        text-align: center;
      }
    }
  }

  .top-company-wrapper {
    .button-wrapper {
      display: flex;
      justify-content: center;
      .button {
        border-radius: 30px;
      }
    }
  }

  .result-wrapper {
    margin: 3rem 0;
    .example-wrapper {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      gap: 3rem;
      .left-example {
        img {
          border-radius: 30px;
          margin-bottom: 3rem;
          height: 30rem;
          width: 30rem;
        }
      }

      .right-example {
        display: flex;
        flex-direction: column;
        margin-top: 12rem;
        .line-space {
          border-left: 1px solid rgb(213, 213, 213);
          height: 22rem;
          margin: 1rem;
        }

        .example-desc {
          width: 20rem;
          .lucide {
            width: 3rem;
            height: 3rem;
          }

          .desc-title {
            font-size: x-large;
            font-weight: bolder;
          }

          .desc-text {
            font-size: large;
          }
        }
      }
    }
  }
}

.test {
  border: 1px solid red;
}
</style>
