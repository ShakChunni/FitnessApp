import React from "react";
import { render } from "@testing-library/react-native";
import FitScreen from "../path/to/FitScreen";

describe("FitScreen", () => {
  it("renders correctly", () => {
    const { getByText } = render(<FitScreen />);
    expect(getByText("FINISHED")).toBeTruthy();
  });
});
