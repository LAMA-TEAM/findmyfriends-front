<template>
    <div class="hidden bg-neutral flex-col justify-between items-center w-20 py-5 lg:flex md:flex">
        <div class="avatar w-1/2">
            <div class="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
            </div>
        </div>
        <div class="flex flex-col gap-3">
            <div class="tooltip tooltip-right tooltip-secondary" data-tip="Home">
                <NuxtLink to="/dashboard">
                    <HomeIcon :class="route.name === 'dashboard' ? 'bg-secondary' : 'bg-primary'" class="h-10 w-10 text-white rounded-md p-2 hover:bg-secondary hover:cursor-pointer" />
                </NuxtLink>
            </div>
            <div class="tooltip tooltip-right tooltip-secondary" data-tip="Add marker">
                <SquaresPlusIcon :class="route.name === 'dashboard-new' ? 'bg-secondary' : 'bg-primary'" class="h-10 w-10 text-white rounded-md p-2 hover:bg-secondary hover:cursor-pointer" />
            </div>
            <div class="tooltip tooltip-right tooltip-secondary" data-tip="Friends">
                <NuxtLink to="/dashboard/friends">
                    <UsersIcon :class="route.name === 'dashboard-friends' ? 'bg-secondary' : 'bg-primary'" class="h-10 w-10 text-white rounded-md p-2 hover:bg-secondary hover:cursor-pointer" />
                </NuxtLink>
            </div>
        </div>
        <div>
            <div class="dropdown dropdown-top">
                <label tabindex="0" class="avatar placeholder m-1 hover:cursor-pointer">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span>MX</span>
                    </div>
                </label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Profile</a></li>
                    <li><a>Friends</a></li>
                    <li><a class="text-error">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { HomeIcon, SquaresPlusIcon, UsersIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
const routes = [
    "dashboard",
    "dashboard-friends",
    "dashboard-new"
]

</script>