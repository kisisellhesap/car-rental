import { FC } from "react";

type Props = {
  text: string;
  designs?: string;
  disabled?: boolean;
  type?: "submit" | "button";
  handleClick?: () => void;
};

const Button: FC<Props> = ({ text, designs, disabled, type, handleClick }) => {
  return (
    <button
      className={`custom-btn ${designs}`}
      disabled={disabled}
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
