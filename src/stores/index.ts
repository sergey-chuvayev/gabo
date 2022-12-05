import { defineStore } from "pinia";
import type { Player } from "@/models/player.model";
import type { Round } from "@/models/round.model";

export type RootState = {
  players: Player[];
  rounds: Round[];
  currentRound: number;
};

const TOTAL_GAME_POINTS = 100;

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
    endRound() {
      // UPDATE PLAYERS TOTAL POINTS
      const currentRound = this.rounds[this.currentRound];
      this.players = this.players.map((player) => {
        return {
          ...player,
          totalPoints:
            // APPLY THE GABO RULES:
            // 1. IF PLAYER WITH THE MINIMUM POINTS SAID GABO APPLY FORMULA: TOTAL POINTS - ROUND POINTS - 5
            // 2. IF PLAYER WITH NOT MINIMUM POINTS SAID GABO APPLY FORMULA: TOTAL POINTS + 15
            // 3. IF SOME PLAYER IS OVER 100 (TOTAL_GAME_POINTS) POINTS, GAME IS OVER
            // 4. IF SOME PLAYER HAS EXACTLY 100 POINTS, APPLY FORMULA: TOTAL POINTS + ROUND POINTS - 50 (THIS CAN HAPPEN ONES IN THE GAME)
            // USE THE FUNCTION WITH ALL RULES HERE:
            player.totalPoints + currentRound.get(player.name)!.points,
        };
      });

      // SET NEXT ROUND
      this.currentRound = this.currentRound + 1;
      const round = new Map(
        this.players.map((player) => {
          return [player.name, { points: 0, saidGabo: false }];
        })
      );
      this.rounds.push(round);
    },
  },
});
