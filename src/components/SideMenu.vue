<script setup lang="ts">
import { computed } from "vue-demi";

type Props = {
  isOpen: boolean;
};

const props = defineProps<Props>();
const emit = defineEmits(["onClose"]);

const isOpen = computed(() => {
  return props.isOpen;
});

const closeMenu = () => {
  emit("onClose");
};
</script>

<template>
  <div class="menu-container" :class="{ 'menu-container--is-visible': isOpen }">
    <ul class="menu-container__list">
      <li>
        <RouterLink to="/" class="menu-container__list__link">
          Accueil
        </RouterLink>
      </li>
      <li>
        <div class="menu-container__list__delimiter"></div>
      </li>
      <li>
        <RouterLink to="/rules" class="menu-container__list__link">
          Règles officielles
        </RouterLink>
      </li>
      <li>
        <div class="menu-container__list__delimiter"></div>
      </li>
      <li>
        <RouterLink to="/variants" class="menu-container__list__link">
          Variantes
        </RouterLink>
      </li>
      <li>
        <div class="menu-container__list__delimiter"></div>
      </li>
      <li>
        <RouterLink to="/game" class="menu-container__list__link">
          Compter les points
        </RouterLink>
      </li>
      <li>
        <div class="menu-container__list__delimiter"></div>
      </li>
      <li>
        <RouterLink to="/about" class="menu-container__list__link">
          Qui sommes-nous?
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/contacts" class="menu-container__list__link">
          Nous écrire
        </RouterLink>
      </li>
    </ul>
    <button @click="closeMenu" class="menu-container__backdrop"></button>
  </div>
</template>

<style scoped>
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-100%, 0);
  width: 100%;
  height: 100%;
  transition: transform ease-in-out 200ms;
  display: flex;
  z-index: var(--menu-z);
}
.menu-container__list {
  width: 65%;
  background: var(--color-dark);
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  margin: 0;
  padding: 16px;
}

.menu-container--is-visible {
  transform: translate(0, 0);
}

.menu-container__backdrop {
  flex-grow: 1;
  background: none;
  border: none;
}

.menu-container__list__link {
  text-decoration: none;
  font-size: 22px;
  color: var(--color-light);
}

.menu-container__list__delimiter {
  background-color: var(--color-light);
  mask: url(../../../assets/delimiter2.svg) no-repeat center / contain;
  -webkit-mask: url(../../../assets/delimiter2.svg) no-repeat center / contain;
  height: 20px;
  width: 200px;
}
</style>
