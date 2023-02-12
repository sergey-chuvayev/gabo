<script setup lang="ts">
import { computed, ref, watch, onBeforeMount } from "vue";
import { useMainStore } from "@/stores";
import router from "@/router";
import PlayerItem from "./PlayerItem.vue";
import ButtonRedesigned from "./ButtonRedesigned.vue";
import useSound from "vue-use-sound";
import endRoundSound from "../assets/endRound.wav";
import Modal from "./ui/Modal.vue";

const store = useMainStore();
const [playEndRoundSound] = useSound(endRoundSound);

const players = computed(() => store.players);
const rounds = computed(() => store.rounds);
const currentRound = computed(() => store.currentRound);

let allPlayersHaveZeroPoints = ref(false);
let somePlayersHaveNoGabo = ref(false);
let resetGameModalOpen = ref(false);

const onPlayerSaidGabo = (playerName: string) => {
  store.setPlayerRoundGabo(playerName);
};
const handleEndRoundClick = () => {
  if (checkAllPlayersHaveZeroPoints() || checkSomePlayersHaveNoGabo()) {
    allPlayersHaveZeroPoints.value = checkAllPlayersHaveZeroPoints();
    somePlayersHaveNoGabo.value = checkSomePlayersHaveNoGabo();
  } else {
    playEndRoundSound();
    store.endRound();
  }
};

const handleResetGame = () => {
  // show modal first "Are you sure to end and reset the game?"
  store.resetGame();
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

const toggleResetGameModal = () => {
  resetGameModalOpen.value = !resetGameModalOpen.value;
};

const checkSomePlayersHaveNoGabo = () => {
  return ![...rounds.value[currentRound.value].values()].find(
    (value) => value.saidGabo
  );
};
</script>

<template>
  <Modal
    :isOpen="resetGameModalOpen"
    title="Attention"
    description="En continuant vous allez réinitialiser le jeu et perdre les données de la partie en cours."
  >
    <div class="modal-buttons">
      <ButtonRedesigned
        type="submit"
        @click="toggleResetGameModal"
      >
        Annuler
      </ButtonRedesigned>
      <ButtonRedesigned
        type="submit"
        class="mt-2"
        @click="handleResetGame"
      >
        Reset
      </ButtonRedesigned>
    </div>
  </Modal>
  <div class="container">
    <h1 class="game-round-title">Manche {{ currentRound + 1 }}</h1>
    <div class="players-list">
      <div class="player-item" v-for="player in players" :key="player.name">
        <div class="player-item__delimiter"></div>
        <PlayerItem
          :points="rounds[currentRound].get(player.name)!.points"
          :player="player"
          :saidGabo="rounds[currentRound].get(player.name)!.saidGabo"
          @onPlayerSaidGabo="onPlayerSaidGabo"
        />
      </div>
    </div>
    <ButtonRedesigned @click="handleEndRoundClick" class="end-round">
      Prochaine manche
    </ButtonRedesigned>
    <ButtonRedesigned
      variant="ghost"
      @click="toggleResetGameModal"
      class="mt-2"
    >
      Reset game
    </ButtonRedesigned>
    <div v-if="allPlayersHaveZeroPoints || somePlayersHaveNoGabo" class="issue">
      Vous devez indiquer le nombre de points de chaque joueur et désigner qui a
      prononcé Gabo
    </div>
  </div>
</template>

<style scoped>
.game-round-title {
  font-size: 22px;
  font-family: "Jost";
}
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

.player-item__delimiter {
  background-color: var(--color-dark);
  mask: url(/delimiter2.svg) no-repeat center / contain;
  -webkit-mask: url(/delimiter2.svg) no-repeat center / contain;
  height: 20px;
  width: 330px;
}

.end-round {
  margin-top: 64px;
}

.issue {
  margin-top: 20px;
  font-family: "Lancelot";
}

.modal-buttons {
  display: flex;
  flex-direction: column;
}
</style>
