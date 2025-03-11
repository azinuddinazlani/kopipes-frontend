<template>
  <div class="wrapper">
    <div class="content">
      <div class="links-wrapper">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()"
                >Logo</NavigationMenuLink
              >
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" href="/job-listing">
                Jobs
              </NavigationMenuLink>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" href="/test">
                Test
              </NavigationMenuLink>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" href="/submit">
                Upload Resume
              </NavigationMenuLink>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" href="/admin/dashboard">
                Admin Dashboard
              </NavigationMenuLink>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" href="/job-listing">
                Job Listing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div class="account-wrapper">
        <NavigationMenu v-if="userStore.email">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/profile" :class="navigationMenuTriggerStyle()">
                Hi, {{ userStore.email }}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu v-else>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/signup"
                :class="navigationMenuTriggerStyle()"
                class="login-btn"
              >
                Sign In
              </NavigationMenuLink>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" class="register-btn">
                Join Now
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { useUserStore } from '@/stores/useUserStore'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(() => {
  console.log('this is my name', userStore.email)
})
</script>

<style scoped lang="scss">
.wrapper {
  height: 7.5vh;
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
        cursor: pointer;
      }
    }
  }

  //   box-shadow: inset;
}
</style>
