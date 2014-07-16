describe("triangle", function(){
  it("should return false if the parameters are not suitable for creating a triangle", function(){
    triangle(3, 3, 8).should.equal(false);
  });
  it("should be an equilateral triangle if all sides have the same length", function(){
    triangle(3, 3, 3).should.equal("equilateral");
  });
  it("should be an isosceles triangle if only two sides are equal", function() {
    triangle(3, 3, 4).should.equal("isosceles");
  });
  it("should be a scalene triangle if all sides have different length",function(){
    triangle(3, 4, 5).should.equal("scalene");
  });
});
