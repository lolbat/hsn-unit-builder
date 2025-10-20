class Version {
  major: number;
  minor: number;
  patch: number;

  constructor(major: number, minor: number, patch: number) {
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }
}

interface ChangelogEntry {
  index: number;
  date: string;
  version: Version;
  description: string;
}

export const Changelog: ChangelogEntry[] = [
  {
    index: 0,
    date: "2024-07-27",
    version: new Version(0, 0, 1),
    description: "Initial release",
  },
  {
    index: 1,
    date: "2024-07-28",
    version: new Version(0, 0, 2),
    description:
      "Edit unit name. Add contact details. Show a warning when a unit's cost exceeds the max cost of its class.",
  },
  {
    index: 2,
    date: "2024-07-29",
    version: new Version(0, 0, 3),
    description: "Format special ability lists for units and weapons.",
  },
  {
    index: 3,
    date: "2024-07-30",
    version: new Version(0, 0, 4),
    description:
      "Save the current unit state and load it later. Reset the unit form.",
  },
  {
    index: 4,
    date: "2024-07-31",
    version: new Version(0, 0, 5),
    description:
      "Some formatting improvements. Fixed bug in resetting the unit when weapons had been modified.",
  },
  {
    index: 5,
    date: "2024-08-02",
    version: new Version(0, 0, 6),
    description:
      "Added Upgrades and Compromises. Only costs have been implemented. Variable costs, multiple instaces of a modification, and changes to the unit stat card are not yet supported.",
  },
  {
    index: 6,
    date: "2024-08-04",
    version: new Version(0, 0, 7),
    description:
      "Added the ability to apply most Modifications. Modifications that have not yet been implemented are shown in red.",
  },
  {
    index: 7,
    date: "2025-10-19",
    version: new Version(0, 0, 8),
    description:
      "Modified the layout and css to not use 'absolute' grid positioning. Simplified the CSS by removing those references and adding a fixed column size. Broke Weapons off to their own grid. ",
  },
];

export const Todos: string[] = [
  "90% of the UI formatting and layout",
  "Add support for Mega-turret sponsons",
  "Implement remaining modifications",
  "Rules text for special rules and upgrades/modifications",
  "List units saved to storage",
  "Delete a stored unit",
  "Modify a stored unit",
  "Print unit",
  "Support for platoons",
  "Etc, etc, etc...",
];
