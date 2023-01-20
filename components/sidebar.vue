<template>
  <div
    class="hidden bg-primary flex-col justify-between items-center w-20 py-5 lg:flex md:flex"
  >
    <div class="avatar placeholder m-1">
      <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
        <span>{{ userInfos?.username.slice(0,2).toUpperCase() }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="tooltip tooltip-right tooltip-primary-focus" data-tip="Home">
        <NuxtLink to="/dashboard">
        <svg :class="route.name === 'dashboard' ? 'bg-primary-focus' : 'bg-primary'"
            class="h-10 w-10 text-white rounded-md p-2 hover:bg-primary-focus hover:cursor-pointer"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
        </NuxtLink>
      </div>
      <div class="tooltip tooltip-right tooltip-primary-focus" data-tip="Friends">
        <NuxtLink to="/dashboard/friends">
          <svg :class="
                route.name === 'dashboard-friends' ? 'bg-primary-focus' : 'bg-primary'
                      " class="h-10 w-10 text-white rounded-md p-2 hover:bg-primary-focus hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </NuxtLink>
      </div>
    </div>
    <div>
      <div class="dropdown dropdown-top">
        <div class="avatar placeholder" tabindex="0">
          <div
            class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:cursor-pointer"
          >
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Profile</a></li>
          <li><a>Friends</a></li>
          <li><a class="text-error" @click="handleSignOut">Sign out</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { HomeIcon, SquaresPlusIcon, UsersIcon } from "@heroicons/vue/24/solid";
import { getMe as getMeApi } from "~/lib/api";

const route = useRoute();
const routes = ["dashboard", "dashboard-friends", "dashboard-new"];
const userInfos = ref();

const getUserInfos = async () => {
  const token = localStorage.getItem('token');
  const res = await getMeApi(token)
  if (!res) return;

  userInfos.value = res;
}

const handleSignOut = () => {
  localStorage.removeItem("token");
  navigateTo("/signin");
};

onMounted(() => {
  getUserInfos();
})
</script>
