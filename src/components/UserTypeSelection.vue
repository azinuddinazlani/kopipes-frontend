<template>
  <div class="wrapper">
    <div class="login-container">
      <h1 class="title">To get started, which best describes your current situation?</h1>
      <div class="options">
        <!-- Option 1 -->
        <div class="option-card" @click="handleUserTypeSelection('employer')">
          <div class="illustration">
            <img src="@/img/login-employer.svg" alt="I'm hiring illustration" />
          </div>
          <!-- <button class="btn">I'm hiring</button> -->
          <div class="btn">I'm hiring</div>
        </div>
        <!-- Option 2 -->
        <div class="option-card" @click="handleUserTypeSelection('seeker')">
          <div class="illustration">
            <img src="@/img/login-candidate.svg" alt="I'm looking for jobs illustration" />
          </div>
          <!-- <button class="btn">I'm looking for jobs</button> -->
          <div class="btn">I'm looking for jobs</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from '@/api'
import { useUserStore } from '@/stores/useUserStore'
import { onMounted } from 'vue'
// import { useRouter } from 'vue-router'
// const router = useRouter()

const userStore = useUserStore()

const handleUserTypeSelection = async (userType) => {
  try {
    const userEmail = userStore.email
    const userData = {
      type: userType,
    }
    const response = await api.userDetailUpdate(userEmail, userData)
    console.log('User type selected successfully!')
    console.log('API Response:', response)
    userStore.setUserType(userType)
    // router.push('/')
    window.location.href = (userType === 'seeker') ? '/submit' : '/'

    // if (userType === 'employer') {
    //   console.log('Redirecting to the employer dashboard...')
    // } else {
    //   console.log('Redirecting to the candidate dashboard...')
    // }
  } catch (error) {
    console.error('Error:', error)
  }
}

onMounted(() => {
  console.log('this is my email', userStore.email)
})

// import { useRouter } from 'vue-router'
// const router = useRouter()

// const handleUserTypeSelection = () => {
//   router.push('/')
// }
</script>

<style lang="scss" scoped>
// .wrapper {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-color: #fef6f9;
//   padding: 2rem;
// }

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fef6f9;

  .login-container {
    text-align: center;
    width: 100%;
    max-width: 900px;

    .title {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: #333;
    }

    .options {
      display: flex;
      justify-content: center;
      gap: 2rem;

      .option-card {
        background: white;
        border-radius: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        padding: 2.5rem;
        width: 100%;
        max-width: 450px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        transition:
          transform 0.2s ease,
          background-color 0.3s ease;

        .illustration {
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .illustration img {
          max-width: 100%;
          height: auto;
          border-radius: 16px;
        }
      }

      .option-card:hover {
        transform: translateY(-5px);
        background: linear-gradient(135deg, #ffe4f8, #fdc5bb);
        /* Gradient on hover */
      }

      .btn {
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      // .btn:hover {
      //   background-color: #333;
      // }
    }
  }
}

.test {
  border: 1px solid red;
}
</style>
