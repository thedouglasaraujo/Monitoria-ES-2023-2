import { FC } from "react";

interface ICheckbox {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: FC<ICheckbox> = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    />
  );
};

export default Checkbox;