import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import WorkoutScreen from "../screens/WorkoutScreen";

jest.mock("@expo/vector-icons", () => ({
  Ionicons: "Ionicons",
  AntDesign: "AntDesign",
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(() => ({ params: { excersises: [] } })),
}));

describe("WorkoutScreen", () => {
  test("renders correctly", () => {
    const { getByText } = render(<WorkoutScreen />);
    expect(getByText("START")).toBeTruthy();
  });

  test("pressing start navigation button should call navigation.navigate", () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<WorkoutScreen />);
    const startButton = getByText("START");
    fireEvent.press(startButton);
    expect(navigation.navigate).toHaveBeenCalledWith("Fit", {
      excersises: [],
    });
  });
});
