<script setup lang="ts">
import { useMainStore } from "@/stores";
import { defineProps } from "vue";
import type { Player } from "../models/player.model";

type Props = {
  player: Player;
  points: number;
  saidGabo: boolean;
};
defineProps<Props>();
const emit = defineEmits(["onPlayerSaidGabo"]);

const store = useMainStore();

const onIncrementPoints = (playersName: string) => {
  store.incrementPlayerRoundPoints(playersName);
};
const onDecrementPoints = (playersName: string) => {
  store.decrementPlayerRoundPoints(playersName);
};
const handlePlayerSaidGabo = (playerName: string) => {
  emit("onPlayerSaidGabo", playerName);
};
</script>

<template>
  <div class="container">
    <div class="top">
      <div class="name">{{ player.name }}</div>
      <div class="total-points">{{ player.totalPoints }} points totaux</div>
    </div>
    <div class="bottom">
      <div class="counter">
        <button @click="onDecrementPoints(player.name)">–</button>
        <div class="round-points">{{ points }} points</div>
        <button @click="onIncrementPoints(player.name)">+</button>
      </div>
      <button
        :class="saidGabo ? 'saidGabo' : ''"
        class="button"
        @click="handlePlayerSaidGabo(player.name)"
      >
        GABO!
      </button>
    </div>
  </div>
</template>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
}
.name {
  color: black;
}
.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.counter {
  display: flex;
  gap: 4px;
}
.container {
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.button {
  opacity: 0.1;
}
.saidGabo {
  opacity: 1;
}
.total-points,
.round-points {
  color: black;
}
</style>
