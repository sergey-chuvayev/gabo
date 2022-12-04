<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "@/stores";
import PlayerItem from "./PlayerItem.vue";
import ButtonRedesigned from "./ButtonRedesigned.vue";

export default defineComponent({
  components: {
    PlayerItem,
    ButtonRedesigned,
  },
  methods: {
    onPlayerSaidGabo(playerName: string) {
      const store = useMainStore();
      store.setPlayerRoundGabo(playerName);
    },
    handleEndRoundClick() {
      console.log("clicked end round");
    },
  },
  mounted() {
    const store = useMainStore();
    if (store.players.length === 0) {
      this.$router.push("/game");
    }
  },
  computed: {
    players() {
      const store = useMainStore();
      return store.players;
    },
    rounds() {
      const store = useMainStore();
      return store.rounds;
    },
    currentRound() {
      const store = useMainStore();
      return store.currentRound;
    },
  },
});
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

<style>
.container {
  width: 400px;
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
