import { FC } from "react";

interface IList {
  items: {
    id: string;
    value: string;
  }[];
}

const List: FC<IList> = ({
  items,
}) => {
  return (
    <ul>
      {items.map(({ id, value }) => (
        <li key={id}>{value}</li>
      ))}
    </ul>
  );
}

export default List;