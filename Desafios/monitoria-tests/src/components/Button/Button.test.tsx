import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it ("should render a button", () => {
    render(<Button onClick={() => {}}>Click me</Button>);

    expect(screen.getByRole("button", { name: "Click me"})).toBeInTheDocument();
  })

  it ("should call onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Click me"}));

    expect(onClick).toHaveBeenCalled();
  })

  it ("should not call onClick when disabled", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} disabled>Click me</Button>);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Click me"}));

    expect(onClick).not.toHaveBeenCalled();
  })
})