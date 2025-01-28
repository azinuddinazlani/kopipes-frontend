<template>
  <div class="wrapper">
    <div class="card-wrapper test grid grid-cols-2">
      <div class="left-card test">
        <div class="logo-wrapper">
          <!-- <img src="../../assets/logo.png" alt="logo" /> -->
          Kopipes
        </div>

        <div class="title-wrapper">
          <strong>Ensure a Fast and Successful Journey</strong>
          to Your Next Career Move
        </div>

        <div class="perk-wrapper">
          <div class="perk test">
            <img src="@/img/signup-job.svg" class="perk-img" /><strong>2X</strong> More Qualified
            Job Matches
          </div>
          <div class="perk test">
            <img src="@/img/signup-time.svg" class="perk-img" /><strong>60%</strong> Time Savings in
            Job Searches
          </div>
          <div class="perk test">
            <img src="@/img/signup-chat.svg" class="perk-img" /><strong>50%</strong> More Interview
            Invites
          </div>
        </div>
      </div>
      <div class="right-card test">
        <div class="title-wrapper">Welcome to <strong>Kopipes</strong></div>

        <div class="form-wrapper">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />

          <div class="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              for="terms"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>

          <Button>Sign Up</Button>

          <div class="text-center">By continuing, you agree to the Kopipes</div>
          <div class="text-center">
            <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>
          </div>

          <Button variant="outline">Already a member? Sign in now</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue'
import { Checkbox } from '@/components/ui/checkbox'
import Button from '@/components/ui/button/Button.vue'
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
          border: 1px solid red;
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
      }
    }
  }
}

.test {
  border: 1px solid red;
}
</style>
