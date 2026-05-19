/**
 * @Requirements regression-base-a:REQ_A01
 */
export class RequirementsExample {
  /**
   * @Requirements reqstool-regression:REQ_001
   */
  checkReliability(): boolean {
    return true;
  }

  /**
   * @Requirements regression-base-b:REQ_B01
   */
  measurePerf(): number {
    return 42;
  }

  /**
   * @Requirements reqstool-regression:REQ_003
   */
  validateSecurity(): boolean {
    return true;
  }

  /**
   * @Requirements reqstool-regression:REQ_004
   */
  maintainLegacy(): void {
    // obsolete — no-op
  }

  /**
   * @Requirements REQ_L01
   */
  interact(): string {
    return "interaction";
  }
}
