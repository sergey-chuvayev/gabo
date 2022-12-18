<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border: 2px solid var(--color-dark);
  box-shadow: 2px 2px 0px var(--color-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 30px;
  padding: 16px 8px;
  font-family: 'Jost';
  font-size: 20px;
}
</style>
