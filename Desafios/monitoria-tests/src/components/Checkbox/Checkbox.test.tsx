import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("should render a checkbox input", () => {
    render(<Checkbox checked={false} onChange={() => { }} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
  });

  it("should be unchecked by default", () => {
    render(<Checkbox checked={false} onChange={() => { }} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
  });

  it("should change state when clicked", async () => {
    const onChange = vi.fn();
    render(<Checkbox checked={false} onChange={onChange} />);

    const checkbox = screen.getByRole("checkbox");

    const user = userEvent.setup();
    await user.click(checkbox);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("should call onChange with false when unchecked", async () => {
    const onChange = vi.fn();
    render(<Checkbox checked={true} onChange={onChange} />);

    const checkbox = screen.getByRole("checkbox");

    const user = userEvent.setup();
    await user.click(checkbox);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("should call onChange with true when checked", async () => {
    const onChange = vi.fn();
    render(<Checkbox checked={false} onChange={onChange} />);

    const checkbox = screen.getByRole("checkbox");

    const user = userEvent.setup();
    await user.click(checkbox);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(true);
  });

});
