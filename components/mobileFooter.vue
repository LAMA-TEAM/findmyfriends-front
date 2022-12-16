<template>
    <div class="btm-nav lg:hidden md:hidden">
        <button :class="route.name === 'dashboard' && 'active'">
            <NuxtLink to="/dashboard">
                <HomeIcon class="h-5 w-5 text-black" />
            </NuxtLink>
        </button>
        <button :class="route.name === 'dashboard-new' && 'active'">
            <SquaresPlusIcon class="h-5 w-5 text-black" />
        </button>
        <button :class="route.name === 'dashboard-friends' && 'active'">
            <NuxtLink to="/dashboard/friends">
                <UsersIcon class="h-5 w-5 text-black" />
            </NuxtLink>
        </button>
    </div>
    
</template>

<script setup>
import { HomeIcon, SquaresPlusIcon, UsersIcon } from '@heroicons/vue/24/outline'
const route = useRoute()

const routes = [
    "dashboard",
    "dashboard-friends",
    "dashboard-new"
]

</script>