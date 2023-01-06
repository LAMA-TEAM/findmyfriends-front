<template>
  <div
    class="hidden flex-col items-start pl-5 pr-0 py-6 lg:flex md:flex gap-5"
    style="width: 337px"
  >
    <h1 class="text-2xl font-bold">Nice to see you again USER !</h1>

    <div class="stats shadow card-bordered">
      <div
        class="stat flex flex-column"
        style="width: 290px; flex-direction: column; align-items: center"
      >
        <img src="~/assets/img/bermuda-751.png" style="width: 170px" />
        <div class="stat-title">Add a pin</div>
        <div class="stat-desc">Add your position or fix a meeting point</div>
        <label for="my-modal"
          ><button class="btn btn-secondary btn-xs btn-square mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg></button
        ></label>
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

            <h3 class="font-bold text-lg">
              Add
            </h3>
            <p class="py-4">
              share localisation
            </p>
            <p class="py-4">
              add a meeting point
            </p>
            <div class="modal-action">
              <label for="my-modal" class="btn">Share</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="stats shadow card-bordered">
      <div
        class="stat flex flex-column"
        style="width: 290px; flex-direction: column; align-items: flex-start"
      >
        <div class="title font-bold">Friends</div>
        <div class="flex flex-row pt-3" style="align-items: center">
          <div class="avatar placeholder pr-3">
            <div
              class="bg-neutral-focus text-neutral-content rounded-full w-10"
            >
              <span>US</span>
            </div>
          </div>
          <div class="stat-desc">Friend 1</div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-col items-start lg:flex md:flex py-6 px-5 gap-5">
    <div class="flex flex-row gap-3" style="align-items: center">
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
      <h1 class="text-2xl font-bold">Map</h1>
    </div>
    <div class="card lg:card-side bg-base-100 shadow-xl image-full " style="width: 980px; height: 696px;">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">c'est la map</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>
