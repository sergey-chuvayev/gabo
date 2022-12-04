<script lang="ts">
import { defineComponent, ref } from "vue";
import { useMainStore } from "../stores";

export default defineComponent({
  data() {
    return {
      players: new Array<string>(),
      name: ref(""),
    };
  },
  methods: {
    addPlayer() {
      if (this.name !== "") {
        this.players = [...this.players, this.name];
        this.name = "";
      }
    },
    startGame() {
      const store = useMainStore();
      store.createPlayers(this.players);
      this.$router.push("/game/round");
    },
  },
});
</script>

<template>
  <div class="container">
    <h1>Create players</h1>
    <div class="input">
      <label for="name">Enter {{ players.length + 1 }} player's name</label>
      <input type="text" v-model="name" placeholder="Player's name" />
    </div>
    <div class="buttons">
      <button @click="addPlayer">Next player</button>
    </div>
    <button v-if="players.length >= 2" @click="startGame" class="start-game">
      Start game
    </button>
  </div>
</template>

<style>
.container {
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.buttons {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.start-game {
  margin-top: 64px;
}
</style>
