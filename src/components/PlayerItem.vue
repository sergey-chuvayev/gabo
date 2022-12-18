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
      <div class="name">
        {{ player.name }}
        <span v-if="store.userNamesWithReductionPoints.includes(player.name)"
          >🙀</span
        >
      </div>

      <div class="total-points">Total {{ player.totalPoints }}</div>
    </div>
    <div class="bottom">
      <div class="counter">
        <ButtonRedesigned
          :class="{ 'btn-disabled': points < 1 }"
          :disabled="points < 1"
          @click="onDecrementPoints(player.name)"
          class="counter-btn"
        >
          <img src="/minus.svg" alt="-" />
        </ButtonRedesigned>
        <div class="round-points">{{ points }}</div>
        <ButtonRedesigned
          @click="onIncrementPoints(player.name)"
          class="counter-btn"
        >
          <img src="/plus.svg" alt="+" />
        </ButtonRedesigned>
      </div>
      <ButtonRedesigned
        :class="saidGabo ? 'saidGabo' : ''"
        class="btn-unactivated"
        @click="handlePlayerSaidGabo(player.name)"
      >
        Gabo 👋
      </ButtonRedesigned>
    </div>
  </div>
</template>

<style scoped>

.container {
  font-family: 'Jost';

}
.top {
  display: flex;
  justify-content: space-between;
  font-size: 26px;
}
.name {
  color: black;
}
.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  align-items: center;
}
.counter {
  display: flex;
  align-items: center;
  width: 175px;
  justify-content: space-around;
}
.btn-unactivated {
  opacity: 0.6;
}

.btn-disabled {
  opacity: 0.6;
  cursor: default;
}

.counter-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.container {
  width: 320px;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
}

.saidGabo {
  opacity: 1;
}
.total-points {
}
.round-points {
  font-size: 32px;
  color: black;
}
</style>
