 <script  setup lang="ts">
 defineProps<{ name:string , specialty:string}>();
</script>

<template>
    	<div class="mx-8 mt-2 mb-12 md:max-w-lg md:my-12 bg-green-50 rounded-lg shadow-lg shadow-green-300/50">
		<div class="px-9 md:px-8 py-4">
			<slot>
			
			</slot>
		</div>

		<div class="flex flex-col">
			<span class="font-semibold text-2xl px-8">{{ name }}</span>
			<span
				class="block text-gray-500 text-sm px-8 mt-2"
			>{{ specialty }}</span>
		</div>
		<div class="text-center my-10 ">
			<slot name="bottom"> </slot>
		
		</div>
	</div>
</template>