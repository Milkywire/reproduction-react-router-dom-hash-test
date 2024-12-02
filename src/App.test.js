import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link with hash value", () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: "/", hash: "#hash" }]}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/learn react hash/i);
  expect(linkElement).toBeInTheDocument();
});
