import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toggle from "./Toggle";

describe("Testing Toggle componet", () => {
  test("TextChecking", () => {
    //rendering the component in virtual Dom
    render(<Toggle />);
    //select the elements you want to interact with
    const documentText = screen.getByText(/TOGGLE EFFECT/i);
    expect(documentText).toBeInTheDocument();
  });

  test("ShowButtonChecking", () => {
    render(<Toggle />);
    const ShowButton = screen.getByRole("button", { name: "Show" });
    expect(ShowButton).toBeInTheDocument();
    fireEvent.click(ShowButton)
    expect()
  });

  test("HideButtonChecking", () => {

    render(<Toggle />);
    const HideButton = screen.queryByRole("button", { name: "Hide" });
    expect(HideButton).not.toBeInTheDocument();

  });

 
});
