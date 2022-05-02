import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button color="primary" />);
  });
});

// Write a test to check the to prop as a link