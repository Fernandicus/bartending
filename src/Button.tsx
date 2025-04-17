import { cloneElement, ComponentProps, JSX } from "react";

export function Button(
  props: ComponentProps<"button"> & { icon?: JSX.Element; label: string }
) {
  const iconBtn = props.icon && cloneElement(props.icon, { width: 18 });

  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
      }}
      {...props}
    >
      {iconBtn}
      {props.label}
    </button>
  );
}
