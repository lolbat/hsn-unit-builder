export enum VehicleSize {
  Light = "Light",
  Heavy = "Heavy",
  Superheavy = "Superheavy",
  Behemoth = "Behemoth",
}

export enum WeaponName {
  // Light Weaponry
  Autogun = "Autogun",
  Autocannon = "Autocannon",
  Howler = "Howler",
  Laser = "Laser",
  LightMissile = "Light Missile",
  PlasmaBlaster = "Plasma Blaster",
  RotorCannon = "Rotor Cannon",
  LightCannon = "Light Cannon",
  // Heavy Weaponry
  PulseLaser = "Pulse Laser",
  BlastCannon = "Blast Cannon",
  BattleCannon = "Battle Cannon",
  HeavyRotorCannon = "Heavy Rotor Cannon",
  HeavyCannon = "Heavy Cannon",
  HeavyLaser = "Heavy Laser",
  HeavyMissile = "Heavy Missile",
  MagmaBlaster = "Magma Blaster",
  PlasmaCannon = "Plasma Cannon",
  Screamer = "Screamer",
  // Superheavy Weaponry
  SuperBlastCannon = "Super Blast Cannon",
  SuperBattleCannon = "Super Battle Cannon",
  MissileRack = "Missile Rack",
  MagmaCannon = "Magma Cannon",
  SuperPlasmaCannon = "Super Plasma Cannon",
  SuperheavyLaser = "Superheavy Laser",
  // Bombs
  ClusterBombs = "Cluster Bombs",
  IncendiaryBombs = "Incendiary Bombs",
  HeavyBombs = "Heavy Bombs",
  PlasmaBombs = "Plasma Bombs",
  // Close Combat Weaponry
  Blade = "Blade",
  Wrecker = "Wrecker",
  TurboBlade = "Turbo-blade",
  MagmaWrecker = "Magma Wrecker",
}

export function toWeaponName(weaponName: string) {
  switch (weaponName) {
    // Light Weaponry
    case "Autogun":
      return WeaponName.Autogun;
    case "Autocannon":
      return WeaponName.Autocannon;
    case "Howler":
      return WeaponName.Howler;
    case "Laser":
      return WeaponName.Laser;
    case "Light Missile":
      return WeaponName.LightMissile;
    case "Plasma Blaster":
      return WeaponName.PlasmaBlaster;
    case "Rotor Cannon":
      return WeaponName.RotorCannon;
    case "Light Cannon":
      return WeaponName.LightCannon;
    // Heavy Weaponry
    case "Pulse Laser":
      return WeaponName.PulseLaser;
    case "Blast Cannon":
      return WeaponName.BlastCannon;
    case "Battle Cannon":
      return WeaponName.BattleCannon;
    case "Heavy Rotor Cannon":
      return WeaponName.HeavyRotorCannon;
    case "Heavy Cannon":
      return WeaponName.HeavyCannon;
    case "Heavy Laser":
      return WeaponName.HeavyLaser;
    case "Heavy Missile":
      return WeaponName.HeavyMissile;
    case "Magma Blaster":
      return WeaponName.MagmaBlaster;
    case "Plasma Cannon":
      return WeaponName.PlasmaCannon;
    case "Screamer":
      return WeaponName.Screamer;
    // Superheavy Weaponry
    case "Super Blast Cannon":
      return WeaponName.SuperBlastCannon;
    case "Super Battle Cannon":
      return WeaponName.SuperBattleCannon;
    case "Missile Rack":
      return WeaponName.MissileRack;
    case "Magma Cannon":
      return WeaponName.MagmaCannon;
    case "Super Plasma Cannon":
      return WeaponName.SuperPlasmaCannon;
    case "Superheavy Laser":
      return WeaponName.SuperheavyLaser;
    // Bombs
    case "Cluster Bombs":
      return WeaponName.ClusterBombs;
    case "Incendiary Bombs":
      return WeaponName.IncendiaryBombs;
    case "Heavy Bombs":
      return WeaponName.HeavyBombs;
    case "Plasma Bombs":
      return WeaponName.PlasmaBombs;
    // Close Combat Weaponry
    case "Blade":
      return WeaponName.Blade;
    case "Wrecker":
      return WeaponName.Wrecker;
    case "Turbo-blade":
      return WeaponName.TurboBlade;
    case "Magma Wrecker":
      return WeaponName.MagmaWrecker;
    default:
      throw new Error(`Unrecognised weapon name: ${weaponName}`);
  }
}

export enum WeaponCategory {
  Projectile,
  Bomb,
  CloseCombat,
}

export enum WeaponWeightClass {
  Versatile,
  Light,
  Heavy,
  Superheavy,
}

export enum MountLocation {
  Turret = "Turret",
  Fixed = "Fixed",
  Hull = "Hull",
  Sponsons = "Sponsons",
  Arm = "Arm",
  BombBay = "Bomb bay",
  MegaTurret = "Mega-turret",
}

export enum ModificationType {
  Upgrade,
  Compromise,
}
