import { useState } from "react";
import { SwitchArrowsIcon } from "./icons/SwitchArrowsIcon";
import { Button } from "./Button";

type SwitchButtonProps<Mode extends string> = {
  modes: Mode[];
  activeMode(mode: Mode): void;
};

export function SwitchButton<Mode extends string>({
  modes,
  activeMode,
}: SwitchButtonProps<Mode>) {
  const [modePosition, setModePosition] = useState(0);

  const handleClick = () => {
    const nextPosition = modePosition === 0 ? 1 : 0;
    setModePosition(nextPosition);
    activeMode(modes[nextPosition]);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Button
        icon={<SwitchArrowsIcon />}
        label={""}
        onClick={handleClick}
        style={{ borderRadius: "100rem" }}
      />
      <h2 style={{ margin: "0" }}>{modes[modePosition]}</h2>
    </div>
  );
}
