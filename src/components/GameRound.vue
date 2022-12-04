<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "@/stores";
import PlayerItem from "./PlayerItem.vue";

export default defineComponent({
  components: {
    PlayerItem,
  },
  computed: {
    players() {
      const store = useMainStore();
      return store.players;
    },
  },
});
</script>

<template>
  <div class="container">
    <h1>Round 1</h1>
    <div class="players-list">
      <div class="player-item" v-for="player in players" :key="player.name">
        <PlayerItem :player="player" />
      </div>
    </div>
    <button class="end-round">End round</button>
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
