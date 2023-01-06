<template>
  <div>
    <h1>Nice to see you again USER !</h1>
  </div>
</template>

<script setup>
import { protectedRoute } from "~/lib/middleware";

definePageMeta({
  layout: "dashboard",
});
</script>
