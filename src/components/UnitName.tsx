import { useState } from "react";

interface UnitNameProps {
  name: string;
  handleNameChange(name: string): void;
}

export function UnitName({ name, handleNameChange }: UnitNameProps) {
  const [open, setOpen] = useState<boolean>(false);

  if (open) {
    return (
      <input
        autoFocus
        type="text"
        className="name"
        name="name"
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
        onBlur={(e) => setOpen(false)}
        onKeyUp={(e) => {
          if (e.key === "Enter") setOpen(false);
        }}
      />
    );
  }

  return (
    <div className="name" onClick={(e) => setOpen(true)}>
      {name}
    </div>
  );
}
