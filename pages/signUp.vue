  
<script setup>
import { useRouter } from "vue-router";
import { register } from "~/lib/api";

const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const error = ref('');

const onSubmit = async (e) => {
  const res = await register({
    username: firstName.value + " " + lastName.value,
    email: email.value,
    password: password.value,
  });

  if (res.status !== 201) {
    error.value = res.data.message;
  } else {
    error.value = '';
    router.push('/signin', { query: { success: 'You have successfully registered!' } });
  }
}
</script>

<template>
  <div
    class="h-screen flex flex-col justify-center"
    style="align-items: center"
  >
    <form @submit.prevent="onSubmit" action="" class="card bg-base-100 shadow-xl card-bordered">
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
        <div class="flex flex-row">
          <div class="form-control">
            <label class="label">
              <span class="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="first name"
              required
              class="input input-bordered"
              v-model="firstName"
            />
          </div>
          <div class="form-control pl-3">
            <label class="label">
              <span class="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="last name"
              required
              class="input input-bordered"
              v-model="lastName"
            />
          </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" required class="input input-bordered" v-model="email" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            required
            class="input input-bordered"
            v-model="password"
          />
        </div>
        <div class="form-control" v-if="error">
          <label class="label">
            <span class="label-text text-error text-center">{{ error }}</span>
          </label>
        </div>
        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
        <div class="flex flex-row" style="align-items: center">
          <p>Already a user at FindMyFriend ?</p>
          <label class="label">
            <NuxtLink to="/signin" class="label-text-alt link link-hover text-primary pa-0">
              Login here
            </NuxtLink>
          </label>
        </div>
      </div>
    </form>
  </div>
</template>