describe("wordOrder", function(){
  it("should return a list of all the unique words", function(){
    wordOrder("hello world world").should.equal(["world", "hello"]);
  });
});
