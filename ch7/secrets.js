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
// console.log(s.secretFunction()); // error
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
// console.log(se.secretFunction()); // error
console.log(se.notSecret()); // 'sekrit'
console.log(se.totallyNotSecret); // undefined
console.log(totallyNotSecret); // "I'm defined in the global scope"

// Module Pattern
var secretTemplate = (function(){
  const secret = 'sekrit';
  const secretFunction = function(){
    return secret;
  };
  totallyNotSecret = "I'm defined in the global scope";
  return {normalInfo: 'this is normal',
          notSecret(){
            return secret;
          }}
})();
const sec = Object.create(secretTemplate);
console.log(sec.normalInfo); // 'this is normal'
console.log(sec.secret); // undefined
// console.log(sec.secretFunction()); // error
console.log(sec.notSecret()); // 'sekrit'
console.log(sec.totallyNotSecret); // undefined
console.log(totallyNotSecret); // "I'm defined in the global scope"

// Revealing Module Pattern
var secretTemplate = (function(){
  const secret = 'sekrit';
  const secretFunction = function(){
    return secret;
  };
  totallyNotSecret = "I'm defined in the global scope";
  const normalInfo = 'this is normal';
  const notSecret = function(){
    return secret;
  };
  return {normalInfo, notSecret};
})();
const secr = Object.create(secretTemplate);
console.log(secr.normalInfo); // 'this is normal'
console.log(secr.secret); // undefined
// console.log(secr.secretFunction()); // error
console.log(secr.notSecret()); // 'sekrit'
console.log(secr.totallyNotSecret); // undefined
console.log(totallyNotSecret); // "I'm defined in the global scope"
