import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ListTitle from "../list-title";
import { describe, expect, it } from "vitest";

describe("ListTitle", () => {
  const id = "id123";
  const title = "Test dulu";
  const select = true;
  const clicked = (id: string) => {
    console.log(id);
  };

  it("should have title", () => {
    render(
      <ListTitle id={id} title={title} selected={select} onClick={clicked} />
    );
    expect(screen.getByText(title));
  });

  it("should click to be have changes", async () => {
    render(
      <ListTitle id={id} title={title} selected={select} onClick={clicked} />
    );

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    expect(buttonElement.className).toBe(
      "text-left text-yellow-400 text-lg bg-slate-900 font-bold border-none cursor-pointer"
    );
  });
});
