<script setup lang="ts">
type Props = {
  title: string;
  isOpen: boolean;
  description: string;
};

defineProps<Props>();
</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-wrapper">
      <h2 class="title">{{ title }}</h2>
      <div class="description">{{ description }}</div>
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
  z-index: 1;
}
.modal-wrapper {
  width: 100%;
  height: calc(100% - 32px);
  background-color: #fff;
  box-shadow: 2px 2px 2px black;
  padding: 16px;
}
</style>
