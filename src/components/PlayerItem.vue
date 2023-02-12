<script setup lang="ts">
import { useMainStore } from "@/stores";
import { defineProps } from "vue";
import useSound from "vue-use-sound";
import type { Player } from "../models/player.model";
import clickUpSound from "../assets/up.wav";
import clickDownSound from "../assets/down.wav";
import saidGaboSound from "../assets/saidGabo.wav";
import ButtonRedesigned from "./ButtonRedesigned.vue";

type Props = {
  player: Player;
  points: number;
  saidGabo: boolean;
  hasNoCards: boolean;
};
defineProps<Props>();
const emit = defineEmits(["onPlayerSaidGabo", "onTogglePlayerSaidNoCards"]);

const store = useMainStore();
const [playUpClick] = useSound(clickUpSound);
const [playDownClick] = useSound(clickDownSound);
const [playSaidGaboSound] = useSound(saidGaboSound);

const onIncrementPoints = (playersName: string) => {
  playUpClick();
  store.incrementPlayerRoundPoints(playersName);
};
const onDecrementPoints = (playersName: string) => {
  playDownClick();
  store.decrementPlayerRoundPoints(playersName);
};
const handlePlayerSaidGabo = (playerName: string) => {
  playSaidGaboSound();
  emit("onPlayerSaidGabo", playerName);
};
const handlePlayerSaidNoCards = (playerName: string) => {
  emit("onTogglePlayerSaidNoCards", playerName);
};
</script>

<template>
  <div class="container">
    <div class="top" :class="hasNoCards ? 'top--no-cards' : ''">
      <div class="name">
        {{ player.name }}
        <span v-if="store.userNamesWithReductionPoints.includes(player.name)">🙀</span>
      </div>

      <div class="total-points">Total {{ player.totalPoints }}</div>
    </div>
    <div class="bottom">
      <div class="counter" v-if="!hasNoCards">
        <ButtonRedesigned :class="{ 'btn-disabled': points < 1 }" :disabled="points < 1"
          @click="onDecrementPoints(player.name)" class="counter-btn">
          <img src="/minus.svg" alt="-" />
        </ButtonRedesigned>
        <div class="round-points">{{ points }}</div>
        <ButtonRedesigned @click="onIncrementPoints(player.name)" class="counter-btn">
          <img src="/plus.svg" alt="+" />
        </ButtonRedesigned>
      </div>
      <div class="counter" v-if="hasNoCards"></div>

      <ButtonRedesigned class="counter-btn" :variant="hasNoCards ? 'primary' : 'ghost'"
        @click="handlePlayerSaidNoCards(player.name)">
        🤲
      </ButtonRedesigned>
      <ButtonRedesigned class="counter-btn" :variant="saidGabo ? 'primary' : 'ghost'"
        @click="handlePlayerSaidGabo(player.name)" :class="hasNoCards ? 'btn-gabo-disabled' : ''"
        :disabled='hasNoCards'>
        Gabo
      </ButtonRedesigned>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: "Jost";
}

.top {
  display: flex;
  justify-content: space-between;
  font-size: 26px;
}

.top--no-cards {
  opacity: 50%;
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

.counter--no-cards {
  opacity: 50%;
}

.counter-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.btn-gabo-disabled {
  opacity: 50%;
}

.container {
  width: 320px;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
}


.round-points {
  font-size: 32px;
  color: black;
}
</style>
