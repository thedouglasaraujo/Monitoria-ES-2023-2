import { FC, PropsWithChildren } from "react";

interface IButton extends PropsWithChildren {
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;