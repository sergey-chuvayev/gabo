import type { Player } from "@/models/player.model";
import type { Round } from "@/models/round.model";
import { defineStore } from "pinia";

export type RootState = {
  players: Player[];
  rounds: Round[];
  currentRound: number;
};

const defaultPlayers: Player[] = [
  {
    name: "Constick",
    totalPoints: 0,
  },
  {
    name: "Sergick",
    totalPoints: 0,
  },
];

const map = new Map();
map.set("Constick", { points: 0, saidGabo: false });
map.set("Sergick", { points: 0, saidGabo: false });

const defaultRounds: Round[] = [map];

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      players: defaultPlayers,
      rounds: defaultRounds,
      currentRound: 0,
    } as RootState),
  actions: {
    createPlayers(names: string[]) {
      this.players = names.map((name) => ({
        name,
        totalPoints: 0,
        roundPoints: 0,
      }));
      const round = new Map(
        this.players.map((player) => {
          return [player.name, { points: 0, saidGabo: false }];
        })
      );
      this.rounds = [round];
    },
    incrementPlayerRoundPoints(playerName: string) {
      const currentRound = this.rounds[this.currentRound];
      currentRound.set(playerName, {
        points: currentRound.get(playerName)!.points + 1,
        saidGabo: currentRound.get(playerName)!.saidGabo,
      });
    },
    decrementPlayerRoundPoints(playerName: string) {
      const currentRound = this.rounds[this.currentRound];
      currentRound.set(playerName, {
        points: currentRound.get(playerName)!.points - 1,
        saidGabo: currentRound.get(playerName)!.saidGabo,
      });
    },
    setPlayerRoundGabo(playerName: string) {
      const currentRound = this.rounds[this.currentRound];
      [...currentRound.keys()].map((key) => {
        currentRound.set(key, {
          points: currentRound.get(key)!.points,
          saidGabo: false,
        });
      });
      currentRound.set(playerName, {
        points: currentRound.get(playerName)!.points,
        saidGabo: true,
      });
    },
  },
});
