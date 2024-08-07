import { describe, it, expect } from "vitest";
import { EmptyMount, FilledMount, Mount, MountSet } from "../../models/mount";
import { LightArmMount, LightFixedMount } from "../../models/mount-type";
import Weapon from "../../models/weapon";
import { Blade } from "../../models/weapon-type";
import { MountLocation } from "../../models/constants";

describe("MountSet", () => {
  describe("constructor", () => {
    it("should apply special overrides to mounts at construction time", () => {
      const mountSet = new MountSet(
        [new EmptyMount(LightArmMount, "lam-1", [], false)],
        ["Test Override"],
      );

      expect(mountSet.specialOverrides).toStrictEqual(["Test Override"]);
      expect(mountSet.mounts[0].specialOverrides).toStrictEqual([
        "Test Override",
      ]);
    });
  });

  describe("fromMountSetShape()", () => {
    it("should return a MountSet that copies the provided MountSetShape", () => {
      const initial = new MountSet([
        new EmptyMount(LightFixedMount, "lfm-1", ["Test"]),
      ]);

      const modified = MountSet.fromMountSetShape(initial);

      expect(modified).not.toBe(initial);
      expect(modified).toStrictEqual(initial);
    });
  });

  describe("copy()", () => {
    it("should return a MountSet that copies the provided MountSetShape", () => {
      const initial = new MountSet([
        new EmptyMount(LightFixedMount, "lfm-1", ["Test"]),
      ]);

      const modified = initial.copy();

      expect(modified).not.toBe(initial);
      expect(modified).toStrictEqual(initial);
    });
  });

  describe("addMount()", () => {
    it("should return a new MountSet with the added mount", () => {
      const initial = new MountSet([]);

      const modified = initial.addMount(
        new FilledMount(
          LightArmMount,
          "lam-1",
          new Weapon(Blade, MountLocation.Arm),
          [],
          false,
        ),
      );

      expect(initial.mounts.length).toBe(0);
      expect(modified.mounts.length).toBe(1);
      expect(modified).not.toBe(initial);
    });

    it("should apply special override to added mount", () => {
      const initial = new MountSet([], ["Test Override"]);

      const modified = initial.addMount(
        new EmptyMount(LightArmMount, "lam-1", [], false),
      );

      expect(modified.specialOverrides).toStrictEqual(["Test Override"]);
      expect(modified.mounts[0].specialOverrides).toStrictEqual([
        "Test Override",
      ]);
    });
  });

  describe("removeMountById()", () => {
    it("should remove the mount with the specified ID", () => {
      const targetId = "mount to remove";
      const initial = new MountSet([
        new EmptyMount(LightArmMount, targetId, []),
        new EmptyMount(LightFixedMount, "lfm-1", []),
      ]);

      const modified = initial.removeMountById(targetId);

      expect(modified.mounts).toStrictEqual([
        new EmptyMount(LightFixedMount, "lfm-1", []),
      ]);
    });

    it("should return a new MountSet without the removed mount", () => {
      const targetId = "mount to remove";
      const initial = new MountSet([
        new EmptyMount(LightArmMount, targetId, []),
      ]);

      const modified = initial.removeMountById(targetId);

      expect(initial.mounts.length).toBe(1);
      expect(modified.mounts.length).toBe(0);
      expect(modified).not.toBe(initial);
    });

    it("should return the same MountSet if no Mount matches the ID to remove", () => {
      const initial = new MountSet([
        new EmptyMount(LightArmMount, "lam-1", []),
      ]);

      const modified = initial.removeMountById("ID with no match");

      expect(modified).toBe(initial);
    });
  });

  describe("removeMountFromLocation()", () => {
    it("should remove the mount with the lexicographically-highest ID", () => {
      const initial = new MountSet([
        new EmptyMount(LightArmMount, "lam-1", []),
        new EmptyMount(LightArmMount, "lam-2", []),
      ]);

      const modified = initial.removeMountFromLocation(MountLocation.Arm);

      expect(modified.mounts).toStrictEqual([
        new EmptyMount(LightArmMount, "lam-1", []),
      ]);
    });

    it("should return a new MountSet without the removed mount", () => {
      const initial = new MountSet([
        new EmptyMount(LightArmMount, "lam-1", []),
      ]);

      const modified = initial.removeMountFromLocation(MountLocation.Arm);

      expect(initial.mounts.length).toBe(1);
      expect(modified.mounts.length).toBe(0);
      expect(modified).not.toBe(initial);
    });

    it("should return the same MountSet if no Mount matches the MountLocation to remove from", () => {
      const initial = new MountSet([
        new EmptyMount(LightArmMount, "lam-1", []),
      ]);

      const modified = initial.removeMountFromLocation(MountLocation.Fixed);

      expect(modified).toBe(initial);
    });
  });

  describe("addSpecialOverride()", () => {
    it("should sort the special overrides after adding a new override", () => {
      const initial = new MountSet([], ["Later"]);

      const modified = initial
        .addSpecialOverride("Earlier")
        .addSpecialOverride("Most Late")
        .addSpecialOverride("An even earlier one");

      expect(modified.specialOverrides).toStrictEqual([
        "An even earlier one",
        "Earlier",
        "Later",
        "Most Late",
      ]);
    });

    it("should return a new MountSet with the special override added", () => {
      const initial = new MountSet([]);

      const modified = initial.addSpecialOverride("Test");

      expect(initial.specialOverrides.length).toBe(0);
      expect(modified.specialOverrides.length).toBe(1);
      expect(modified).not.toBe(initial);
    });
  });
});

describe("Mount", () => {
  describe("fromMountShape()", () => {
    it("should drop duplicate special overrides", () => {
      const initial = new EmptyMount(LightArmMount, "lam-1", ["Test Override"]);

      const modified = Mount.fromMountShape(initial, [
        "Test Override",
        "Test Override Two",
      ]);

      expect(modified.specialOverrides).toStrictEqual([
        "Test Override",
        "Test Override Two",
      ]);
    });

    it("should sort special overrides lexicographically", () => {
      const initial = new EmptyMount(LightArmMount, "lam-1", ["Test Override"]);

      const modified = Mount.fromMountShape(initial, [
        "Test Override Two",
        "Lexicographically-first Override",
      ]);

      expect(modified.specialOverrides).toStrictEqual([
        "Lexicographically-first Override",
        "Test Override",
        "Test Override Two",
      ]);
    });

    it("should create an EmptyMount when copying a Mount without a Weapon", () => {
      const initial = new EmptyMount(LightArmMount, "lam-1", []);

      const modified = Mount.fromMountShape(initial);

      expect(modified).toBeInstanceOf(EmptyMount);
      expect(modified).not.toBeInstanceOf(FilledMount);
    });

    it("should create a FilledMount when copying a Mount with a Weapon", () => {
      const initial = new FilledMount(
        LightArmMount,
        "lam-1",
        new Weapon(Blade, MountLocation.Arm),
        [],
      );

      const modified = Mount.fromMountShape(initial);

      expect(modified).toBeInstanceOf(FilledMount);
      expect(modified).not.toBeInstanceOf(EmptyMount);
    });
  });
});
