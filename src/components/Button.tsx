import React, { ReactNode } from "react";
import cls from "classnames";
const Button = ({
  variant,
  children,
  action,
}: {
  variant?: string;
  children: ReactNode;
  action?: () => void;
}) => {
  return (
    <button
      className={cls(
        `py-2 px-3 my-2 shadow-lg uppercase text-white  tracking-wide`,
        variant === "primary" && `bg-primary`,
        variant === "secondary" && `bg-secondary`,
        variant === "accent" && `bg-accent`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
