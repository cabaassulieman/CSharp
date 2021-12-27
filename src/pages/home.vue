<script setup lang="ts">
import SpecialtyCard from "../components/SpecialtyCard.vue";
import SpecialtyCard1 from "../components/SpecialtyCard.vue";
const handleSearch = () => {};
</script>

<template>
  <div class="flex md:space-x-5 h-screen py-10 px-4 md:py-24 md:px-24">
    <div class="hidden md:block flex-1">
      <img src="/images/medicine.svg" />
    </div>

    <div class="flex-1">
      <div class="p-8 max-w-96 bg-gray-50 shadow-lg rounded-lg">
        <h1 class="text-2xl text-gray-600 text-center font-semibold">
          Book Doctors
        </h1>
        <form
          @submit.prevent="handleSearch"
          class="mt-10 flex flex-col space-y-4"
        >
          <div>
            <input
              placeholder="Location"
              class="py-2 px-4 w-full ring-1 outline-none rounded focus:ring"
            />
          </div>

          <div>
            <select
              class="py-2 px-4 w-full ring-1 outline-none rounded focus:ring"
            >
              <option selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <select
              class="py-2 px-4 w-full ring-1 outline-none rounded focus:ring"
            >
              <option selected>Select Specialty</option>
              <option value="Nerves">Nerves</option>
              <option value="Kalyo">Kalyo</option>
              <option value="Wado">Wadno</option>
              <option value="Ilko">Ilko</option>
            </select>
          </div>

          <div class="pt-4 text-center">
            <button
              type="submit"
              class="
                button
                bg-green-500
                text-white
                w-48
                tracking-widest
                text-lg
              "
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="w-full px-10 pb-10">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <SpecialtyCard title="Nerves" :doctors="23">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </SpecialtyCard>
      <SpecialtyCard title="Dentist" :doctors="10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
          />
        </svg>
        <template v-slot:buttom>
          <div class="my-5"></div>
          <Button class="button bg-red-300 rounded  hover:bg-red-100" text="explore"> explore</Button>
        </template>
      </SpecialtyCard>

      <SpecialtyCard title="Test" :doctors="20" />

      <SpecialtyCard title="Test" :doctors="30" />
    </div>
  </div>
</template>

}