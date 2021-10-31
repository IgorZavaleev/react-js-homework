import React from "react";
import fetch from "node-fetch";
import { render, screen, waitFor } from "@testing-library/react";
import { News } from "./News";
import "@testing-library/jest-dom";

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

beforeEach(() => {
  fetch.mockClear();
});

describe("News component check", () => {
  it("News is loading", async () => {
    render(<News id={1} />);
    expect(screen.getByTestId("news_is_loading")).toBeInTheDocument();
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(screen.getByTestId("news_is_loading")).toBeInTheDocument();
  });

  it("News is loaded", async () => {
    render(<News id={2} />);
    expect(screen.getByTestId("news_is_loading")).toBeInTheDocument();
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(screen.getByTestId("news_title")).toHaveTextContent("news title");
    expect(screen.getByTestId("news_body")).toHaveTextContent("news body");
  });

  it("Pictures are changing", async () => {
    jest.useFakeTimers();
    render(<News id={2} />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    const imgSrc1 = screen.getByTestId("news_image").getAttribute("src");
    jest.runOnlyPendingTimers();
    const imgSrc2 = screen.getByTestId("news_image").getAttribute("src");
    expect(imgSrc1).toContain("picsum.photos");
    expect(imgSrc2).toContain("picsum.photos");
    expect(imgSrc1).not.toEqual(imgSrc2);
    jest.useRealTimers();
  });
});
