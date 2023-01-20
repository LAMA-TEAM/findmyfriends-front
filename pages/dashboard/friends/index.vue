
<script setup>
import {
  getFriends as getFriendsApi,
  getInvitations as getInvitationsApi,
  createInvitation as createInvitationApi,
  getInvitationsSended as getInvitationsSendedApi,
  acceptInvitation as acceptInvitationApi,
  } from "~/lib/api";

definePageMeta({
  layout: "dashboard",
});

const invitations = ref([]);
const friends = ref([]);
const username = ref("");
const invitationsSended = ref([]);

onMounted(() => {
  getFriends();
  getInvitationsSended();
  getInvitations();
});

const getFriends = async () => {
  const { data } = await getFriendsApi();
  friends.value = data;
};

const getInvitations = async () => {
  const { data } = await getInvitationsApi();
  invitations.value = data;
};

const createInvitation = async () => {
  console.log(username.value);
  await createInvitationApi({
    username: username.value,
  });
  username.value = "";
  getInvitationsSended();
};

const getInvitationsSended = async () => {
  const { data } = await getInvitationsSendedApi();
  invitationsSended.value = data;
};

const acceptInvitation = async (invitationId) => {
  await acceptInvitationApi(invitationId);
  await getInvitations();
  await getFriends();
};
</script>

<template>
  <div class="items-start pl-5 pr-5 py-6 gap-5 lg:flex md:flex flex-col">
    <h1 class="text-2xl font-bold">Friends Board</h1>
    <div class="flex">
      <!-- Card 1 Friends online -->
      <div class="card w-80 card-list" style="background-color: #fff0e0">
        <div class="card-body">
          <h2 class="card-title" style="color: #dfa82f">Friends Online</h2>
          <ul
            class="menu menu-compact bg-base-100 w-56 p-2 rounded-box"
            style="background-color: #fff0e0"
          >
            <template v-if="friends.length === 0">
              <li><a>No friends online</a></li>
            </template>
            <template v-else>
            <li v-for="friend, index of friends" :key="index"><a>{{ friend.username }}</a></li>
            </template>
          </ul>
        </div>
      </div>
      <!-- Card 2 Friends invitation -->
      <div
        class="card w-80 card-list"
        style="background-color: #e3f7ee; margin-left: 10px"
      >
        <div class="card-body">
          <h2 class="card-title" style="color: #19cb8e">Pending Invitations</h2>
          <ul
            class="menu menu-compact bg-base-100 w-56 p-2 rounded-box"
            style="background-color: #e3f7ee"
          >
            <template v-if="invitations.length !== 0">
            <li v-for="invitation, index of invitations" :key="index">
              <a style="display: flex; justify-content: space-between"
                >{{ invitation.from.username }}
                <div style="display: flex">
                  <button
                    class="btn btn-circle btn-sm"
                    style="background-color: #19cb8e; border-color: #19cb8e"
                    @click="acceptInvitation(invitation._id)"
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </button>
                  <button
                    class="btn btn-sm btn-outline btn-circle"
                    style="
                      background-color: #ff5857;
                      margin-left: 6px;
                      border-color: #ff5857;
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button></div
              ></a>
            </li>
            </template>
            <template v-else>
              <li><a>No pending invitations</a></li>
            </template>
          </ul>
          <div class="card-actions justify-end">
            <label for="my-modal" class="btn btn-ghost" style="color: #19cb8e">
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
                  d="M12 6v12m6-6H6"
                />
              </svg>

              Add a friend
            </label>
            <!-- Put this part before </body> tag -->
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box" style="width: 350px">
                <h3 class="font-bold text-lg">
                  Add a new friend
                </h3>
                <p class="py-4">
                  Enter username
                </p>
                <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" v-model="username" />

                <div class="modal-action">
                  <label for="my-modal" class="btn">Cancel</label>
                  <label for="my-modal" class="btn" style="background-color: #DFA82F; border-color: #DFA82F" @click="createInvitation">Add</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <!-- Card Invitation sended -->
      <div
        class="card w-80 card-list"
        style="background-color: #8cb8ff; margin-left: 10px"
      >
        <div class="card-body">
          <h2 class="card-title" style="color: #1770ff">Invitations sended</h2>
          <ul
            class="menu menu-compact bg-base-100 w-56 p-2 rounded-box"
            style="background-color: #8cb8ff"
          >
            <template v-if="invitationsSended.length !== 0">
            <li v-for="invitation, index of invitationsSended" :key="index">
              <a style="display: flex; justify-content: space-between"
                >{{ invitation.to.username }}
              </a>
            </li>
            </template>
            <template v-else>
              <li><a>You didn't send any invitation</a></li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>