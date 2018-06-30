//requiring the basics dependencies for test
var test = require('./index')


describe('Deep Clone', function() {
  describe('deepClone', function() {
    it('should return a copy of object', function(){
        return test.deepClone({name: 'mayank', age: 21}) == {name: 'mayank', age: 21};
    });
    it('should not change the value of original object if we change new object', function(){
        var obj = {name: 'abc', age: 21}
        var newObj = test.deepClone(obj);
        newObj.age = 32;
        return obj != newObj;
    })
  });
});

