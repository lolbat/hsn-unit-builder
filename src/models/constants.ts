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

export enum UpgradeName {
  AAWeaponConfiguration = "AA Weapon Configuration",
  AbominableHorror = "Abominable Horror",
  AdditionalSponsons = "Additional Sponsons",
  CoaxialMount = "Coaxial Mount",
  CommunicationsModule = "Communications Module",
  EarlyWarningRadarSystem = "Early Warning Radar System",
  EnginePowerIncrease = "Engine Power Increase",
  EnhancedSensors = "Enhanced Sensors",
  ExplosiveShielding = "Explosive Shielding",
  ImprovedHandling = "Improved Handling",
  ImprovedCountermeasures = "Improved Countermeasures",
  IncendiaryAmmunition = "Incendiary Ammunition",
  JumpJets = "Jump Jets",
  LowProfile = "Low Profile",
  MineClearanceEquipment = "Mine Clearance Equipement",
  OpticRefinement = "Optic Refinement",
  Ram = "Ram",
  ReinforcedFrontArmour = "Reinforced Front Armour",
  ReinforcedSideArmour = "Reinforced Side Armour",
  ReinforcedRearArmour = "Reinforced Rear Armour",
  ReinforcedMount = "Reinforced Mount",
  RepulsorDrive = "Repulsor Drive",
  Resilient = "Resilient",
  ReverseFittedGun = "Reverse Fitted Gun",
  SecondaryTurretMount = "Secondary Turret Mount",
  SelfRepairProtocols = "Self Repair Protocols",
  ShoulderTurrets = "Shoulder Turrets",
  SmokeBelcher = "Smoke Belcher",
  SpotterRelay = "Spotter Relay",
  TailGun = "Tail Gun",
  TargetingProtocols = "Targeting Protocols",
  ToughenedHull = "Toughened Hull",
  Transforming = "Transforming",
  TurretGrabber = "Turret-Grabber",
  TwinLinked = "Twin-Linked",
  UpperTurretConfiguration = "Upper Turret Configuration",
  VeteranCrew = "Veteran Crew",
}

export enum CompromiseName {
  EnginePowerReduction = "Engine Power Reduction",
  Flammable = "Flammable",
  GreenCrew = "Green Crew",
  LightFrontArmour = "Light Front Armour",
  LightSecondaryArmour = "Light Secondary Armour",
  LowMorale = "Low Morale",
  MainGunRetrofit = "Main Gun Retrofit",
  PoorOptics = "Poor Optics",
  WeakHull = "Weak Hull",
}

export type ModificationName = UpgradeName | CompromiseName;

function toUpgradeName(name: string) {
  switch (name) {
    case "AA Weapon Configuration": {
      return UpgradeName.AAWeaponConfiguration;
    }
    case "Abominable Horror": {
      return UpgradeName.AbominableHorror;
    }
    case "Additional Sponsons": {
      return UpgradeName.AdditionalSponsons;
    }
    case "Coaxial Mount": {
      return UpgradeName.CoaxialMount;
    }
    case "Communications Module": {
      return UpgradeName.CommunicationsModule;
    }
    case "Early Warning Radar System": {
      return UpgradeName.EarlyWarningRadarSystem;
    }
    case "Engine Power Increase": {
      return UpgradeName.EnginePowerIncrease;
    }
    case "Enhanced Sensors": {
      return UpgradeName.EnhancedSensors;
    }
    case "Explosive Shielding": {
      return UpgradeName.ExplosiveShielding;
    }
    case "Improved Handling": {
      return UpgradeName.ImprovedHandling;
    }
    case "Improved Countermeasures": {
      return UpgradeName.ImprovedCountermeasures;
    }
    case "Incendiary Ammunition": {
      return UpgradeName.IncendiaryAmmunition;
    }
    case "Jump Jets": {
      return UpgradeName.JumpJets;
    }
    case "Low Profile": {
      return UpgradeName.LowProfile;
    }
    case "Mine Clearance Equipement": {
      return UpgradeName.MineClearanceEquipment;
    }
    case "Optic Refinement": {
      return UpgradeName.OpticRefinement;
    }
    case "Ram": {
      return UpgradeName.Ram;
    }
    case "Reinforced Front Armour": {
      return UpgradeName.ReinforcedFrontArmour;
    }
    case "Reinforced Side Armour": {
      return UpgradeName.ReinforcedSideArmour;
    }
    case "Reinforced Rear Armour": {
      return UpgradeName.ReinforcedRearArmour;
    }
    case "Reinforced Mount": {
      return UpgradeName.ReinforcedMount;
    }
    case "Repulsor Drive": {
      return UpgradeName.RepulsorDrive;
    }
    case "Resilient": {
      return UpgradeName.Resilient;
    }
    case "Reverse Fitted Gun": {
      return UpgradeName.ReverseFittedGun;
    }
    case "Secondary Turret Mount": {
      return UpgradeName.SecondaryTurretMount;
    }
    case "Self Repair Protocols": {
      return UpgradeName.SelfRepairProtocols;
    }
    case "Shoulder Turrets": {
      return UpgradeName.ShoulderTurrets;
    }
    case "Smoke Belcher": {
      return UpgradeName.SmokeBelcher;
    }
    case "Spotter Relay": {
      return UpgradeName.SpotterRelay;
    }
    case "Tail Gun": {
      return UpgradeName.TailGun;
    }
    case "Targeting Protocols": {
      return UpgradeName.TargetingProtocols;
    }
    case "Toughened Hull": {
      return UpgradeName.ToughenedHull;
    }
    case "Transforming": {
      return UpgradeName.Transforming;
    }
    case "Turret-Grabber": {
      return UpgradeName.TurretGrabber;
    }
    case "Twin-Linked": {
      return UpgradeName.TwinLinked;
    }
    case "Upper Turret Configuration": {
      return UpgradeName.UpperTurretConfiguration;
    }
    case "Veteran Crew": {
      return UpgradeName.VeteranCrew;
    }
    default: {
      return null;
    }
  }
}

function toCompromiseName(name: string) {
  switch (name) {
    case "Engine Power Reduction": {
      return CompromiseName.EnginePowerReduction;
    }
    case "Flammable": {
      return CompromiseName.Flammable;
    }
    case "Green Crew": {
      return CompromiseName.GreenCrew;
    }
    case "Light Front Armour": {
      return CompromiseName.LightFrontArmour;
    }
    case "Light Secondary Armour": {
      return CompromiseName.LightSecondaryArmour;
    }
    case "Low Morale": {
      return CompromiseName.LowMorale;
    }
    case "Main Gun Retrofit": {
      return CompromiseName.MainGunRetrofit;
    }
    case "Poor Optics": {
      return CompromiseName.PoorOptics;
    }
    case "Weak Hull": {
      return CompromiseName.WeakHull;
    }
    default: {
      return null;
    }
  }
}

export function toModificationName(name: string) {
  return toUpgradeName(name) || toCompromiseName(name);
}
