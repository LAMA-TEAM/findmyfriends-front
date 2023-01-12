<script setup>
import { getMe } from '~/lib/api'

onMounted(async () => {
  const res = await getMe();
  
  if (res === true) {
    return;
  } else {
    navigateTo("/signIn");
  }
});
</script>

<template>
    <MobileNavbar/>
    <div class="flex flex-row h-screen">
        <Sidebar/>
        <slot/>
    </div>
    <MobileFooter/>
</template>
