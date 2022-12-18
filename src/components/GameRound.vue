<script setup lang="ts">
import { computed, ref, watch, onBeforeMount } from "vue";
import { useMainStore } from "@/stores";
import router from "@/router";
import PlayerItem from "./PlayerItem.vue";
import ButtonRedesigned from "./ButtonRedesigned.vue";

const store = useMainStore();

const players = computed(() => store.players);
const rounds = computed(() => store.rounds);
const currentRound = computed(() => store.currentRound);

let allPlayersHaveZeroPoints = ref(false);
let somePlayersHaveNoGabo = ref(false);

const onPlayerSaidGabo = (playerName: string) => {
  store.setPlayerRoundGabo(playerName);
};
const handleEndRoundClick = () => {
  if (checkAllPlayersHaveZeroPoints() || checkSomePlayersHaveNoGabo()) {
    allPlayersHaveZeroPoints.value = checkAllPlayersHaveZeroPoints();
    somePlayersHaveNoGabo.value = checkSomePlayersHaveNoGabo();
  } else {
    store.endRound();
  }
};

onBeforeMount(() => {
  if (players.value.length === 0) {
    router.push("/game/registration");
  }
});

watch(currentRound, () => {
  allPlayersHaveZeroPoints.value = false;
  somePlayersHaveNoGabo.value = false;
});

const checkAllPlayersHaveZeroPoints = () => {
  return [...rounds.value[currentRound.value].values()].every(
    (value) => value.points === 0
  );
};
const checkSomePlayersHaveNoGabo = () => {
  return ![...rounds.value[currentRound.value].values()].find(
    (value) => value.saidGabo
  );
};
</script>

<template>
  <div class="container">
    <h1>Manche {{ currentRound + 1 }}</h1>
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
      Fin de la manche
    </ButtonRedesigned>
    <div v-if="allPlayersHaveZeroPoints || somePlayersHaveNoGabo">
      Vous devez indiquer le nombre de points de chaque joueur et désigner qui a prononcé Gabo
    </div>
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
