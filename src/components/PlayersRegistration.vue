<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { useMainStore } from "../stores";

const MAX_PLAYERS = 10;

let players = ref<string[]>([]);
let name = ref<string>("");
let error = ref<string>("");
let errNumberOfPlayers = ref<string>("");

const addPlayer = () => {
  if (players.value.includes(name.value)) {
    error.value = "Ce nom de joueur est déjà pris";
    return;
  }

  if (name.value !== "" && name.value.trim() !== "") {
    players.value = [...players.value, name.value];
    name.value = "";
    error.value = "";
  } else {
    error.value = "Le nom du joueur ne peut pas être vide";
  }
};

const getNumberWord = (num: number) => {
  const words = [
    "premier",
    "deuxième",
    "troisième",
    "quatrième",
    "cinquième",
    "sixième",
    "septième",
    "huitième",
    "neuvième",
    "dixième",
  ];
  return words[num];
};

const startGame = () => {
  addPlayer();
  if ( players.value.length < 2 ) {
    errNumberOfPlayers.value = 'Vous devez être au moins deux joueurs pour jouer';
    return;
  }
  errNumberOfPlayers.value = '';
  const store = useMainStore();
  store.createPlayers(players.value);
  router.push("/game/round");
};
</script>

<template>
  <div class="container">
    <h1>Ajouter un joueur</h1>
    <form v-on:submit.prevent="addPlayer">
      <div class="input">
        <label for="name"
          >Entrer le nom du {{ getNumberWord(players.length) }} joueur</label
        >
        <input type="text" v-model="name" placeholder="Nom du joueur" />
      </div>
      <div class="buttons">
        <button v-if="players.length <= MAX_PLAYERS - 2" type="submit">
          Joueur suivant
        </button>
      </div>
      <div v-if="error !== ''">{{ error }}</div>
    </form>
    <button v-if="players.length >= 1" @click="startGame" class="start-game">
      Commencer la partie
    </button>
    <div v-if="errNumberOfPlayers">{{ errNumberOfPlayers }}</div>
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
