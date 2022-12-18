import { getPlayerTotalPoints } from "../index";

describe("getPlayerTotalPoints()", () => {
  it("returns the right result if player said gabo with the same amount of points as other player", () => {
    const map = new Map();
    map.set("First player", { points: 2, saidGabo: true });
    map.set("Second player", { points: 2, saidGabo: false });
    map.set("Third player", { points: 4, saidGabo: false });
    const totalPointsFirstPlayer = getPlayerTotalPoints(
      { totalPoints: 0, name: "First player" },
      map,
      [],
      () => {}
    );
    const totalPointsSecondPlayer = getPlayerTotalPoints(
      { totalPoints: 0, name: "Second player" },
      map,
      [],
      () => {}
    );
    const totalPointsThirdlayer = getPlayerTotalPoints(
      { totalPoints: 0, name: "Third player" },
      map,
      [],
      () => {}
    );
    expect(totalPointsFirstPlayer).equals(0);
    expect(totalPointsSecondPlayer).equals(2);
    expect(totalPointsThirdlayer).equals(4);
  });

  it("returns the right result if player with the minimum points said gabo", () => {
    const map = new Map();
    map.set("First player", { points: 3, saidGabo: true });
    map.set("Second player", { points: 5, saidGabo: false });
    map.set("Third player", { points: 4, saidGabo: false });
    const totalPointsFirstPlayer = getPlayerTotalPoints(
      { totalPoints: 3, name: "First player" },
      map,
      [],
      () => {}
    );
    const totalPointsSecondPlayer = getPlayerTotalPoints(
      { totalPoints: 7, name: "Second player" },
      map,
      [],
      () => {}
    );
    const totalPointsThirdlayer = getPlayerTotalPoints(
      { totalPoints: 5, name: "Third player" },
      map,
      [],
      () => {}
    );
    expect(totalPointsFirstPlayer).equals(-5);
    expect(totalPointsSecondPlayer).equals(12);
    expect(totalPointsThirdlayer).equals(9);
  });

  it("returns the right result if player with not minimum points said gabo", () => {
    const map = new Map();
    map.set("First player", { points: 8, saidGabo: true });
    map.set("Second player", { points: 4, saidGabo: false });
    map.set("Third player", { points: 5, saidGabo: false });
    const totalPointsFirstPlayer = getPlayerTotalPoints(
      { totalPoints: 3, name: "First player" },
      map,
      [],
      () => {}
    );
    const totalPointsSecondPlayer = getPlayerTotalPoints(
      { totalPoints: 7, name: "Second player" },
      map,
      [],
      () => {}
    );
    const totalPointsThirdlayer = getPlayerTotalPoints(
      { totalPoints: 5, name: "Third player" },
      map,
      [],
      () => {}
    );
    expect(totalPointsFirstPlayer).equals(18);
    expect(totalPointsSecondPlayer).equals(11);
    expect(totalPointsThirdlayer).equals(10);
  });

  it("returns the right result if the player gained exactly 100 points", () => {
    const map = new Map();
    map.set("First player", { points: 0, saidGabo: false });
    map.set("Second player", { points: 2, saidGabo: true });
    const totalPointsFirstPlayer = getPlayerTotalPoints(
      { totalPoints: 100, name: "First player" },
      map,
      [],
      () => {}
    );
    expect(totalPointsFirstPlayer).equals(50);
  });
});
