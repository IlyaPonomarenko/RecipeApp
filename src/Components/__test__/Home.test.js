import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import Home from "../Home";

describe("1 - Home - Check if the link redirects correctly back to Home", () => {
  it("renders component", () => {
    const history = createMemoryHistory();
    render(
      <MemoryRouter initialEntries={["/recipes/1"]}>
        <Home />
      </MemoryRouter>
    );
    expect(history.location.pathname).toBe("/");
  });
});
