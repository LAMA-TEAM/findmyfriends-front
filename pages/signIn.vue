<template>
  <div
    class="h-screen flex flex-col justify-center"
    style="align-items: center"
  >
    <div class="card w-96 bg-base-100 shadow-xl card-bordered">
      <div class="card-body">
        <div class="flex flex-row" style="align-items: center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            />
          </svg>
          <h2 class="card-title pl-2">FindMyFriends</h2>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            class="input input-bordered"
          />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover"
              >Forgot password?</a
            >
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
        <div class="flex flex-row" style="align-items: center">
        <p>New user at FindMyFriend ?</p>
        <label class="label">
            <NuxtLink to="/signUp">
          <a href="#" class="label-text-alt link link-hover text-primary pa-0"
            >Sign Up here</a
          >
        </NuxtLink>
        </label>
    </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "index",
});
</script>
