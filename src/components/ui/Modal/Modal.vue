<script setup lang="ts">
import { defineProps } from "vue";

type Props = {
  title: string;
  isOpen: boolean;
  description: string;
};

defineProps<Props>();
</script>

<template>
  <div class="modal-overlay" :class="{ 'is-open': isOpen }">
    <div class="modal-wrapper">
      <h2 class="title">{{ title }}</h2>
      <div class="description mb-6">{{ description }}</div>
      <div class="buttons"></div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left: 0;
  z-index: calc(var(--menu-z) + 1);
  transform: translate(0, 200%);
  opacity: 0;
  transition: all ease-in-out 500ms;
}

.modal-overlay.is-open {
  transform: translate(0, 0);
  opacity: 1;
}

.modal-wrapper {
  width: 100%;
  height: calc(100% - 32px);
  background-color: #fff;
  box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
</style>
