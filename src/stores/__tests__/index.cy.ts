import { getPlayerTotalPoints } from "../index";

describe("getPlayerTotalPoints()", () => {
  it("IF PLAYER SAID GABO WITH THE SAME AMOUNT OF POINTS AS OTHER PLAYER", () => {
    const map = new Map();
    map.set("First player", { points: 2, saidGabo: true });
    map.set("Second player", { points: 2, saidGabo: false });
    const totalPoints = getPlayerTotalPoints(
      { totalPoints: 0, name: "First player" },
      map,
      true,
      () => {}
    );
    expect(totalPoints).equals(0);
  });

  it("IF PLAYER WITH THE MINIMUM POINTS SAID GABO", () => {
    const map = new Map();
    map.set("First player", { points: 3, saidGabo: true });
    map.set("Second player", { points: 5, saidGabo: false });
    const totalPoints = getPlayerTotalPoints(
      { totalPoints: 3, name: "First player" },
      map,
      true,
      () => {}
    );
    expect(totalPoints).equals(-5);
  });

  it("IF PLAYER WITH NOT MINIMUM POINTS SAID GABO", () => {
    const map = new Map();
    map.set("First player", { points: 8, saidGabo: true });
    map.set("Second player", { points: 4, saidGabo: false });
    const totalPoints = getPlayerTotalPoints(
      { totalPoints: 3, name: "First player" },
      map,
      true,
      () => {}
    );
    expect(totalPoints).equals(18);
  });

  it("IF SOME PLAYER HAS EXACTLY 100 POINTS", () => {
    const map = new Map();
    map.set("First player", { points: 0, saidGabo: false });
    map.set("Second player", { points: 2, saidGabo: true });
    const totalPoints = getPlayerTotalPoints(
      { totalPoints: 100, name: "First player" },
      map,
      false,
      () => {}
    );
    expect(totalPoints).equals(50);
  });
});
