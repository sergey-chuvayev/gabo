<script setup lang="ts">
import { useMainStore } from "@/stores";
import { computed } from "vue-demi";
import ButtonRedesigned from "./ButtonRedesigned.vue";

type Props = {
  isOpen: boolean;
};
const props = defineProps<Props>();
const emit = defineEmits(["onClose"]);

const isOpen = computed(() => {
  return props.isOpen;
});

const store = useMainStore();
const handleResetGame = () => {
  store.resetGame();
};
const closePage = () => {
  emit("onClose");
}

</script>

<template>
  <div class="resetgame-container" :class="{ 'resetgame-container--is-visible': isOpen }">
    <div>Attention, <br />
      En continuant vous allez réinitialiser le jeu et perdre les données de la partie en cours.
    </div>
    <div class="resetgame-container__buttons">
      <ButtonRedesigned class="w-32" @click="closePage">Annuler</ButtonRedesigned>
      <ButtonRedesigned class="w-32" @click="handleResetGame">Continuer</ButtonRedesigned>
    </div>
  </div>
</template>

<style scoped>
.resetgame-container {
  background: white;
  color: var(--color-dark);
  z-index: 3000;
  position: fixed;
  top: 40px;
  left: 0;
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  transform: translate(-100%, 0);
  transition: transform ease-in-out 200ms;
  font-family: 'Milonga';
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
  justify-content: space-around;
}

.resetgame-container--is-visible {
  transform: translate(40px, 0);
}

.resetgame-container__buttons {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
