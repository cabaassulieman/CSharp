<script setup lang="ts">

defineProps<{ title:string, doctors : number}>();
</script>

<template>
    
  <div
        class="
          bg-blue-200
          shadow-md
          rounded
          p-8
          text-center
          hover:shadow-lg hover:scale-110
          transition
        "
      >
      <div class="flex mb-2 items-center justify-center">
        <slot></slot>
      </div>
        <h1 class="text-2xl">{{ title }}</h1>
        <span>{{ doctors }} Doctors</span>
        <slot name="buttom"></slot>
      </div>

</template>