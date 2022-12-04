import type { Player } from "@/models/player.model";
import { defineStore } from "pinia";

export type RootState = {
  players: Player[];
};

const defaultPlayers: Player[] = [
  {
    name: "Sergey",
    totalPoints: 0,
    roundPoints: 0,
  },
  {
    name: "Constick",
    totalPoints: 0,
    roundPoints: 0,
  },
  {
    name: "Francois",
    totalPoints: 0,
    roundPoints: 0,
  },
];

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      players: defaultPlayers,
    } as RootState),
  actions: {
    createPlayers(names: string[]) {
      this.players = names.map((name) => ({
        name,
        totalPoints: 0,
        roundPoints: 0,
      }));
    },
    incrementPlayerRoundPoints(playerName: string) {
      this.players = this.players.map((player) => {
        if (player.name === playerName) {
          return {
            ...player,
            roundPoints: player.roundPoints + 1,
          };
        }
        return player;
      });
    },
    decrementPlayerRoundPoints(playerName: string) {
      this.players = this.players.map((player) => {
        if (player.name === playerName) {
          return {
            ...player,
            roundPoints: player.roundPoints - 1,
          };
        }
        return player;
      });
    },
  },
});
