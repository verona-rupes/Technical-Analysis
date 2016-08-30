/**
  Calculates Pivot points for a stock using high , low, close
  @param {number} high highest price of a stock
  @param {number} low lowest price of a stock
  @param {number} close closing price of a stock
*/
function PivotPoints(high, low, close) {
  var self = this;
  var _pp;
  var _r1;
  var _r2;
  var _s1;
  var _s2;
  var _m1;
  var _m2;
  var _m3;
  var _m4;

  self.setHigh = function(high) {
    self.high = high;
  };

  self.setLow = function(low) {
    self.low = low;
  };

  self.setClose = function(close) {
    self.close = close;
  };
  /**
     pivot = (high + low + close) /3
     @return {number} pivot
   */
  self.pp = function() {
    if (!high || !low || !close) {
      return;
    }
    _pp = parseFloat(((high + low + close) / 3).toFixed(2));
    console.log('pp:' + _pp);
    return _pp;
  };

  /**
 r1 = (Pivot point *2) – Lowest price
 @return {number} resistance1
 **/
  self.r1 = function() {
    _r1 = parseFloat(((_pp * 2) - low).toFixed(2));
    console.log('r1:' + _r1);
    return _r1;
  };
  /**
   r2 = Pivot point + (Highest price – Lowest price)
   * @return {number} resistance2
  **/
  self.r2 = function() {
    _r2 = parseFloat((_pp + (high - low)).toFixed(2));
    console.log('r2:' + _r2);
    return _r2;
  };

  /**
   s1 = (Pivot point*2) – Highest price
   @return {number} support1
 */
  self.s1 = function() {
    _s1 = parseFloat(((_pp * 2) - high).toFixed(2));
    console.log('s1:' + _s1);
    return _s1;
  };
  /**
   S2 = Pivot point – (Highest price – Lowest price)
   @return {number} support2
 */
  self.s2 = function() {
    _s2 = parseFloat((_pp - (high - low)).toFixed(2));
    console.log('s2:' + _s2);
    return _s2;
  };
  /**
     Support median 1
     @return {number} median1
   */
  self.m1 = function() {
    _m1 = parseFloat(((_s1 + _s2) / 2).toFixed(2));
    console.log('m1:' + _m1);
    return _m1;
  };
  /**
    Support median 2
   @return {number} median2
 */
  self.m2 = function() {
    _m2 = parseFloat(((_s1 + _pp) / 2).toFixed(2));
    console.log('m2:' + _m2);
    return _m2;
  };
  /**
   Resistance median 3
   @return {number} median3
 */
  self.m3 = function() {
    _m3 = parseFloat(((_r1 + _pp) / 2).toFixed(2));
    console.log('m3:' + _m3);
    return _m3;
  };
  /**
   Resistance median 3
   @return {number} median4
 */
  self.m4 = function() {
    _m4 = parseFloat(((_r1 + _r2) / 2).toFixed(2));
    console.log('m4:' + _m4);
    return _m4;
  };
}
