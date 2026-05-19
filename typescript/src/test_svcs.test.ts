import { describe, it, expect } from "vitest";
import { RequirementsExample } from "./RequirementsExample.js";

const example = new RequirementsExample();

/**
 * @SVCs regression-base-a:SVC_A01
 */
it("testBaseFunctional", () => {
  expect(example.interact()).toBeDefined();
});

/**
 * @SVCs regression-base-b:SVC_B01
 */
it("testBasePerf", () => {
  expect(example.measurePerf()).toBe(42);
});

/**
 * @SVCs reqstool-regression:SVC_001
 */
it("testReliability", () => {
  expect(example.checkReliability()).toBe(true);
});

/**
 * @SVCs reqstool-regression:SVC_004
 */
it("testSecurity", () => {
  expect(example.validateSecurity()).toBe(true); // intentional failure
});

/**
 * @SVCs reqstool-regression:SVC_007
 */
it.skip("testPerfSkip", () => {
  // skipped: benchmark environment unavailable
});

/**
 * @SVCs SVC_L01
 */
it("testInteraction", () => {
  expect(example.interact()).toBe("interaction");
});

/**
 * @SVCs SVC_L03
 */
it("testGrandparentVerify", () => {
  expect(example.checkReliability()).toBeDefined();
});
