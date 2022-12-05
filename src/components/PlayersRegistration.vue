<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { useMainStore } from "../stores";

let players = ref<string[]>([]);
let name = ref<string>("");

const addPlayer = () => {
  if (name.value !== "") {
    players.value = [...players.value, name.value];
    name.value = "";
  }
};

const startGame = () => {
  const store = useMainStore();
  store.createPlayers(players.value);
  router.push("/game/round");
};
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

<style scoped>
.container {
  width: 320px;
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
