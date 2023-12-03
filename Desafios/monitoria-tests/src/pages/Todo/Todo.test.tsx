import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";
import Todo from "./Todo";

describe("Todo", () => {
  it ("should render an input, a list and a submit button", () => {
    render(<Todo />);

    expect (screen.getByRole("heading", {
      level: 1,
    })).toHaveTextContent("Todo");

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  })

  it ("should add an item to the list when clicking submit button", async () => {
    render(<Todo />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    const user = userEvent.setup();
    await user.type(input, "Hello");
    await user.click(button);

    expect(screen.getByRole("list")).toHaveTextContent("Hello");
    expect(input).toHaveValue("");
  })

  it ("should add an item to the list when pressing enter", async () => {
    render(<Todo />);

    const input = screen.getByRole("textbox");

    const user = userEvent.setup();
    await user.type(input, "Hello{enter}");

    expect(screen.getByRole("list")).toHaveTextContent("Hello");
    expect(input).toHaveValue("");
  })
})