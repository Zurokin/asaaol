import { Magician, Daemon } from "./Character";

describe("Character Attack Tests", () => {
  let magician;
  let daemon;

  beforeEach(() => {
    magician = new Magician(100);
    daemon = new Daemon(100);
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
    expect(magician.getAttack(1)).toBe(100);
  });

  test("Magician attack with being stoned (distance 2)", () => {
    magician.stonedStatus = true;
    expect(magician.getAttack(2)).toBeCloseTo(85, 2);
  });

  test("Daemon attack without being stoned (distance 3)", () => {
    expect(daemon.getAttack(3)).toBe(80);
  });

  test("Daemon attack with being stoned (distance 4)", () => {
    daemon.stonedStatus = true;
    expect(daemon.getAttack(4)).toBeCloseTo(60, 2);
  });

  test("Magician attack with being stoned (distance 5)", () => {
    magician.stonedStatus = true;
    expect(magician.getAttack(5)).toBeCloseTo(48.39, 2);
  });

  test("Daemon attack with being stoned (distance >= 5)", () => {
    daemon.stonedStatus = true;
    expect(daemon.getAttack(5)).toBeCloseTo(60 - Math.log2(5) * 5, 2);
    expect(daemon.getAttack(6)).toBeCloseTo(60 - Math.log2(6) * 5, 2);
    expect(daemon.getAttack(7)).toBeCloseTo(60 - Math.log2(7) * 5, 2);
    expect(daemon.getAttack(8)).toBeCloseTo(60 - Math.log2(8) * 5, 2);
    expect(daemon.getAttack(9)).toBeCloseTo(60 - Math.log2(9) * 5, 2);
  });
});
