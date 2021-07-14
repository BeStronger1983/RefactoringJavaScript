// Constructor Function
const Secret = function () {
    this.normalInfo = "this is normal";
    const secret = "sekrit";
    const secretFunction = function () {
        return secret;
    };
    this.notSecret = function () {
        return secret;
    };
    totallyNotSecret = "I'm defined in the global scope";
};
const s = new Secret();
console.log(s.normalInfo); // 'this is normal'
console.log(s.secret); // undefined
console.log(s.secretFunction()); // error
console.log(s.notSecret()); // 'sekrit'
console.log(s.totallyNotSecret); // undefined
console.log(totallyNotSecret); // I'm defined in the global scope

// Factory Function
var secretTemplate = (function(){
  var obj = {};
  obj.normalInfo = 'this is normal';
  const secret = 'sekrit';
  const secretFunction = function(){
    return secret;
  };
  obj.notSecret = function(){
    return secret;
  };
  totallyNotSecret = "I'm defined in the global scope";
  return obj;
})();
const se = Object.create(secretTemplate);
console.log(se.normalInfo); // 'this is normal'
console.log(se.secret); // undefined
console.log(se.secretFunction()); // error
console.log(se.notSecret()); // 'sekrit'
console.log(se.totallyNotSecret); // undefined
console.log(totallyNotSecret); // "I'm defined in the global scope"