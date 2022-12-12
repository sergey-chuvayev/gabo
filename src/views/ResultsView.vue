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
  <main>
    <h1>Results</h1>
    <div class="item" v-for="player in players" :key="player.name">
      <div v-if="player.isWinner">Winner</div>
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
