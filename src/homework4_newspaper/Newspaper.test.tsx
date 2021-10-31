import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { News } from "./News";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Newspaper } from "./Newspaper";
import fetch from "node-fetch";

jest.mock("node-fetch");

fetch.mockReturnValue(
  Promise.resolve({
    json: () =>
      Promise.resolve({
        title: "news title",
        body: "news body",
      }),
  })
);

describe("Newspaper component check", () => {
  it("Next button turns page", async () => {
    render(<Newspaper newsOnPage={3} />);
    expect(screen.getByTestId("news1")).toBeInTheDocument();
    expect(screen.getByTestId("news2")).toBeInTheDocument();
    expect(screen.getByTestId("news3")).toBeInTheDocument();
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(3));
    expect(screen.queryByTestId("prevPageBtn")).toBeNull();
    expect(screen.getByTestId("nextPageBtn")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("nextPageBtn"));
    expect(screen.getByTestId("news4")).toBeInTheDocument();
    expect(screen.getByTestId("news5")).toBeInTheDocument();
    expect(screen.getByTestId("news6")).toBeInTheDocument();
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(6));
    expect(screen.getByTestId("prevPageBtn")).toBeInTheDocument();
    expect(screen.getByTestId("nextPageBtn")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("prevPageBtn"));
    expect(screen.getByTestId("news1")).toBeInTheDocument();
    expect(screen.getByTestId("news2")).toBeInTheDocument();
    expect(screen.getByTestId("news3")).toBeInTheDocument();
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(9));
    expect(screen.queryByTestId("prevPageBtn")).toBeNull();
    expect(screen.getByTestId("nextPageBtn")).toBeInTheDocument();
  });
});
