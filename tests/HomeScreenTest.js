import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Homescreen from "../view/HomeScreen";

describe("HomeScreen", () => {
  test("renders correctly", () => {
    const { getByText } = render(<Homescreen />);
    expect(getByText("PowerFitness")).toBeTruthy();
    expect(getByText("WORKOUTS")).toBeTruthy();
    expect(getByText("KCAL")).toBeTruthy();
    expect(getByText("MINS")).toBeTruthy();
  });
});
