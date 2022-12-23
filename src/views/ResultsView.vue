<script setup lang="ts">
import { useMainStore } from "@/stores";
import type { Player } from "../models/player.model";

const store = useMainStore();

const isWinner = (player: Player, players: Player[]) => {
  let winner = players[0];
  let minimumPoints = players[0].totalPoints;
  players.forEach((player) => {
    if (player.totalPoints < minimumPoints) {
      minimumPoints = player.totalPoints;
      winner = player;
    }
  });
  return player.name === winner.name;
};

const players: { name: string; totalPoints: number; isWinner: boolean }[] =
  store.players
    .sort((player1, player2) => player1.totalPoints - player2.totalPoints)
    .map((player) => {
      if (isWinner(player, store.players)) {
        return {
          ...player,
          isWinner: true,
        };
      }
      return {
        ...player,
        isWinner: false,
      };
    });
</script>

<template>
  <main class="flex m-0-auto w-[320px] flex-col">
    <h1 class="text-xl mb-4">Results</h1>
    <div class="item" v-for="player in players" :key="player.name">
      <div class="mb-2" v-if="player.isWinner">Winner</div>
      <div class="flexed">
        <div class="name">{{ player.name }}</div>
        <div>{{ player.totalPoints }} total points</div>
      </div>
    </div>
    <PlayeRresultItem :player="players[0]" :isWinner="false" />
  </main>
</template>

<style scoped>
.item {
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px dashed var(--color-dark);
}

.flexed {
  display: flex;
  justify-content: space-between;
}
.item:last-child {
  margin-bottom: 0;
}
.name {
  font-weight: bold;
}
</style>
