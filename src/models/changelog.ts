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
];

export const Todos: string[] = [
  "99% of the UI formatting and layout",
  "Add support for Mega-turret sponsons",
  "Upgrades and Compromises",
  "Rules text for special rules and upgrades/modifications",
  "Save unit to browser local storage",
  "List units saved to storage",
  "Delete a stored unit",
  "Modify a stored unit",
  "Print unit",
  "Support for platoons",
  "Etc, etc, etc...",
];
