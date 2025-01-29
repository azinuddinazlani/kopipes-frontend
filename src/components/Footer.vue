<template>
  <div class="wrapper">
    <Separator />

    <footer class="content">
      <div class="logo flex justify-between">
        Logo
        <div class="socialmedialogo grid grid-cols-3">
          <div class="socmedlogo mr-1" href="#"><img src="@\img\facebook.svg" /></div>
          <div class="socmedlogo" href="#"><img src="@\img\linkedin.svg" /></div>
          <div class="socmedlogo" href="#"><img src="@\img\twitter.svg" /></div>
        </div>
      </div>

      <div class="footer-content-wrapper grid grid-cols-3">
        <div class="section-wrapper">
          <div class="section-title">Features</div>
          <ul>
            <li>Resume AI</li>
            <li>AI Job Match</li>
            <li>Insider Connections</li>
            <li>AI Copilot Orion</li>
            <li>H1B Jobs</li>
          </ul>
        </div>
        <div class="section-wrapper">
          <div class="section-title">Blog</div>
          <ul>
            <li>LinkedIn 101 Guide</li>
            <li>The Ultimate Guide to H1B Application</li>
            <li>Top Entry Level Jobs</li>
            <li>How to Land A Top Internship</li>
          </ul>
        </div>
        <div class="section-wrapper">
          <div class="section-title">Information</div>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
    <Separator />
    <div class="copyright m-5">© 2025 Kopipes, Inc. All rights reserved.</div>
  </div>
</template>

<script setup lang="ts">
import Separator from './ui/separator/Separator.vue'
</script>

<style scoped lang="scss">
// * {
//   border: 1px solid red !important;
// }

.wrapper {
  height: 25vh;
  margin: 5rem 3rem 1rem 3rem;

  // border: 1px solid red !important;

  .content {
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    padding: 1rem;
    border-radius: 10px;
    // border: 1px solid black !important;

    .socmedlogo {
      // border: 1px solid red !important;
      width: 25px;
    }

    .footer-content-wrapper {
      display: flex;
      justify-content: flex-start;
      // border: 1px solid green !important;
      // border: 1px solid red;
      gap: 2rem;
      margin: 1rem;

      .section-wrapper {
        font-size: 1rem;
        font-weight: 400;
        color: #000;
        padding: 1rem;
        border-radius: 10px;
        // border: 1px solid yellow !important;

        .section-title {
          font-size: 1rem;
          font-weight: 500;
          color: #000;
        }
      }
    }
  }

  .copyright {
    font-size: 1rem;
    color: #a8a8a8;
    // border: 1px solid orangered !important;
  }
}
</style>
