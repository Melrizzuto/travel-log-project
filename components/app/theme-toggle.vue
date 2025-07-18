<script lang="ts" setup>
const colorMode = useColorMode();
const IsDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <!-- this hidden checkbox controls the state -->
    <input v-model="IsDark" type="checkbox">

    <!-- sun icon -->
    <Icon name="line-md:sunny-loop" class="swap-on" size="25" />

    <!-- moon icon -->
    <Icon name="line-md:moon-loop" class="swap-off" size="25" />
  </label>
</template>
