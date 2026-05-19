import { it, expect } from "vitest";
import { RequirementsExample } from "./RequirementsExample.js";

/**
 * @SVCs reqstool-regression:SVC_001
 */
it("testReliabilityIntegration", () => {
  const example = new RequirementsExample();
  expect(example.checkReliability()).toBe(true);
});
