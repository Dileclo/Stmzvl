<template>
  <div>
    <NuxtLink :to="link" class="flex p-2 items-center shadow rounded-xl gap-2 hover:bg-slate-100 transition-all border"
      ><Icon size="24px" :name="icon" /><span
        ><slot></slot></span
      ></NuxtLink
    >
  </div>
</template>
<script setup>
defineProps({
    link:'/',
    icon:'',
})
</script>