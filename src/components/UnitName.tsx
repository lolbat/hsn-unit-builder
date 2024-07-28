import { useState } from "react";

interface UnitNameProps {
  name: string;
  nameIsDefault: boolean;
  handleNameChange(name: string): void;
}

export function UnitName({
  name,
  nameIsDefault,
  handleNameChange,
}: UnitNameProps) {
  const [open, setOpen] = useState<boolean>(false);

  let nameValue: string;
  if (nameIsDefault) {
    nameValue = "";
  } else {
    nameValue = name;
  }

  let namePlaceholder: string;
  if (nameIsDefault) {
    namePlaceholder = name;
  } else {
    namePlaceholder = "";
  }

  if (open) {
    return (
      <input
        autoFocus
        type="text"
        className="name"
        name="name"
        value={nameValue}
        placeholder={namePlaceholder}
        onChange={(e) => handleNameChange(e.target.value)}
        onBlur={() => setOpen(false)}
        onKeyUp={(e) => {
          if (e.key === "Enter") setOpen(false);
        }}
      />
    );
  }

  return (
    <div className="name" onClick={() => setOpen(true)}>
      {name}
    </div>
  );
}
