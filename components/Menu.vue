<script setup lang="ts">
import { MENU } from "./menu.data";
</script>

<template>
  <div class="flex flex-col font-medium ml-5 mt-5">
    <div v-for="item in MENU" class="mb-3">
      <MenuLink :icon="item.icon" :link="item.url">{{ item.name }}</MenuLink>
    </div>
  </div>
</template>