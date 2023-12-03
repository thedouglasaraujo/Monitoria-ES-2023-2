import { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";

const Todo: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<{
    id: string;
    value: string;
  }[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setList([
      ...list,
      { id: uuid(), value: inputValue}
    ]);

    setInputValue("");
  }

  return (
    <div>
      <h1>Todo</h1>

      <form onSubmit={handleSubmit}>
        <Input  
          value={inputValue}
          onChange={setInputValue}
        />

        <Button>Add</Button>
      </form>

      <List items={list} />
    </div>
  );
}

export default Todo;
