<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border-radius: 8px;
  font-family: 'Milonga', cursive;
  background: var(--color-dark);
  color: var(--color-light);
  cursor: pointer;
}
</style>
