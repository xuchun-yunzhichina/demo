var assert 		= require("assert")
var should    	= require("chai").should();

describe('Array', function(){
  describe('#indexOf01()', function(){
    it('should return -1 when the value is not present', function(){
      //assert.equal(-1, [1,2,3].indexOf(5));
      //assert.equal(-1, [1,2,3].indexOf(0));
      
      ([1,2,3].indexOf(5)).should.equal(-1);
      ([1,2,3].indexOf(0)).should.equal(-1);
    })
  })
  
  
    describe('#indexOf02()', function(){
    it('should return -1 when the value is not present', function(){
      //assert.equal(-1, [1,2,3].indexOf(5));
      //assert.equal(-1, [1,2,3].indexOf(0));
      
      ([1,2,3].indexOf(5)).should.equal(-1);
      //([1,2,3].indexOf(0)).should.equal(0); //错误测试用例
    })
  })
  
})
