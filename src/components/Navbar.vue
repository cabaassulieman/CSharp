<script setup lang="ts">
import { ref } from 'vue';
import {  } from 'vue-router';

let isMenuHidden = ref(true);

</script>


<template>
    
     <div
    v-if="isMenuHidden === false"
    @click="isMenuHidden = !isMenuHidden"
    class="bg-gray-500 h-screen md:hidden w-screen fixed bg-opacity-50"
  ></div>
  <nav class="mx-auto max-w-6xl bg-gray-100 shadow">
    <div class="flex px-4 justify-between items-center">
      <div class="flex space-x-8">
        <div class="">
          <RouterLink to="/">
            <span
              class="
                block
                px-4
                py-4
                text-transparent
                bg-clip-text
                font-bold
                text-lg
                bg-gradient-to-r
                from-green-500
                to to-blue-500
              "
            >
              Doctors App</span
            >
          </RouterLink>
        </div>

        <ul class="hidden md:flex items-center space-x-2">
          <li>
            <RouterLink to="#" class="navItem">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="doctors" class="navItem">Doctors</RouterLink>
          </li>
          <li>
            <RouterLink to="#" class="navItem">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <div class="hidden md:flex space-x-2">
        <RouterLink
          to="/login"
          class="button hover:bg-pink-500 hover:text-gray-200"
          >Login</RouterLink
        >
        <RouterLink to="/signup" class="button buttonPink">Signup</RouterLink>
      </div>

      <button class="md:hidden text-gray-600" @click="isMenuHidden = !isMenuHidden">
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <div
      class="
        bg-blue-100
        w-64
        transform
        space-y-10
        fixed
        md:hidden
        left-0
        top-0
        h-screen
        transition
        flex
        justify-center
        items-center
        flex-col
      "
      :class="{ '-translate-x-64': isMenuHidden }"
    >
      <h4
        class="
          bg-gradient-to-r
          from-green-500
          to to-blue-500
          text-3xl
          font-bold
          text-transparent
          bg-clip-text
        "
      >
        Doctors App
      </h4>

      <ul class="w-64">
        <li>
          <RouterLink
            to="/"
            class="
              block
              text-center
              border-b border-blue-200
              py-5
              px-3
              tracking-widest
              font-semibold
              transition
              hover:bg-blue-200
              shadow-lg
              rounded-2xl
            "
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/"
            class="
              block
              text-center
              border-b border-blue-200
              py-5
              px-3
              tracking-widest
              font-semibold
              transition
              hover:bg-blue-200
              shadow-lg
              rounded-2xl
            "
          >
            Doctor</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/"
            class="
              block
              text-center
              border-b border-blue-200
              py-5
              px-3
              tracking-widest
              font-semibold
              transition
              hover:bg-blue-200
              shadow-lg
              rounded-2xl
            "
            >Contact</RouterLink
          >
        </li>
      </ul>

      <div class="flex space-x-2 pt-10">
        <RouterLink
          to="/login"
          class="button hover:bg-pink-500 hover:text-gray-200"
          >Login</RouterLink
        >
        <RouterLink to="/signup" class="button buttonPink">Signup</RouterLink>
      </div>
    </div>
  </nav>
</template>