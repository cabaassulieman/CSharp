<script setup lang="ts">

const handleSearch = () => {


}
</script>

<template>
    <div class="flex md:space-x-5 h-screen py-10 px-4 md:py-24 md:px-24">
    <div class="hidden  md:block flex-1">
      <img src="/images/medicine.svg" />
    </div>

    <div class="flex-1">
      <div class="p-8 max-w-96 bg-gray-50 shadow-lg rounded-lg">
        <h1 class=" text-2xl text-gray-600 text-center font-semibold">Book Doctors</h1>
        <form @submit.prevent="handleSearch" class="mt-10 flex flex-col space-y-4">
          <div>
            <input placeholder="Location" class="py-2 px-4 w-full ring-1 outline-none rounded focus:ring">
          </div>

          <div>
            <select class="py-2 px-4 w-full ring-1 outline-none rounded focus:ring">
              <option selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <select class="py-2 px-4 w-full ring-1 outline-none rounded focus:ring">
              <option selected>Select Specialty</option>
              <option value="Nerves">Nerves</option>
              <option value="Kalyo">Kalyo</option>
              <option value="Wado">Wadno</option>
              <option value="Ilko">Ilko</option>
            </select>
          </div>
          
          <div class="pt-4 text-center">
            <button type="submit" class="button bg-green-500 text-white w-48 tracking-widest text-lg ">Search</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>