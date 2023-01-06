
<script setup>
import { protectedRoute } from "~/lib/middleware";

definePageMeta({
  layout: "dashboard",
});

onMounted(() => {
  protectedRoute();
});
</script>

<template>
  Dashboard
</template>