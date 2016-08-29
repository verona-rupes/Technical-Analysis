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
  /**
  r1 = (Pivot point *2) – Lowest price
  @return {number} resistance1
  **/
  static R1() {
    this.r1 = (this.pp * 2) - this.low;
    return this.r1;
  }
  /**
   r2 = Pivot point + (Highest price – Lowest price)
   * @return {number} resistance2
  **/
  static R2() {
    this.r2 = (this.pp) + (this.high - this.low);
    return this.r2;
  }
  /**
   s1 = (Pivot point*2) – Highest price
   @return {number} support1
 */
  static S1() {
    this.s1 = (this.pp * 2) - (this.high);
    return this.s1;
  }
  /**
   S2 = Pivot point – (Highest price – Lowest price)
   @return {number} support1
 */
  static S2() {
    this.s2 = this.pp - (this.high - this.low);
    return this.s2;
  }

  static M1() {
    this.m1 = (this.s1 + this.s2) / 2;
    return this.m1;
  }
  static M2() {
    this.m2 = (this.s1 + this.pp) / 2;
    return this.m2;
  }
  static M3() {
    this.m3 = (this.r1 + this.pp) / 2;
    return this.m3;
  }
  static M4() {
    this.m4 = (this.r1 + this.r2) / 2;
    return this.m4;
  }
}
