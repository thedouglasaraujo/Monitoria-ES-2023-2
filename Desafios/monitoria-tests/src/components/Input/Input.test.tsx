import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  it ("should render an input", () => {
    render(<Input value="Initial value" onChange={() => {}} />);

    expect(screen.getByRole("textbox")).toHaveValue("Initial value");
  })

  it ("should call onChange when changed", async () => {
    const onChange = vi.fn();
    render(<Input value="" onChange={onChange} />);

    const input = screen.getByRole("textbox")

    const user = userEvent.setup();
    await user.type(input, "Hello");

    expect(onChange).toHaveBeenCalledTimes(5);
    expect(onChange.mock.calls).toEqual([
      ["H"],
      ["e"],
      ["l"],
      ["l"],
      ["o"],
    ]);
  })
})