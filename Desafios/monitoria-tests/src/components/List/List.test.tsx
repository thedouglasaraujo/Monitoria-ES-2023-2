import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import List from "./List";

describe("List", () => {
  it ("should render a list", () => {
    render(<List items={[
      { id: "1", value: "One" },
      { id: "2", value: "Two" },
      { id: "3", value: "Three" },
    ]} />);

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent("One");
    expect(list).toHaveTextContent("Two");
    expect(list).toHaveTextContent("Three");
  })
})