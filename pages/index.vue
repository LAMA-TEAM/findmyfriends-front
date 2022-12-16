<template>
    <div class="h-screen flex flex-col justify-center bg-accent">
        <div>
            <h1 class="text-center text-xl text-white">
                Welcome to
            </h1>
            <h1 class="text-4xl text-white text-center font-medium">
                Find My Friends !
            </h1>
        </div>
        <div class="mt-10 flex justify-center h-1/3 items-center gap-14 text-white">
            <div class="w-1/12">
                <GlobeEuropeAfricaIcon />
                <div class="text-center text-2xl">Explore</div>
            </div>
            <div class="w-1/12">
                <MapPinIcon />
                <div class="text-center text-2xl">Save</div>
            </div>
            <div class="w-1/12">
                <UsersIcon />
                <div class="text-center text-2xl">Share</div>
            </div>
        </div>
        <div class="text-center text-white text-4xl">Locations</div>
        <div class="flex justify-center my-20 gap-5 items-center">
            <button class="btn btn-info">Sign in</button>
            <span class="text-white text-center text-xl">or</span>
            <button class="btn btn-success">Sign up</button>
        </div>
    </div>
</template>

<script setup>
import { MapPinIcon, GlobeEuropeAfricaIcon, UsersIcon } from '@heroicons/vue/24/solid';

</script>