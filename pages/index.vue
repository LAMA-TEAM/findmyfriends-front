<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse px-44">
      <img
        src="~/assets/img/bloom-woman-and-man-clapped-their-hands.png"
        class="max-w-sm "
      />
      <div>
        <h1 class="text-5xl font-bold">Welcome to FindMyFriends !</h1>
        <p class="py-6">
          Where you can place tags on a map and share them with your contacts so
          that it can indicate your position, give meeting points or share
          places to visit with friends.
        </p>
        <div class="flex flex-column" style="align-items: center">
          <NuxtLink to="/signin">
            <button class="btn btn-primary">Sign in</button>
          </NuxtLink>
          <span class="text-black text-center px-3">or</span>
          <NuxtLink to="/signup">
            <button class="btn btn-secondary">Sign up</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const routes = ["signIn", "signUp"];
</script>
