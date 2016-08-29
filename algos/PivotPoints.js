class PivotPoint {
  constructor(high, low, close) {
    this.high = high;
    this.low = low;
    this.close = close;
  }
  static PP() {
    if (!this.high || !this.low || !this.close) {
      return;
    }
    this.pp = (this.high + this.low + this.close) / 3;
    return this.pp;
  }
  /** R1 = (Pivot point *2) – Lowest price */
  static R1() {
    this.r1 = (this.pp * 2) - this.low;
    return this.r1;
  }

  static R2() {

  }
  static S1() {

  }

  static S2() {

  }
}
