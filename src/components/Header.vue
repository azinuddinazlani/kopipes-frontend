<template>
  <div class="wrapper">
    <div class="content">
      <div class="links-wrapper">
        <div>Logo</div>
        <div>Features</div>
        <div>Tools</div>
        <div>Resume AI</div>
        <div>About Us</div>
        <div>Blog</div>
      </div>

      <div class="account-wrapper">
        <div class="login-btn">Sign In</div>
        <div class="register-btn">Join Now</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style scoped lang="scss">
.wrapper {
  height: 7.5vh;
  // filter: drop-shadow(5px 5px);
  box-shadow:
    0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1);

  .content {
    margin: 0 3rem;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .links-wrapper {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .account-wrapper {
      display: flex;
      gap: 2rem;
      align-items: center;

      .login-btn {
        font-weight: 700;
      }

      .register-btn {
        border-radius: 25px;
        padding: 0.3rem 1rem;
        background-color: #000;
        color: #fff;
        font-weight: 700;
      }
    }
  }

  //   box-shadow: inset;
}
</style>
