<script setup lang="ts">
type Props = {
  variant?: "primary" | "ghost";
};
const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>

<template>
  <button class="button" :class="props.variant === 'ghost' ? 'ghost' : ''">
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
  border-radius: 50px;
  padding: 16px 8px;
  font-family: "Jost";
  font-size: 16px;
  background-color: var(--color-white);
  text-transform: uppercase;
  touch-action: manipulation;
  color: var(--color-dark);
}
.button.ghost {
  background: none;
}
.button:active {
  box-shadow: 1px 1px 0px var(--color-dark);
}
</style>
