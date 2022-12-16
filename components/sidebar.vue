<template>
    <div class="bg-neutral flex flex-col justify-between items-center w-20 py-5">
        <div class="avatar w-1/2">
            <div class="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
            </div>
        </div>
        <div class="flex flex-col gap-3">
            <HomeIcon class="h-10 w-10 text-white bg-primary rounded-md p-2 hover:bg-secondary hover:cursor-pointer" />
            <SquaresPlusIcon class="h-10 w-10 text-white bg-primary rounded-md p-2 hover:bg-secondary hover:cursor-pointer" />
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

<script>
import { HomeIcon, SquaresPlusIcon } from '@heroicons/vue/24/solid'

export default {
    components: { HomeIcon, SquaresPlusIcon }
}

</script>