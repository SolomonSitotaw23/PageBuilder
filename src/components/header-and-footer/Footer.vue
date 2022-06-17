<script setup>
const linkClasses = "px-2 hover:underline cursor-pointer";
</script>
<template>
  <div class="footer">
    <hr />
    <div class="flex justify-between px-14 py-4">
      <div class="flex justify-between w-full">
        <p class="text-xs">&copy; Solo 2022</p>
        <ul class="text-xs flex">
          <li :class="linkClasses">Figma</li>
          <li :class="linkClasses">Github</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  height: 7vh;
}
</style>
