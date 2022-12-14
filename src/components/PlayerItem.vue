<script setup lang="ts">
import { useMainStore } from "@/stores";
import { defineProps } from "vue";
import type { Player } from "../models/player.model";
import ButtonRedesigned from "./ButtonRedesigned.vue";

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
        <ButtonRedesigned
          v-if="points >= 1"
          @click="onDecrementPoints(player.name)"
          class="counter-btn"
        >
          –
        </ButtonRedesigned>
        <div v-if="points < 1" class="counter__blank-space"></div>
        <div class="round-points">{{ points }} points</div>
        <ButtonRedesigned
          @click="onIncrementPoints(player.name)"
          class="counter-btn"
          >+</ButtonRedesigned
        >
      </div>
      <ButtonRedesigned
        :class="saidGabo ? 'saidGabo' : ''"
        class="gabo-btn"
        @click="handlePlayerSaidGabo(player.name)"
      >
        GABO!
      </ButtonRedesigned>
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
.counter__blank-space {
  width: var(--btn-width);
}

.counter-btn {
  width: var(--btn-width);
}
.container {
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.gabo-btn {
  opacity: 0.6;
}
.saidGabo {
  opacity: 1;
}
.total-points,
.round-points {
  color: black;
}
</style>
