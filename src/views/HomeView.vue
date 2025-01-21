<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="wrapper">
    <div class="top-search-wrapper">
      <div class="top-search">
        <div class="search-prefix">The Future Of</div>
        <div class="search">Job Search</div>
      </div>
    </div>

    <div class="mission-wrapper">
      <div>
        <div class="mission-title section-title">Our Mission</div>
        <div class="mission-subtxt">
          We empower you with equal opportunities to build your dream career.
        </div>
        <div class="mission-desc">
          Applying to numerous jobs without a clear strategy won't lead you to your ideal role.
          Using jobright's AI job search copilot will effectively connect you to the best, most
          promising possibilities. Then, we will guide you every step of the way so the offer you
          deserve can come sooner. Welcome to Jobright.
        </div>
      </div>
    </div>

    <div class="solution-wrapper">
      <div class="solution-title section-title">How We're Fixing The Job Space</div>
      <div class="solution-desc">
        In order to fulfill our mission, we are led by these value props.
      </div>
      <div class="solution-card-wrapper grid grid-cols-2">
        <div class="solution-card">
          <div class="solution-card-img"><img src="@/img/card-personalization.svg" /></div>
          <div class="solution-card-title">Meaningful personalization</div>
          <div class="solution-card-desc">
            We will prioritize what matter most to you based on your background and preferences.
            Only consider job opportunities that match your goals and for which you are well
            qualified.
          </div>
        </div>

        <div class="solution-card">
          <div class="solution-card-img"><img src="@/img/card-coach.svg" /></div>
          <div class="solution-card-title">Guided coaching</div>
          <div class="solution-card-desc">
            We want to support each step of your job search journey, from refining your resume to
            offering referral support and optimizing your applications. We will provide you with
            relevant and actionable feedback as you progress through the job process.
          </div>
        </div>

        <div class="solution-card">
          <div class="solution-card-img"><img src="@/img/card-automate.svg" /></div>
          <div class="solution-card-title">Automate burdensome work</div>
          <div class="solution-card-desc">
            Finding a job can be draining. We want to take away the pain of repetitive and stressful
            tasks.
          </div>
        </div>

        <div class="solution-card">
          <div class="solution-card-img"><img src="@/img/card-coverage.svg" /></div>
          <div class="solution-card-title">Job coverage and reach</div>
          <div class="solution-card-desc">
            Finally, we want to be the only destination for finding your dream opportunity.
            Providing extensive coverage allows us to confidently show you the newest and
            never-seen-before jobs.
          </div>
        </div>
      </div>
    </div>

    <div class="aboutUs-wrapper">
      <div class="aboutUs-title section-title">Why We Started Kopipes</div>
      <div class="aboutUs-desc-wrapper">
        <div class="double-quote top-quote">“</div>
        <div class="aboutUs-desc">
          In 2021, Jobright's founder, Eric, took an extended trip during his gap year. He traveled
          to many small and medium-sized cities seeking inspiration for his next venture. Along the
          way, Eric met over 100 talented young people and, quite unexpectedly, helped 10 of them
          secure their dream jobs. This experience opened Eric's eyes: Many talented people lacked
          fulfilling careers not due to a lack of skill or excellence, but because they didn't have
          the same access to information and opportunity as those residing in city centers. Simply
          put, they lacked access to industry experts and career mentors, leading to a glaring
          inequality in career opportunities.
        </div>

        <div class="aboutUs-desc">
          This insight deeply resonated with Eric. When he discussed it with his Co-Founder Ethan
          Zheng, an AI expert, Ethan immediately recognized the potential of recent breakthroughs in
          AI to bridge this gap.
        </div>

        <div class="aboutUs-desc">
          Jobright was created shortly after with a mission: Use AI to empower every professional so
          that they would have equal opportunities for building their dream careers. Jobright is
          more than a tool— it is your partner, ensuring a faster and more effective path to your
          next career move.
        </div>

        <div class="double-quote bottom-quote">”</div>
      </div>
    </div>

    <div class="value-wrapper">
      <div class="value-title section-title">Our Values</div>
      <div class="value-desc">These core values guide the way our team works</div>
      <div class="value-card-wrapper grid grid-cols-2">
        <div class="value-card">
          <div>Jobseeker first</div>
          <div>
            We prioritize your needs and outcomes above all else. To ensure we stay close to
            evolving needs, we speak with jobseekers on a daily basis. When you’re successful, so
            are we.
          </div>
        </div>

        <div class="value-card">
          <div>Job transparency</div>
          <div>
            We know you want clear and honest information about jobs and companies. We will continue
            to provide as much relevant information as possible to help you make informed decisions.
          </div>
        </div>

        <div class="value-card">
          <div>Deep user empathy</div>
          <div>
            Looking for a job can be a difficult time. We want to make this experience easy,
            effective, and empowering for you.
          </div>
        </div>

        <div class="value-card">
          <div>Integrity</div>
          <div>
            We appreciate you putting your trust in us. We conduct our business with honesty and
            high ethical standards, especially when it comes to handling data and privacy.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  .top-search-wrapper {
    display: flex;
    height: 30vh;
    align-items: center;
    justify-content: center;
    .top-search {
      width: 80%;
      border-radius: 20px;
      height: max-content;
      align-items: center;
      justify-content: center;
      display: flex;
      padding: 3rem;
      background-color: lime;

      .search-prefix {
        font-size: 1.5rem;
        font-weight: 700;
        color: #000;
        padding: 1rem 2rem;
        border-radius: 40px;
        background-color: #fff;
      }

      .search {
        font-size: 1.5rem;
        font-weight: 700;
        color: #000;
        padding: 1rem 15rem 1rem 1rem;
        border-radius: 40px;
        background-color: #000;
        color: #fff;
      }
    }
  }

  .mission-wrapper {
    text-align: center;
    height: 30vh;

    .mission-subtxt {
      font-size: 1.5rem;
      font-weight: 300;
      color: #000;
      // padding: 1rem 2rem;
    }

    .mission-desc {
      font-size: 1rem;
      font-weight: 400;
      color: #000;
      padding: 1rem 12rem;
    }
  }

  .solution-wrapper {
    text-align: center;
    padding: 0 10rem;

    .solution-card {
      font-size: 1rem;
      font-weight: 400;
      color: #000;
      padding: 2rem;
      background-color: #f2f4f5;
      border-radius: 10px;
      margin: 1rem;

      .solution-card-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #000;
        padding: 1rem 0;
        text-align: start;
      }

      .solution-card-desc {
        font-size: 1rem;
        font-weight: 400;
        color: #000;
        padding: 0 2rem 4rem 0;
        text-align: start;
      }
    }
  }

  .aboutUs-wrapper {
    text-align: center;
    margin: 5rem 11rem;
    background-color: #00f0a01e;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .aboutUs-desc-wrapper {
      text-align: start;
      background-color: #fff;
      width: 96%;
      border-radius: 20px;
      margin: 1rem 0;
      // padding: 2rem 0;

      .double-quote {
        font-size: 3rem;
        font-weight: 700;
        color: #000;
        position: relative;
        display: inline-block;
      }

      .top-quote {
        top: -1.5rem;
      }

      .bottom-quote {
        bottom: -2.5rem;
        text-align: end;
        width: 100%;
      }

      .aboutUs-desc {
        font-size: 1rem;
        font-weight: 400;
        color: #000;
        padding: 1rem 2rem;
        text-align: start;
      }
    }
  }

  .value-wrapper {
    text-align: center;
    padding: 0 10rem;

    .value-card {
      font-size: 1rem;
      font-weight: 400;
      color: #000;
      padding: 1rem;
      border: 1px solid #f2f4f5;
      border-radius: 10px;
      margin: 1rem;

      div {
        font-size: 1.5rem;
        font-weight: 700;
        color: #000;
        padding: 1rem 0;
        text-align: start;
      }

      div:last-child {
        font-size: 1rem;
        font-weight: 400;
        color: #000;
        // padding: 0 2rem 4rem 0;
        // padding: 0 1rem;
        text-align: start;
      }
    }
  }

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    padding: 1rem 2rem;
  }
}

.test {
  border: 1px solid red;
}
</style>
