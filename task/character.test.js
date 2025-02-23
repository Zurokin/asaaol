import { Magician, Daemon } from "./Character";

describe("Character Attack Tests", () => {
  let magician;
  let daemon;

  beforeEach(() => {
    magician = new Magician(100);
    daemon = new Daemon(100);
  });

  test("Magician attack setter should update baseAttack", () => {
    const magician = new Magician(100);
    magician.attack = 120;
    expect(magician.attack).toBe(120);
  });

  test("Daemon distance setter should update distance", () => {
    const daemon = new Daemon(100);
    daemon.distance = 3;
    expect(daemon.distance).toBe(3);
  });

  test("Magician stonedStatus getter/setter", () => {
    magician.stonedStatus = true;
    expect(magician.stonedStatus).toBe(true);
  });

  test("Daemon stonedStatus getter/setter", () => {
    daemon.stonedStatus = false;
    expect(daemon.stonedStatus).toBe(false);
  });

  test("Magician attack without being stoned (distance 1)", () => {
    magician.distance = 1;
    expect(magician.attack).toBe(100);
  });

  test("Magician attack with being stoned (distance 2)", () => {
    magician.stonedStatus = true;
    magician.distance = 2;
    expect(magician.attack).toBeCloseTo(85, 2);
  });

  test("Daemon attack without being stoned (distance 3)", () => {
    daemon.distance = 3;
    expect(daemon.attack).toBe(80);
  });

  test("Daemon attack with being stoned (distance 4)", () => {
    daemon.stonedStatus = true;
    daemon.distance = 4;
    console.log(`Test Attack Value: ${magician.attack}`);
    expect(daemon.attack).toBeCloseTo(60, 2);
  });

  test("Magician attack with being stoned (distance 5)", () => {
    magician.stonedStatus = true;
    magician.distance = 5;
    expect(magician.attack).toBeCloseTo(48, 0);
  });
});
