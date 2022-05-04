<script setup>
const buttonClasses = "border-2 border-black px-2 font-bold py-1 button btn";
</script>
<template>
 <hr/>
  <div class="flex justify-between px-14 py-4">
    
    <div>
      <img class="w-8" src="../../assets/logo.png" alt="" />
    </div>
    <ul class="flex w-1/4 justify-between  ">
      <li><button :class="buttonClasses">Home</button></li>
      <li><button :class="buttonClasses">Your projects</button></li>
      <li><button :class="buttonClasses">Create new website</button></li>
    </ul>
  </div>
</template>

<style></style>
