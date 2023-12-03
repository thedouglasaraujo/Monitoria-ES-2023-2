import { FC } from "react";

interface IInput {
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<IInput> = ({
  value,
  onChange,
}) => {
  return (
    <input 
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default Input;