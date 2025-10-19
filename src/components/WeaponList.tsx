import { EmptyMount, Mount, MountSet } from "../models/mount";
import { FilledMountListItem } from "./FilledMountListItem";
import { FilledMount } from "../models/mount";
import { EmptyMountListItem } from "./EmptyMountListItem";

interface WeaponListProps {
  mountSet: MountSet;
  handleMountSetChange: (mounts: MountSet) => void;
}

export function WeaponList({
  mountSet: mounts,
  handleMountSetChange: handleMountsChange,
}: WeaponListProps) {
  function handleMountChange(mount: Mount) {
    handleMountsChange(mounts.updateMount(mount));
  }

  const weaponList = mounts.mounts.map((mount) => {
    if (mount.empty === false) {
      return (
        <FilledMountListItem
          mount={mount as FilledMount}
          handleMountChange={handleMountChange}
          key={mount.key}
        />
      );
    }

    return (
      <EmptyMountListItem
        mount={mount as EmptyMount}
        handleMountChange={handleMountChange}
        key={mount.key}
      />
    );
  });

  return (
    <div className="weapons">

      <div className="title">Mount</div>
      <div className="title">Weapon</div>
      <div className="title">Rating</div>
      <div className="title left">Special</div>
      
      {weaponList}

    </div>
  );
}
