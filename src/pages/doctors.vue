<script setup lang="ts">
import DoctorsCard from "../components/DoctorsCard.vue";
import Doctorscard from "../components/Doctorscard.vue";
</script>

<template>
  <div class="flex justify-center">
    <h1
      class="
        text-center
        font-bold
        bg-gradient-to-r
        from-green-500
        to-blue-500
        text-transparent
        bg-clip-text
        text-6xl
        shadow-lg
        rounded-2xl
        p-4
        hover:from-blue-500 hover:to-green-500
        transition-all
      "
    >
      Doctors
    </h1>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">
    <DoctorsCard name="Dr Abdirahman " specialty="PHD IN ">
      <img
        class="
          shadow-md
          rounded-lg
          object-cover
          transition
          duration-300
          hover:scale-90
          height:30px
        "
        src="images/stoc.jpg"
        alt="not found"
      />
      <template v-slot:bottom>
       <RouterLink to="booking1" class="booking-button" >
         Book Now
       </RouterLink>
      </template>
      
     
    </DoctorsCard>
    <DoctorsCard name="Abdi yuusuf " specialty="Dentist">
      <img
        class="
          shadow-md
          rounded-lg
          object-cover
          transition
          duration-300
          hover:scale-90
          
        "
        src="images/pic.jpg" 
        alt="this Image not found"
      />
      
           
    </DoctorsCard>
    <DoctorsCard name="Dr Amina Ali" specialty="phD">
      <img class="shadow-md 
        rounded-lg
          object-cover
          transition
          duration-300
          hover:scale-90
          height:30
       " src="images/istockphoto.jpg" alt="no image">

    </DoctorsCard>
  
    
    
  </div>
</template>