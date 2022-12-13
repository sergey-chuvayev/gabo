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
});
