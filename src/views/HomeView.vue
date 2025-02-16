<script setup>
import { Search } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
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
            <div>Job Search</div>
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

      <div>Carousel here</div>

      <div class="button-wrapper"><Button class="button">Show More</Button></div>
    </div>

    <div class="example-wrapper">
      <div class="title-wrapper">
        <div class="small-title">Simple Process</div>
        <div class="large-title">Effortless Process,</div>
        <div class="large-title">Optimal Results</div>
      </div>

      <div class="examples flex grid-cols-2">
        <div class="example-left example-both">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>

        <div class="example-right example-both">
          <div>
            <div>Complete Your Profile</div>
            <p>Complete your profile so that recruiters can see information of you</p>
          </div>
          <div>
            <div>Directly Portfolio Upload</div>
            <p>You can upload your resume or CV, and recruiters will reviewed</p>
          </div>
          <div>
            <div>Scheduling Interview</div>
            <p>You can schedule your interview with the recruiters</p>
          </div>
          <div>
            <div>Selected Candidate</div>
            <p>Selected candidate can entry the company for interview with recruiters</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin: 0 3rem;

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

    // .stats > *:not(:last-child) {
    //   border-right: 2px solid green;
    //   padding-right: 1rem;
    // }
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

  .example-wrapper {
    .examples {
      border: 1px solid red;

      .example-left {
        border: 1px solid blue;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }

      .example-right {
        border: 1px solid green;
      }

      .example-both {
        width: 50%;
      }
    }
  }
}

.test {
  border: 1px solid red;
}
</style>
