<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "@/stores";
import PlayerItem from "./PlayerItem.vue";
import ButtonRedesigned from "./ButtonRedesigned.vue";

const store = useMainStore();

const players = computed(() => store.players);
const rounds = computed(() => store.rounds);
const currentRound = computed(() => store.currentRound);

const onPlayerSaidGabo = (playerName: string) => {
  store.setPlayerRoundGabo(playerName);
};
const handleEndRoundClick = () => {
  store.endRound();
};
</script>

<template>
  <div class="container">
    <h1>Round {{ currentRound + 1 }}</h1>
    <div class="players-list">
      <div class="player-item" v-for="player in players" :key="player.name">
        <PlayerItem
          :points="rounds[currentRound].get(player.name)!.points"
          :player="player"
          :saidGabo="rounds[currentRound].get(player.name)!.saidGabo"
          @onPlayerSaidGabo="onPlayerSaidGabo"
        />
      </div>
    </div>
    <ButtonRedesigned @click="handleEndRoundClick" class="end-round">
      End round
    </ButtonRedesigned>
  </div>
</template>

<style scoped>
.container {
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.players-list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.end-round {
  margin-top: 64px;
}
</style>
