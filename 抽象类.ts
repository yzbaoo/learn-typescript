// 【知识点一】抽象类：只可以被继承，不可以被实例化
abstract class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 【知识点二】抽象方法：只能定义在抽象类中，没有具体实现，需要继承的子类重写
  abstract sayHello(): void
}

class Dog extends Animal {
  // 继承Animal后，如果未定义sayHello，会有提示⚠️
  sayHello(){
    console.log(`my name is ${this.name}. I'm ${this.age} years old`);
  }
}

// const A = new Animal(); // ⚠️无法创建抽象类的实例

const D = new Dog('小美', 3);
console.log(D.sayHello())