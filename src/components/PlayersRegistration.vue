<script setup lang="ts">
import router from "@/router";
import { onBeforeMount, ref } from "vue";
import { useMainStore } from "../stores";
import ButtonRedesigned from "./ButtonRedesigned.vue";
import Modal from "./ui/Modal.vue";

const MAX_PLAYERS = 10;

let players = ref<string[]>([]);
let name = ref<string>("");
let error = ref<string>("");
let errNumberOfPlayers = ref<string>("");

const store = useMainStore();

onBeforeMount(() => {
  if (store.players.length > 0) {
    router.push("/game/round");
  }
});

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
  if (players.value.length < 2) {
    errNumberOfPlayers.value =
      "Vous devez être au moins deux joueurs pour jouer";
    return;
  }
  errNumberOfPlayers.value = "";
  store.createPlayers(players.value);
  router.push("/game/round");
};
</script>

<template>
  <Modal :isOpen="false" title="Some timte is here">
    <div>Some desctiotion</div>
    <ButtonRedesigned
      v-if="players.length <= MAX_PLAYERS - 2"
      type="submit"
      class="button-next-player"
    >
      Joueur suivant
    </ButtonRedesigned>
    <ButtonRedesigned
      v-if="players.length <= MAX_PLAYERS - 2"
      type="submit"
      class="button-next-player"
    >
      Joueur suivant
    </ButtonRedesigned>
  </Modal>
  <div class="container">
    <h1>Ajouter un joueur</h1>
    <form v-on:submit.prevent="addPlayer">
      <div class="input">
        <label for="name"
          >Entrer le nom du {{ getNumberWord(players.length) }} joueur</label
        >
        <input
          type="text"
          v-model="name"
          placeholder="Nom du joueur"
          class="input-area"
        />
        <div class="error" v-if="error !== ''">{{ error }}</div>
      </div>
      <div class="buttons">
        <ButtonRedesigned
          v-if="players.length <= MAX_PLAYERS - 2"
          type="submit"
          class="button-next-player"
        >
          Joueur suivant
        </ButtonRedesigned>
      </div>
    </form>
    <ButtonRedesigned v-if="players.length >= 1" @click="startGame">
      Commencer la partie
    </ButtonRedesigned>
    <div class="error mt-8" v-if="errNumberOfPlayers">
      {{ errNumberOfPlayers }}
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
.error {
  color: #b92828;
  font-size: 12px;
}
.mt-8 {
  margin-top: 8px;
}

.buttons {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
}
.button-next-player {
  margin-bottom: 32px;
  padding: 8px 24px;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}
.input-area {
  background: white;
  border: 2px solid var(--color-dark);
  box-shadow: 2px 2px 0px var(--color-dark);
  border-radius: 4px;
  padding: 4px 8px;
  font-family: "Jost";
  font-size: 14px;
  outline: none;
}
.start-game {
  margin-top: 64px;
}
</style>
