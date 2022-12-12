import { defineStore } from "pinia";
import type { Player } from "@/models/player.model";
import type { Round } from "@/models/round.model";
import router from '@/router';

export type RootState = {
  players: Player[];
  rounds: Round[];
  currentRound: number;
  hasPointsReductionHappened: boolean;
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
      players: [],
      rounds: [],
      currentRound: 0,
      hasPointsReductionHappened: false,
    } as RootState),
  actions: {
    setHasPointsReductionHappened() {
      this.hasPointsReductionHappened = true;
    },
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
      const currentRound = this.rounds[this.currentRound];
      this.players = this.players.map((player) => {
        return {
          ...player,
          totalPoints: getPlayerTotalPoints(player, currentRound),
        };
      });

      // GAME IS OVER
      if (
        this.players.some((player) => player.totalPoints > TOTAL_GAME_POINTS)
      ) {
        router.push("/game/results");
        return;
      }

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

const getPlayerTotalPoints = (player: Player, currentRound: Round) => {
  const playerWithMinimumPoints = getPlayerWithMinimumPoints(currentRound);
  const store = useMainStore();

  // IF PLAYER WITH THE MINIMUM POINTS SAID GABO APPLY FORMULA: TOTAL POINTS - ROUND POINTS - 5
  if (
    currentRound.get(player.name)!.saidGabo &&
    playerWithMinimumPoints === player.name
  ) {
    return player.totalPoints - currentRound.get(player.name)!.points - 5;
  }

  // IF PLAYER WITH NOT MINIMUM POINTS SAID GABO APPLY FORMULA: TOTAL POINTS + 15
  if (
    currentRound.get(player.name)!.saidGabo &&
    playerWithMinimumPoints !== player.name
  ) {
    return player.totalPoints + 15;
  }

  // IF SOME PLAYER HAS EXACTLY 100 POINTS, APPLY FORMULA: TOTAL POINTS + ROUND POINTS - 50 (THIS CAN HAPPEN ONES IN THE GAME)
  if (
    player.totalPoints + currentRound.get(player.name)!.points ===
      TOTAL_GAME_POINTS &&
    !store.hasPointsReductionHappened
  ) {
    store.setHasPointsReductionHappened();
    return player.totalPoints - 50;
  }

  return player.totalPoints + currentRound.get(player.name)!.points;
};

const getPlayerWithMinimumPoints = (round: Round) => {
  const roundArray: [string, { saidGabo: boolean; points: number }][] = [
    ...round.entries(),
  ];

  let playerNameWithMinimumPoints = roundArray[0][0];
  let minimumPoints = roundArray[0][1].points;
  roundArray.forEach((roundItem) => {
    if (roundItem[1].points < minimumPoints) {
      minimumPoints = roundItem[1].points;
      playerNameWithMinimumPoints = roundItem[0];
    }
  });

  return playerNameWithMinimumPoints;
};
