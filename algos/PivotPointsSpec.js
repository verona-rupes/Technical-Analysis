describe("PivotPoints", function () {
  var pivots;

  beforeAll(function () {
    pivots = new PivotPoints(100, 97, 98);
  });

  it("PP", function () {
    let pp = pivots.pp();
    expect(pp).toEqual(98.33);
  });

  it("r1", function () {
    let pp = pivots.r1();
    expect(pp).toEqual(99.66);
  });

  it("r2", function () {
    let pp = pivots.r2();
    expect(pp).toEqual(101.33);
  });

  it("s1", function () {
    let pp = pivots.s1();
    expect(pp).toEqual(96.66);
  });

  it("s2", function () {
    let pp = pivots.s2();
    expect(pp).toEqual(95.33);
  });

  it("m1", function () {
    let pp = pivots.m1();
    expect(pp).toEqual(96);
  });

  it("m2", function () {
    let pp = pivots.m2();
    expect(pp).toEqual(97.50);
  });

  it("m3", function () {
    let pp = pivots.m3();
    expect(pp).toEqual(99);
  });

  it("m4", function () {
    let pp = pivots.m4();
    expect(pp).toEqual(100.50);
  });

});
