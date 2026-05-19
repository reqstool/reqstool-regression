package com.reqstool.regression;

import io.github.reqstool.annotations.Requirements;

/** Implementation stubs for regression test requirements. */
@Requirements("regression-base-a:REQ_A01")
public class RequirementsExample {

    /** REQ_B01: Performance measurement. */
    @Requirements("regression-base-b:REQ_B01")
    public void measurePerf() {}

    /** REQ_001: Reliability check. */
    @Requirements("reqstool-regression:REQ_001")
    public void checkReliability() {}

    /** REQ_003: Security validation (deprecated). */
    @Requirements("reqstool-regression:REQ_003")
    public void validateSecurity() {}

    /** REQ_004: Legacy maintenance (obsolete). */
    @Requirements("reqstool-regression:REQ_004")
    public void maintainLegacy() {}

    /** REQ_L01: Interaction capability. */
    @Requirements("REQ_L01")
    public void interact() {}
}
