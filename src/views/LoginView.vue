<template>
  <div class="wrapper">
    <div class="card-wrapper grid grid-cols-2">
      <div class="left-card">
        <div class="logo-wrapper">
          <!-- <img src="../../assets/logo.png" alt="logo" /> -->
          Kopipes
        </div>

        <div class="title-wrapper">
          <strong>Ensure a Fast and Successful Journey</strong>
          to Your Next Career Move
        </div>

        <div class="perk-wrapper">
          <div class="perk">
            <img src="@/img/signup-job.svg" class="perk-img" /><strong>2X</strong> More Qualified
            Job Matches
          </div>
          <div class="perk">
            <img src="@/img/signup-time.svg" class="perk-img" /><strong>60%</strong> Time Savings in
            Job Searches
          </div>
          <div class="perk">
            <img src="@/img/signup-chat.svg" class="perk-img" /><strong>50%</strong> More Interview
            Invites
          </div>
        </div>
      </div>
      <div class="right-card">
        <div class="title-wrapper">Welcome to <strong>Kopipes</strong></div>

        <div class="form-wrapper">
          <Input placeholder="Email" v-model="userData.email" />
          <Input placeholder="Password" type="password" />

          <Button @click="loginUser">Log In</Button>

          <RouterLink to="/signup">
            <Button variant="outline" class="reroute-btn">
              Don't have an account? Sign up now
            </Button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'
import { ref } from 'vue'
import api from '@/api/index'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore'

const router = useRouter()
const userData = ref({
  email: '',
})
const userStore = useUserStore()

const loginUser = async () => {
  try {
    const response = await api.userLogin(userData.value)
    console.log('User registered successfully!')
    console.log('API Response:', response)
    userStore.setEmail(userData.value.email)
    router.push('/')
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  // width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-wrapper {
    width: 85%;
    height: 85%;
    border-radius: 2rem;
    background-image: url('@/img/login-gradient.svg');
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: center;

    .left-card {
      padding: 3rem 0 2rem 3rem;
      .logo-wrapper {
        font-size: 1.5rem;
        font-weight: 700;
      }

      .title-wrapper {
        margin-top: 30%;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 1.25em;
      }

      .perk-wrapper {
        margin: 4rem 0;
        .perk {
          background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 25%,
            rgba(255, 255, 255, 1) 50%
          );
          border-radius: 25px;
          width: max-content;
          margin: 1rem 0;
          padding: 0.2rem;
          display: flex;

          .perk-img {
            margin-right: 0.25rem;
          }
        }
      }
    }

    .right-card {
      padding: 5rem;
      .title-wrapper {
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 1.25em;
        text-align: center;
      }

      .form-wrapper {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .reroute-btn {
          width: 100%;
        }
      }
    }
  }
}

.test {
  border: 1px solid red;
}
</style>
