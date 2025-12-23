import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Landing_page/home/Hero";

describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("Hero Image");

    // element exists
    expect(heroImage).toBeInTheDocument();

    // src contains correct image name (safe & professional way)
    expect(heroImage.getAttribute("src")).toContain("homeHero.png");
  });
});
