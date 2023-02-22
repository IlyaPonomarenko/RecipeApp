import { render, screen } from "@testing-library/react";
import "@testing-library/react";
import "@testing-library/jest-dom";
import RecipieDetails from "../RecipieDetails";

describe("1 - RecipieDetails - Check if data is mocked correctly", () =>{
    test("renders data when API call succeeds", async () => {
        render(<RecipieDetails  />);
        const ingredientListElement = await screen.findByText(/Ilya/i)
        expect(ingredientListElement).toBeInTheDocument()
      });
})

describe("2 - RecipieDetails - Check if list items are displayed", () =>{
    test("renders data when API call succeeds", async () => {
        render(<RecipieDetails  />);
        const ingredientListElement = await screen.findAllByRole("listitem")
        expect(ingredientListElement.length).toBe(2)
      });
})


