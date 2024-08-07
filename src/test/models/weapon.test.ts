import { describe, it, expect } from "vitest";
import Weapon from "../../models/weapon";
import {
  Blade,
  Laser,
  LightCannon,
  LightMissile,
  MagmaBlaster,
  PlasmaBlaster,
} from "../../models/weapon-type";
import { MountLocation } from "../../models/constants";

describe("Weapon", () => {
  it("Applies the Inferno special override when WeaponType has no conflicting special rules", () => {
    const initial = new Weapon(LightCannon, MountLocation.Turret, ["Inferno"]);

    expect(initial.special).toStrictEqual(["Inferno"]);
  });

  it("Ignores Inferno special override if WeaponType has Annihilator special rule", () => {
    const initial = new Weapon(MagmaBlaster, MountLocation.Turret, ["Inferno"]);

    expect(initial.special).toStrictEqual(["Annihilator", "Point Blank"]);
  });

  it("Ignores Inferno special override if WeaponType has Close Combat special rule", () => {
    const initial = new Weapon(Blade, MountLocation.Arm, ["Inferno"]);

    expect(initial.special).toStrictEqual(["Close Combat"]);
  });

  it("Ignores Inferno special override if WeaponType has Flashburn special rule", () => {
    const initial = new Weapon(Laser, MountLocation.Turret, ["Inferno"]);

    expect(initial.special).toStrictEqual(["Anti-Air", "Flashburn"]);
  });

  it("Ignores Inferno special override if WeaponType has Guided Fire special rule", () => {
    const initial = new Weapon(LightMissile, MountLocation.Turret, ["Inferno"]);

    expect(initial.special).toStrictEqual([
      "Anti-Air",
      "Guided Fire",
      "Unstable",
    ]);
  });

  it("Ignores Inferno special override if WeaponType has Plasma Burn special rule", () => {
    const initial = new Weapon(PlasmaBlaster, MountLocation.Turret, [
      "Inferno",
    ]);

    expect(initial.special).toStrictEqual(["Close Action", "Plasma Burn"]);
  });
});
