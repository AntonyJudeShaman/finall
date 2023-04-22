import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Team from "./Team";

test("renders Team component when Team link is clicked", () => {
  
  render(<App />);
  
  const teamLink = screen.getByText(/Team/i);
  fireEvent.click(teamLink);

  const teamComponent = screen.getByTestId("team-component");
  expect(teamComponent).toBeInTheDocument();
});
