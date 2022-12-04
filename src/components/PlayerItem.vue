<script setup lang="ts">
import { useMainStore } from "@/stores";
import { defineProps, computed } from "vue";
import type { Player } from "../models/player.model";

type Props = {
  player: Player;
};
const props = defineProps<Props>();

const onIncrementPoints = (playersName: string) => {
  const store = useMainStore();
  store.incrementPlayerRoundPoints(playersName);
};
const onDecrementPoints = (playersName: string) => {
  const store = useMainStore();
  store.decrementPlayerRoundPoints(playersName);
};

computed(() => {
  console.log('asdasd');

  return {
    player: props.player,
  };
});
</script>

<template>
  <div class="container">
    <div class="top">
      <div class="name">{{ player.name }}</div>
      <div class="total-points">{{ player.totalPoints }} total points</div>
    </div>
    <div class="bottom">
      <div class="counter">
        <button @click="onDecrementPoints(player.name)">–</button>
        <div class="round-points">{{ player.roundPoints }} round points</div>
        <button @click="onIncrementPoints(player.name)">+</button>
      </div>
      <button class="button">GABO!</button>
    </div>
  </div>
</template>

<style>
.top {
  display: flex;
  justify-content: space-between;
}
.name {
  color: white;
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
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
