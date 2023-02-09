import { render, screen} from "@testing-library/react";
import "@testing-library/react";
import "@testing-library/jest-dom"
import Card from "./Card";
import {MemoryRouter} from "react-router-dom"




it("should render recipie info inside a card", () => {
  const Data = {
    key:"1",
    id:"1",
    name:"Salad"
  }
render(<MemoryRouter><Card></Card></MemoryRouter>)
const booba = screen.getByTestId("test");
expect(booba).toBeInTheDocument();
});
