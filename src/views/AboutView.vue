<script setup lang="ts">
import DxButton from 'devextreme-vue/button';

function sayHelloWorld() {
  alert('Hello world!')
}
</script>

<template>
  <DxButton text="Click me" @click="sayHelloWorld" />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>