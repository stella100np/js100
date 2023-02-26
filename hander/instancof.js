// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  //NOTE: Car的原型属性是否在auto的原型链上
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);//true

//开始手写
function myInstanceOf(left,  right) {
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype
    while (true) {
        if (!proto) {
            return false
        }
        if (proto === prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    
}

console.log(myInstanceOf(auto,Car))

