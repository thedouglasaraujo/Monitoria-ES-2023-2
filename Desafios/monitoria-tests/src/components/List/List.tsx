import { FC, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

interface IList {
  items: {
    id: string;
    value: string;
  }[];
}

const List: FC<IList> = ({
  items,
}) => {
  const [taskStatus, setTaskStatus] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (taskId: string, checked: boolean) => {
    setTaskStatus((prevStatus) => ({
      ...prevStatus,
      [taskId]: checked,
    }));
  };

  return (
    <ul>
      {items.map(({ id, value }) => (
        <li key={id} style={{listStyleType: "none"}}>
          <Checkbox
            checked={taskStatus[id] || false}
            onChange={(checked) => handleCheckboxChange(id, checked)}
          />{value}</li>
      ))}
    </ul>
  );
}

export default List;